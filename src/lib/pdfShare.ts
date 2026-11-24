// Free, client-side request PDF + share helper. No server, no network call, nothing stored.
// Two-step on purpose: generate (async, on submit) then share (sync from a fresh tap),
// so browser user-activation is never spent waiting for PDF generation.
const PAGE_W = 794, PAGE_H = 1123, PAD = 48;           // A4 at 96dpi
const CHUNK = 500;                                      // long values are split at paragraph/sentence/space so no row is cut

function chunkText(v: any): string[] {
  v = String(v ?? '');
  if (v.length <= CHUNK) return [v];
  const out: string[] = []; let cur = '';
  for (const part of v.split(/(?<=[\n.!؟?،])\s*/)) {
    if ((cur + part).length > CHUNK && cur) { out.push(cur.trim()); cur = ''; }
    if (part.length > CHUNK) { for (let i = 0; i < part.length; i += CHUNK) out.push(part.slice(i, i + CHUNK)); }
    else cur += part + ' ';
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

export async function buildRequestPdf({ title, rows, lang = 'ar', footer = '', cont = lang === 'ar' ? '(تابع)' : '(cont.)' }: { title: string; rows: [string, string][]; lang?: string; footer?: string; cont?: string }): Promise<Blob> {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const host = document.createElement('div');
  host.setAttribute('dir', dir);
  host.setAttribute('data-pdfhost', '1');
  host.style.cssText = `position:fixed;left:-10000px;top:0;width:${PAGE_W}px;background:#fff;color:#111;padding:${PAD}px;box-sizing:border-box;font-family:Tahoma,Arial,"Noto Naskh Arabic",sans-serif;line-height:1.7`;
  const head = document.createElement('h1');
  head.style.cssText = 'font-size:26px;margin:0 0 20px;border-bottom:3px solid #0a3d62;padding-bottom:10px';
  head.textContent = title;                          // textContent: user text is never parsed as HTML
  host.appendChild(head);
  for (const [k, v] of rows as [string, any][]) {
    if (v === '' || v == null) continue;
    chunkText(v).forEach((c, i) => {
      const row = document.createElement('div');
      row.className = 'r';
      row.style.cssText = 'display:flex;gap:12px;padding:8px 0;border-bottom:1px solid #ddd';
      const b = document.createElement('b'); b.style.minWidth = '170px'; b.textContent = i ? `${k} ${cont}` : k;
      const s = document.createElement('span'); s.style.cssText = 'flex:1;white-space:pre-wrap;word-break:break-word'; s.textContent = c;
      row.append(b, s); host.appendChild(row);
    });
  }
  if (footer) { const f = document.createElement('p'); f.className = 'r'; f.style.cssText = 'margin-top:24px;color:#555;font-size:13px'; f.textContent = footer; host.appendChild(f); }
  document.body.appendChild(host);
  try {
    // Page breaks at row boundaries. Offsets are measured in html2canvas's own cloned document
    // (the exact layout that gets painted), so a row can never be cut by a layout difference.
    const usable = PAGE_H - PAD
    let breaks: number[] = [0]
    const canvas = await html2canvas(host, {
      scale: 2, backgroundColor: '#fff',
      onclone: (doc: Document) => {
        const h = doc.querySelector<HTMLElement>('[data-pdfhost]')
        if (!h) return
        let pageStart = 0
        for (const el of [...h.querySelectorAll<HTMLElement>('.r')]) {
          const bottom = el.offsetTop + el.offsetHeight
          if (bottom - pageStart > usable) { pageStart = el.offsetTop - 2; breaks.push(pageStart) }
        }
        breaks.push(h.offsetHeight)
      },
    })
    if (breaks.length < 2) breaks = [0, canvas.height / (canvas.width / PAGE_W)]
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
    const pw = pdf.internal.pageSize.getWidth();
    const k = canvas.width / PAGE_W;
    for (let p = 0; p < breaks.length - 1; p++) {
      const y0 = Math.round(breaks[p] * k), h = Math.round((breaks[p + 1] - breaks[p]) * k);
      const part = document.createElement('canvas'); part.width = canvas.width; part.height = h;
      const ctx = part.getContext('2d')!; ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, part.width, h);
      ctx.drawImage(canvas, 0, y0, canvas.width, h, 0, 0, canvas.width, h);
      if (p) pdf.addPage();
      pdf.addImage(part.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pw, h * pw / canvas.width);
    }
    return pdf.output('blob');
  } finally { host.remove(); }
}

// Call SYNCHRONOUSLY from a click handler with an already-built blob (no await before share).
export function canShareFile(blob: Blob, filename: string): boolean {
  try { const f = new File([blob], filename, { type: 'application/pdf' }); return !!(navigator.canShare && navigator.canShare({ files: [f] })); } catch { return false; }
}
export async function shareOrDownload(blob: Blob, filename: string, text = ''): Promise<'shared' | 'downloaded' | 'cancelled'> {
  const file = new File([blob], filename, { type: 'application/pdf' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file], text }); return 'shared'; }
    catch (e: any) { if (e && e.name === 'AbortError') return 'cancelled'; }   // other errors fall through to download
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  return 'downloaded';
}
