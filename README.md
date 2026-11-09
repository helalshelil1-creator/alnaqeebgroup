# موقع مجموعة النقيب — AL NAQEEB GROUP

موقع تعريفي متعدد الصفحات، ثنائي اللغة (عربي / إنجليزي) مع دعم كامل لاتجاه RTL.
مبني بـ React + TypeScript + Vite + Tailwind CSS.

---

## 📌 ابدأ هنا

| عايز تعمل إيه؟ | افتح الملف ده |
|---|---|
| تغيّر صورة | `IMAGES.md` — ثم اسحب وأفلت في `public/img/` |
| تغيّر نص أو رقم | `CONTENT.md` — ثم عدّل `src/data/` أو `src/locales/` |
| تشوف شكل الموقع | شغّل `npm run dev` |
| ترفع الموقع | شغّل `npm run build` ثم ارفع `dist/` |

**ملخص سريع:**
- الصور كلها في مجلد واحد: `public/img/`
- كل النصوص في مجلدين: `src/data/` (المحتوى) و `src/locales/` (الترجمات)
- ملفات التشغيل والبناء في جذر المشروع وفي `vercel.json`

---

## 1. التشغيل المحلي

```bash
npm install
npm run dev        # http://localhost:5173
```

## 2. البناء

```bash
npm run build      # فحص الأنواع + حزمة الإنتاج → dist/
npm run preview    # معاينة على http://localhost:4173
```

## 3. النشر على Vercel

المشروع جاهز بـ `vercel.json` (SPA fallback + تخزين طويل للملفات).

اربط الريبو بـ Vercel وانشر — لا إعدادات إضافية.

| الإعداد | القيمة |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |
| Node | 18+ |

---

## 4. هيكل الملفات

```
alnaqeeb-website/
│
├── README.md          ← أنت هنا: الدليل العام
├── CONTENT.md         ← أماكن تعديل النصوص والأرقام
├── IMAGES.md          ← كل الصور ومكان استخدامها
│
├── index.html         ← وسم المشاركة (العنوان/الوصف/الصورة) + JSON-LD
├── vercel.json        ← إعدادات النشر
├── vite.config.ts     ← إعدادات البناء
├── tailwind.config.js ← ألوان وخطوط الهوية
├── postcss.config.js
├── tsconfig.json
├── package.json
├── .env.example       ← اختياري: ربط الفورم بخدمة بريد
├── .gitignore         ← يستثني node_modules و dist
├── google8931332ad97d0a72.html  ← ملف تحقق Google Search Console
│
├── public/            ← كل ما يُقدَّم كما هو
│   ├── img/           ← ★ كل الصور (31 صورة) — اسحب وأفلت هنا
│   ├── robots.txt
│   ├── sitemap.xml    ← 26 رابط — يتحدث تلقائيًا مع البناء
│   ├── _redirects     ← خاص بـ Netlify فقط (Vercel لا يحتاجه)
│   └── config.json    ← اختياري: عنوان خدمة الفورم وقت التشغيل
│
└── src/
    ├── main.tsx       ← نقطة الدخول
    ├── App.tsx        ← جدول المسارات (14 صفحة)
    ├── i18n.ts        ← إعداد الترجمة والتحقق من اللغة
    ├── index.css      ← هوية التصميم (الألوان، الخطوط، الحركات)
    ├── vite-env.d.ts
    │
    ├── data/          ← ★ المحتوى — عدّل هنا
    │   ├── site.ts       بيانات الشركة، رئيس المجلس، التواصل، الأرقام
    │   ├── services.ts   الخدمات السبع
    │   ├── projects.ts   المشاريع
    │   └── industries.ts القطاعات
    │
    ├── locales/       ← ★ الترجمات — عدّل هنا
    │   ├── ar.ts         كل نصوص الواجهة بالعربي
    │   └── en.ts         كل نصوص الواجهة بالإنجليزي
    │
    ├── components/    ← أجزاء الواجهة (لا تلمسها)
    │   ├── Layout.tsx        هيكل الصفحة: الترويسة، الفوتر، الأزرار
    │   ├── Header.tsx        شريط التنقل + قائمة الخدمات
    │   ├── HeroSlider.tsx    سلايدر الصفحة الرئيسية
    │   ├── Footer.tsx        الفوتر
    │   ├── ServiceCard.tsx   بطاقة الخدمة
    │   ├── PageHero.tsx      ترويسة الصفحات الداخلية
    │   ├── Feature.tsx       قسم صورة/نص متناوب
    │   ├── Counter.tsx       عدّاد الأرقام
    │   ├── Faq.tsx           أسئلة شائعة
    │   ├── Reveal.tsx        تأثير الظهور عند التمرير
    │   ├── Preloader.tsx     شاشة التحميل
    │   ├── FloatingActions.tsx  واتساب + العودة للأعلى
    │   ├── Field.tsx         حقول الفورم
    │   └── ...
    │
    ├── pages/         ← تخطيط الصفحات (لا تلمسها)
    │   ├── Home.tsx           الرئيسية
    │   ├── About.tsx          من نحن
    │   ├── Services.tsx       الخدمات
    │   ├── ServiceDetail.tsx  صفحة خدمة
    │   ├── Projects.tsx       المشاريع
    │   ├── ProjectDetail.tsx  صفحة مشروع
    │   ├── Industries.tsx     القطاعات
    │   ├── MMT.tsx            قطاع MMT
    │   ├── TechnicalOffice.tsx المكتب الفني
    │   ├── Quality.tsx        الجودة والسلامة
    │   ├── Careers.tsx        الوظائف
    │   ├── Contact.tsx        اتصل بنا
    │   ├── RequestQuote.tsx   اطلب عرض سعر
    │   └── NotFound.tsx       صفحة 404
    │
    └── lib/           ← أكواد مساعدة (لا تلمسها)
        ├── usePageMeta.ts     عنوان ووصف كل صفحة
        ├── useLoc.ts          مساعدات ثنائية اللغة
        ├── forms.ts           إرسال الفورم
        ├── useForm.ts         حالة الفورم
        ├── validation.ts      التحقق من المدخلات
        └── icons.tsx          الأيقونات
```

