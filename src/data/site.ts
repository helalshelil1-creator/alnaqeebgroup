import type { Loc } from './services'

export interface Value {
  icon: string
  title: Loc
  text: Loc
}

export const values: Value[] = [
  {
    icon: 'ShieldCheck',
    title: { en: 'Quality Assurance', ar: 'ضمان الجودة' },
    text: { en: 'Disciplined quality control at every stage of delivery.', ar: 'ضبط جودة منضبط في كل مرحلة من مراحل التنفيذ.' },
  },
  {
    icon: 'HardHat',
    title: { en: 'Safety First', ar: 'السلامة أولًا' },
    text: { en: 'A strong culture that protects people, assets and sites.', ar: 'ثقافة راسخة تحمي الأشخاص والأصول والمواقع.' },
  },
  {
    icon: 'Handshake',
    title: { en: 'Reliable Partner', ar: 'شريك موثوق' },
    text: { en: 'Accountable delivery and lasting client partnerships.', ar: 'تسليم مسؤول وشراكات عملاء مستدامة.' },
  },
  {
    icon: 'Lightbulb',
    title: { en: 'Innovative Solutions', ar: 'حلول مبتكرة' },
    text: { en: 'Modern, efficient and intelligent building systems.', ar: 'أنظمة مبانٍ حديثة وفعّالة وذكية.' },
  },
]

/** Verified company contact details (November 2026). */
export const contact = {
  verified: true,
  email: 'alnaqeebgroup@gmail.com',
  phone: '+20 112 416 9656',
  whatsapp: '+201551405418',
  address: { en: 'Sun Capital, 6th of October City', ar: 'صن كابيتال - مدينة السادس من أكتوبر' },
  hours: { en: 'Sunday – Thursday, 8:00 – 18:00', ar: 'الأحد – الخميس، 8:00 – 18:00' },
  mapUrl: '',
  social: {
    linkedin: '',
    instagram: '',
    x: '',
    facebook: '',
  },
}

export const company = {
  name: 'AL NAQEEB GROUP',
  nameAr: 'مجموعة النقيب',
  tagline: { en: 'Engineering Excellence & Contracting', ar: 'التميز الهندسي والمقاولات' },
  chairman: {
    name: { en: 'Eng. Helal Shelil', ar: 'المهندس / هلال شليل' },
    role: { en: 'Chairman of the Board of Directors', ar: 'رئيس مجلس الإدارة' },
  },
  logo: '/img/logo.png',
  // Illustrative placeholder stats — replace with verified figures before publishing.
  statsVerified: false,
  stats: [
    { icon: 'Building', value: '50+', label: { en: 'Projects Delivered', ar: 'مشروع منفذ' } },
    { icon: 'Users', value: '80+', label: { en: 'Clients Served', ar: 'عميل' } },
    { icon: 'HardHat', value: '50+', label: { en: 'Engineering & Technical Experts', ar: 'خبير هندسي وفني' } },
    { icon: 'CalendarClock', value: '15+', label: { en: 'Years of Experience', ar: 'سنة خبرة' } },
  ],
}
