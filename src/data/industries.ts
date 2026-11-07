import type { Loc } from './services'

export interface Industry {
  slug: string
  title: Loc
  image: string
  imageAlt?: string
  imageCaption?: string
  description: Loc
  solutions: { en: string[]; ar: string[] }
  icon: string
}

export const industries: Industry[] = [
  {
    slug: 'commercial-buildings',
    title: { en: 'Commercial Buildings', ar: 'المباني التجارية' },
    image: '/img/capabilities.jpg',
    imageAlt: 'Modern shopping mall and commercial office building exterior',
    imageCaption: 'Commercial Buildings',
    icon: 'Building2',
    description: {
      en: 'Offices, retail and mixed-use developments that demand reliable, efficient and scalable building systems.',
      ar: 'مكاتب وتجارة ومبانٍ متعددة الاستخدام تتطلب أنظمة مبانٍ موثوقة وفعّالة وقابلة للتوسع.',
    },
    solutions: {
      en: ['HVAC & ventilation', 'Electrical distribution & lighting', 'ELV & smart systems', 'Fire life-safety'],
      ar: ['التكييف والتهوية', 'توزيع الطاقة والإنارة', 'الأنظمة الذكية', 'حماية الحياة من الحريق'],
    },
  },
  {
    slug: 'residential-developments',
    title: { en: 'Residential Developments', ar: 'التطويرات السكنية' },
    image: '/img/proj-residential.jpg',
    imageAlt: 'Modern apartment complex and villa development facade',
    imageCaption: 'Residential Developments',
    icon: 'Home',
    description: {
      en: 'Villas, apartments and gated communities engineered for comfort, safety and long-term maintainability.',
      ar: 'فلل وشقق ومجمعات سكنية مصممة للراحة والأمان وقابلية الصيانة طويلة الأمد.',
    },
    solutions: {
      en: ['Water & drainage services', 'Smart home systems', 'Central HVAC', 'Fire detection'],
      ar: ['خدمات المياه والصرف', 'أنظمة المنازل الذكية', 'التكييف المركزي', 'كشف الحريق'],
    },
  },
  {
    slug: 'industrial-facilities',
    title: { en: 'Industrial Facilities', ar: 'المنشآت الصناعية' },
    image: '/img/execution-site.jpg',
    imageAlt: 'Large industrial warehouse and factory building with steel structure',
    imageCaption: 'Industrial Facilities',
    icon: 'Factory',
    description: {
      en: 'Warehouses, plants and production facilities requiring resilient power, cooling and control.',
      ar: 'مستودعات ومصانع ومرافق إنتاج تتطلب طاقة وتبريدًا وتحكمًا مرنًا.',
    },
    solutions: {
      en: ['HV & LV power', 'Process cooling', 'Control panels & PLC', 'Maintenance contracts'],
      ar: ['طاقة الجهد العالي والمنخفض', 'تبريد العمليات', 'لوحات التحكم و PLC', 'عقود الصيانة'],
    },
  },
  {
    slug: 'healthcare-facilities',
    title: { en: 'Healthcare Facilities', ar: 'المرافق الصحية' },
    image: '/img/svc-hvac.jpg',
    imageAlt: 'Modern hospital building with glass facade and medical complex',
    imageCaption: 'Healthcare Facilities',
    icon: 'HeartPulse',
    description: {
      en: 'Clinics and hospitals where redundancy, hygiene-critical air handling and uninterrupted power are essential.',
      ar: 'عيادات ومستشفيات حيث تكون أنظمة الاستعداد والتكرار ومعالجة الهواء الحساسة للنظافة والطاقة المستمرة أساسية.',
    },
    solutions: {
      en: ['Medical gas & HVAC', 'Standby power systems', 'Access control', 'Clean suppression'],
      ar: ['الغازات الطبية والتكييف', 'أنظمة الطاقة الاحتياطية', 'التحكم في الوصول', 'إطفاء نظيف'],
    },
  },
  {
    slug: 'educational-buildings',
    title: { en: 'Educational Buildings', ar: 'المباني التعليمية' },
    image: '/img/svc-panels.jpg',
    imageAlt: 'University campus and educational building with modern architecture',
    imageCaption: 'Educational Buildings',
    icon: 'GraduationCap',
    description: {
      en: 'Schools and campuses designed for safe, comfortable and energy-conscious learning environments.',
      ar: 'مدارس وجامعات مصممة لبيئات تعليمية آمنة ومريحة وواعية للطاقة.',
    },
    solutions: {
      en: ['Classroom HVAC', 'Lighting & power', 'AV & networking', 'Fire & life safety'],
      ar: ['تكييف الفصول', 'الإنارة والطاقة', 'الصوتيات والشبكات', 'الحماية من الحريق'],
    },
  },
  {
    slug: 'hospitality',
    title: { en: 'Hospitality', ar: 'الضيافة' },
    image: '/img/hero3.jpg',
    imageAlt: 'Luxury hotel building exterior and resort architecture',
    imageCaption: 'Hospitality Sector',
    icon: 'Hotel',
    description: {
      en: 'Hotels and leisure venues where guest comfort, ambience and seamless systems operation matter most.',
      ar: 'فنادق ومرافق ترفيه حيث تكون راحة الضيوف والأجواء وتشغيل الأنظمة بسلاسة هي الأهم.',
    },
    solutions: {
      en: ['Comfort cooling', 'Smart room controls', 'Plumbing & drainage', 'Public address'],
      ar: ['التكييف المريح', 'تحكم الغرف الذكي', 'السباكة والصرف', 'الإذاعة العامة'],
    },
  },
  {
    slug: 'infrastructure',
    title: { en: 'Infrastructure', ar: 'البنية التحتية' },
    image: '/img/ind-infrastructure.jpg',
    imageAlt: 'Highway interchange, bridge, and tunnel infrastructure',
    imageCaption: 'Infrastructure',
    icon: 'Construction',
    description: {
      en: 'Tunnels, stations and public assets that need durable mechanical and electrical engineering.',
      ar: 'أنفاق ومحطات وأصول عامة تحتاج هندسة ميكانيكية وكهربائية متينة.',
    },
    solutions: {
      en: ['Pumping stations', 'Tunnel ventilation', 'Power distribution', 'Monitoring & control'],
      ar: ['محطات الضخ', 'تهوية الأنفاق', 'توزيع الطاقة', 'الرصد والتحكم'],
    },
  },
  {
    slug: 'government-institutional',
    title: { en: 'Government & Institutional', ar: 'الحكومية والمؤسسية' },
    image: '/img/about.jpg',
    imageAlt: 'Government building and institutional complex facade',
    imageCaption: 'Government & Institutional',
    icon: 'Landmark',
    description: {
      en: 'Public buildings and institutions delivered to exacting standards of safety, security and compliance.',
      ar: 'مبانٍ ومنشآت عامة تُنفذ وفق معايير صارمة من السلامة والأمن والامتثال.',
    },
    solutions: {
      en: ['Secure access systems', 'Resilient power', 'Integrated BMS', 'Life-safety design'],
      ar: ['أنظمة وصول آمنة', 'طاقة مرنة', 'BMS متكامل', 'تصميم حماية الحياة'],
    },
  },
]

