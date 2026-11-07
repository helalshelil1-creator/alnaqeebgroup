# دليل الصور — IMAGES.md

كل صورة في الموقع، ومكان استخدامها بالضبط. الصور كلها في مجلد واحد:

```
A:\alnaqeeb-website\public\img\
```

**لتغيير صورة:** امسح الملف القديم وانسخ الجديد بنفس الاسم تمامًا (نفس الامتداد). لا تحتاج أي تعديل في الكود.

**لإضافة صورة جديدة:** ضع الملف في نفس المجلد، ثم افتح الملف المذكور في عمود «مكان الاستخدام» وغيّر المسار.

**لإزالة صورة:** امسح الملف، ثم احذف سطر المسار من الملفات المذكورة في عمود «مكان الاستخدام» وإلا ستظهر الصورة مكسورة.

عدد الصور: **31** صورة — الحجم الكلي: **5 MB**

---

## الشعارات والهوية

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `logo.png` | 160 KB | `README.md`, `index.html`, `src/data/site.ts` |
| `logo-icon.png` | 72 KB | `index.html`, `src/components/Preloader.tsx` |

## الصفحة الرئيسية — سلايدر البطل (Hero)

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `hero.jpg` | 126 KB | `index.html`, `src/components/HeroSlider.tsx`, `src/lib/usePageMeta.ts`, `src/pages/RequestQuote.tsx` |
| `hero2.jpg` | 153 KB | `src/components/HeroSlider.tsx`, `src/components/PageHero.tsx`, `src/pages/Home.tsx`, `src/pages/Industries.tsx`, `src/pages/NotFound.tsx`, `src/pages/TechnicalOffice.tsx` |
| `hero3.jpg` | 182 KB | `src/components/HeroSlider.tsx`, `src/data/industries.ts`, `src/pages/About.tsx`, `src/pages/Careers.tsx` |
| `execution-site.jpg` | 191 KB | `src/components/HeroSlider.tsx`, `src/data/industries.ts`, `src/data/projects.ts`, `src/pages/Home.tsx` |
| `execution2.jpg` | 187 KB | `src/pages/Home.tsx` |
| `execution3.jpg` | 197 KB | `src/pages/Home.tsx` |
| `mmt-vehicle.jpg` | 220 KB | `src/components/HeroSlider.tsx`, `src/pages/Home.tsx`, `src/pages/MMT.tsx` |
| `proj-commercial.jpg` | 219 KB | `src/components/HeroSlider.tsx`, `src/data/projects.ts` |
| `ind-infrastructure.jpg` | 156 KB | `src/components/HeroSlider.tsx`, `src/data/industries.ts` |

## صفحة الخدمات

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `svc-electrical.jpg` | 167 KB | `src/data/services.ts`, `src/pages/Services.tsx` |
| `svc-mechanical.jpg` | 193 KB | `src/data/projects.ts`, `src/data/services.ts` |
| `svc-hvac.jpg` | 193 KB | `src/data/industries.ts`, `src/data/projects.ts`, `src/data/services.ts` |
| `svc-fire.jpg` | 201 KB | `src/data/projects.ts`, `src/data/services.ts` |
| `svc-panels.jpg` | 158 KB | `src/data/industries.ts`, `src/data/projects.ts`, `src/data/services.ts` |
| `svc-elv.jpg` | 176 KB | `src/data/services.ts` |
| `svc-maintenance.jpg` | 159 KB | `src/data/services.ts` |

## صفحة المشاريع

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `proj-commercial.jpg` | 219 KB | `src/components/HeroSlider.tsx`, `src/data/projects.ts` |
| `proj-infrastructure.jpg` | 342 KB | `src/data/projects.ts` |
| `proj-residential.jpg` | 313 KB | `src/data/industries.ts`, `src/data/projects.ts` |

## صفحة القطاعات

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `ind-infrastructure.jpg` | 156 KB | `src/components/HeroSlider.tsx`, `src/data/industries.ts` |
| `proj-residential.jpg` | 313 KB | `src/data/industries.ts`, `src/data/projects.ts` |