---

## 5. الهوية والألوان

| الاسم | القيمة | الاستخدام |
|---|---|---|
| `navy` | `#062B52` | اللون الأساسي، الأقسام الداكنة |
| `navy-800` | `#0A3765` | عند المرور / العمق |
| `gold` | `#DCA52E` | اللون المميز، الأزرار، الأيقونات |
| `ink` | `#172B45` | نص الجسم |
| `muted` | `#667085` | النص الثانوي |
| `surface` | `#F4F6F9` | خلفية الأقسام المتناوبة |

- **الخطوط:** Inter (لاتيني) + Cairo (عربي)
- **الحركات:** ظهور تدريجي + سلايدر — تُعطَّل تلقائيًا عند تفضيل تقليل الحركة
- **إمكانية الوصول:** روابط تجاوز، مؤشرات تركيز، وسوم دلالية، دعم RTL كامل

---

## 6. الفورمات

الفورمات تعمل بالكامل (تحقق من المدخلات ورسائل خطأ مترجمة) وبـ **صراحة**:
بدون خدمة بريد، تُحفظ البيانات في `localStorage` وتظهر رسالة توضح ذلك.

للربط بخدمة:
- وقت البناء: `.env` → `VITE_FORM_ENDPOINT=https://your-endpoint/collect`
- أو وقت التشغيل: `public/config.json` → `{ "formEndpoint": "https://…" }`

---

## 7. ملاحظات المحتوى

| العنصر | المكان | الحالة |
|---|---|---|
| بيانات التواصل | `src/data/site.ts` → `contact` | ✅ متحقق منها |
| رئيس مجلس الإدارة | `src/data/site.ts` → `company.chairman` | ✅ م. هلال شليل |
| الأرقام الإحصائية | `src/data/site.ts` → `stats` | ⚠️ توضيحية |
| المشاريع | `src/data/projects.ts` | ⚠️ نماذج |
| الشهادات | `src/pages/Quality.tsx` | ⚠️ لا يوجد |
| خريطة جوجل | `src/data/site.ts` → `contact.mapUrl` | ⚠️ فارغ |
| حسابات التواصل | `src/data/site.ts` → `contact.social` | ⚠️ فارغ |
| الشعار | `public/img/logo.png` | استبدل بالأصل |

---

## 8. الصور

كل الصور في `public/img/` (31 صورة، ~5 MB).
راجع `IMAGES.md` لمعرفة مكان استخدام كل صورة.

**تبديل صورة:** امسح القديم والصق الجديد بنفس الاسم والامتداد — لا تحتاج تعديل أي كود.

---

## 9. اللغة والترجمة

- زر التبديل في الترويسة ( surface + الموبايل) — يُحفظ في `localStorage`
- العربية تغيّر الاتجاه إلى RTL وتحمّل خط Cairo وتترجم كل الصفحات
- كل المحتوى المهيكل (الخدمات، المشاريع، القطاعات) ثنائي اللغة عبر كائنات `{ en, ar }`

---

## 10. SEO

- عنوان ووصف وOG وcanonical لكل صفحة
- JSON-LD: `Organization` + `WebSite` + `Person` + `BreadcrumbList`
- `sitemap.xml` (26 رابط) + `robots.txt`
- صورة المشاركة: `/img/hero.jpg`
- النطاق الرسمي: `https://Alnaqeeb-group.vercel.app`

---

## 11. قائمة التحقق

- [x] فحص الأنواع والبناء نظيفان
- [x] كل الصفحات الأربعة عشرة تعمل بالمحتوى الصحيح
- [x] لا أخطاء في وحدة التحكم
- [x] لا صور مكسورة، لا تمرير أفقي على 390px و 1440px
- [x] تبديل كامل عربي ⇄ إنجليزي مع RTL
- [x] الفورمات تتحقق محليًا وتبلّغ بصدق
- [x] احترام تفضيل تقليل الحركة
- [x] إعدادات Vercel جاهزة