## صفحات الشركة (من نحن / اتصل / الوظائف / الجودة)

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `about.jpg` | 218 KB | `src/components/AboutSection.tsx`, `src/data/industries.ts`, `src/pages/About.tsx`, `src/pages/Contact.tsx`, `src/pages/Home.tsx`, `src/pages/Projects.tsx` |
| `capabilities.jpg` | 310 KB | `src/data/industries.ts`, `src/pages/Home.tsx` |
| `careers.jpg` | 236 KB | `src/pages/Careers.tsx` |
| `chairman.jpg` | 35 KB | `index.html`, `src/components/Footer.tsx`, `src/pages/About.tsx`, `src/pages/Contact.tsx` |
| `coordination.jpg` | 265 KB | `src/pages/Home.tsx` |
| `diagnosis.jpg` | 158 KB | `src/pages/Home.tsx` |
| `hq-office.jpg` | 177 KB | `src/pages/Contact.tsx`, `src/pages/Home.tsx` |
| `safety.jpg` | 208 KB | `src/pages/Home.tsx`, `src/pages/Quality.tsx` |

## المكتب الفني و MMT

| الصورة | الحجم | مكان الاستخدام |
|---|---|---|
| `office-design.jpg` | 222 KB | `src/pages/Home.tsx`, `src/pages/TechnicalOffice.tsx` |
| `office-mep.jpg` | 249 KB | `src/pages/TechnicalOffice.tsx` |
| `mmt-team.jpg` | 198 KB | `src/pages/Home.tsx`, `src/pages/MMT.tsx` |

---

## الصور المستخدمة في أكثر من مكان

| الصورة | عدد المواضع | التفاصيل |
|---|---|---|
| `about.jpg` | 6 | src/components/AboutSection.tsx, src/data/industries.ts, src/pages/About.tsx, src/pages/Contact.tsx, src/pages/Home.tsx, src/pages/Projects.tsx |
| `hero2.jpg` | 6 | src/components/HeroSlider.tsx, src/components/PageHero.tsx, src/pages/Home.tsx, src/pages/Industries.tsx, src/pages/NotFound.tsx, src/pages/TechnicalOffice.tsx |
| `hero.jpg` | 4 | index.html, src/components/HeroSlider.tsx, src/lib/usePageMeta.ts, src/pages/RequestQuote.tsx |
| `chairman.jpg` | 4 | index.html, src/components/Footer.tsx, src/pages/About.tsx, src/pages/Contact.tsx |
| `hero3.jpg` | 4 | src/components/HeroSlider.tsx, src/data/industries.ts, src/pages/About.tsx, src/pages/Careers.tsx |
| `execution-site.jpg` | 4 | src/components/HeroSlider.tsx, src/data/industries.ts, src/data/projects.ts, src/pages/Home.tsx |
| `logo.png` | 3 | README.md, index.html, src/data/site.ts |
| `mmt-vehicle.jpg` | 3 | src/components/HeroSlider.tsx, src/pages/Home.tsx, src/pages/MMT.tsx |
| `svc-hvac.jpg` | 3 | src/data/industries.ts, src/data/projects.ts, src/data/services.ts |
| `svc-panels.jpg` | 3 | src/data/industries.ts, src/data/projects.ts, src/data/services.ts |
| `logo-icon.png` | 2 | index.html, src/components/Preloader.tsx |
| `proj-commercial.jpg` | 2 | src/components/HeroSlider.tsx, src/data/projects.ts |
| `ind-infrastructure.jpg` | 2 | src/components/HeroSlider.tsx, src/data/industries.ts |
| `capabilities.jpg` | 2 | src/data/industries.ts, src/pages/Home.tsx |
| `proj-residential.jpg` | 2 | src/data/industries.ts, src/data/projects.ts |
| `svc-fire.jpg` | 2 | src/data/projects.ts, src/data/services.ts |
| `svc-mechanical.jpg` | 2 | src/data/projects.ts, src/data/services.ts |
| `svc-electrical.jpg` | 2 | src/data/services.ts, src/pages/Services.tsx |
| `hq-office.jpg` | 2 | src/pages/Contact.tsx, src/pages/Home.tsx |
| `office-design.jpg` | 2 | src/pages/Home.tsx, src/pages/TechnicalOffice.tsx |
| `mmt-team.jpg` | 2 | src/pages/Home.tsx, src/pages/MMT.tsx |
| `safety.jpg` | 2 | src/pages/Home.tsx, src/pages/Quality.tsx |

---

## ملاحظات

- كل الصور مستخدمة — لا توجد صور زائدة أو مكررة.
- الامتدادات المستخدمة: `.jpg` للصور الفوتوغرافية، `.png` للشعار (لدعم الخلفية الشفافة).
- الصور الكبيرة (أكثر من 300 KB) قد تبطئ التحميل — يمكن ضغطها قبل النشر.
- الصورة الافتراضية للميتا (مشاركة اللينك): `/img/hero.jpg`
- صورة العدادات الإحصائية في الصفحة الرئيسية: لا توجد — الأرقام نصية.