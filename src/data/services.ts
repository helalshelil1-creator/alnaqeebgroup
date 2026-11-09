export type Loc = { en: string; ar: string }
export type LocList = { en: string[]; ar: string[] }

export interface Service {
  slug: string
  icon: string
  image: string
  imageAlt?: string
  imageCaption?: string
  title: Loc
  blurb: Loc
  description: Loc
  scope: LocList
  capabilities: LocList
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'electrical-works',
    icon: 'Zap',
    image: '/img/svc-electrical.jpg',
    imageAlt: 'Electrical switchgear distribution and control panels in an industrial setting',
    imageCaption: 'Electrical switchgear distribution and control panels in an industrial setting',
    title: { en: 'Electrical Works', ar: 'الأعمال الكهربائية' },
    blurb: { en: 'Power, lighting & LV installations.', ar: 'الطاقة والإنارة وتركيبات الجهد المنخفض.' },
    description: {
      en: 'Complete electrical contracting covering high- and low-voltage distribution, lighting design, containment, cable management and testing for commercial, residential and industrial buildings.',
      ar: 'مقاولات كهربائية متكاملة تغطي توزيع الجهد العالي والمنخفض وتصميم الإنارة والمواسير وإدارة الكابلات والاختبار للمباني التجارية والسكنية والصناعية.',
    },
    scope: {
      en: ['HV & LV distribution boards', 'Lighting and small power installations', 'Cable containment and tray systems', 'Earthing, bonding and lightning protection', 'Testing and commissioning'],
      ar: ['لوحات توزيع الجهد العالي والمنخفض', 'تركيبات الإنارة والطاقة الصغيرة', 'أنظمة حوامل وتمديدات الكابلات', 'التأريض والربط وحماية من الصواعق', 'الاختبار والتشغيل'],
    },
    capabilities: {
      en: ['Load schedules & single-line diagrams', 'Busbar and panel installation', 'Emergency & standby power integration', 'Insulation resistance & continuity testing'],
      ar: ['جداول الأحمال ومخططات الخط الواحد', 'تركيب القضبان واللوحات', 'تكامل الطاقة الاحتياطية والطوارئ', 'اختبار مقاومة العزل والاستمرارية'],
    },
    related: ['control-panels', 'hvac-systems', 'maintenance-testing'],
  },
  {
    slug: 'mechanical-works',
    icon: 'Settings',
    image: '/img/svc-mechanical.jpg',
    imageAlt: 'Industrial piping, valves, and mechanical systems in a plant facility',
    imageCaption: 'Industrial piping, valves, and mechanical systems in a plant facility',
    title: { en: 'Mechanical Works', ar: 'الأعمال الميكانيكية' },
    blurb: { en: 'Piping, pumps & building services.', ar: 'أنابيب ومضخات وخدمات مبانٍ.' },
    description: {
      en: 'Mechanical services engineering spanning water supply, drainage, pumping stations and plant room installations, executed with precision fabrication and reliable commissioning.',
      ar: 'هندسة خدمات مبانٍ ميكانيكية تشمل تغذية المياه والصرف ومحطات الضخ وتركيبات غرف المعدات، مع تصنيع دقيق وتشغيل موثوق.',
    },
    scope: {
      en: ['Water supply and drainage systems', 'Pumping stations and booster sets', 'Plant room design and installation', 'Steel fabrication and pipe spooling', 'Pressure testing and flushing'],
      ar: ['أنظمة تغذية المياه والصرف', 'محطات الضخ ومجموعات المعززات', 'تصميم وتركيب غرف المعدات', 'تصنيع الفولاذ وتجميع الأنابيب', 'اختبار الضغط والغسل'],
    },
    capabilities: {
      en: ['Hydraulic calculations & sizing', 'Pump and valve scheduling', 'Welding & pipe fabrication', 'System balancing & handover'],
      ar: ['حسابات وتحديد الأبعاد الهيدروليكية', 'جدولة المضخات والصمامات', 'لحام وتصنيع الأنابيب', 'موازنة الأنظمة والتسليم'],
    },
    related: ['hvac-systems', 'fire-fighting-fire-alarm', 'maintenance-testing'],
  },
  {
    slug: 'hvac-systems',
    icon: 'Wind',
    image: '/img/svc-hvac.jpg',
    imageAlt: 'HVAC ductwork, air handling units, and cooling systems installation',
    imageCaption: 'HVAC ductwork, air handling units, and cooling systems installation',
    title: { en: 'HVAC Systems', ar: 'أنظمة التكييف' },
    blurb: { en: 'Heating, ventilation & air conditioning.', ar: 'تدفئة وتهوية وتكييف هواء.' },
    description: {
      en: 'Energy-efficient HVAC design and installation covering chilled water, VRF/VRV, air distribution and building automation integration for comfortable, healthy indoor environments.',
      ar: 'تصميم وتركيب تكييف موفر للطاقة يشمل المياه المبردة وأنظمة VRF/VRV وتوزيع الهواء والتكامل مع أتمتة المباني لبيئات داخلية مريحة وصحية.',
    },
    scope: {
      en: ['Chilled water & FCU systems', 'VRF / VRV split systems', 'Ductwork and air distribution', 'Fresh air handling units (AHU)', 'Controls & BMS integration'],
      ar: ['أنظمة المياه المبردة ووحدات المناولة', 'أنظمة VRF / VRV', 'مجاري وتوزيع الهواء', 'وحدات معالجة الهواء النقي', 'التكامل مع أنظمة التحكم وBMS'],
    },
    capabilities: {
      en: ['Heat load & airflow modelling', 'Duct sizing & static pressure design', 'Refrigerant piping & commissioning', 'Energy optimisation & scheduling'],
      ar: ['نمذجة الأحمال الحرارية وتدفق الهواء', 'تحديد المقاطع الساكنة وتصميم المجاري', 'تمديد مبردات والتشغيل', 'تحسين الطاقة والجدولة'],
    },
    related: ['mechanical-works', 'control-panels', 'maintenance-testing'],
  },
  {
    slug: 'fire-fighting-fire-alarm',
    icon: 'Flame',
    image: '/img/svc-fire.jpg',
    imageAlt: 'Fire sprinkler system with red pipes and hydrant network',
    imageCaption: 'Fire sprinkler system with red pipes and hydrant network',
    title: { en: 'Fire Fighting & Fire Alarm', ar: 'مكافحة الحريق وإنذار الحريق' },
    blurb: { en: 'Detection, alarm & suppression systems.', ar: 'أنظمة كشف وإنذار وإطفاء.' },
    description: {
      en: 'Certified life-safety solutions from detection to suppression, including fire alarm, sprinkler, hydrant and clean-agent systems designed to protect people, property and operations.',
      ar: 'حلول حماية معتمدة من الكشف إلى الإطفاء، تشمل إنذار الحريق والمرشات وخطوط المياه وأنظمة الغاز النظيف لحماية الأرواح والممتلكات والأعمال.',
    },
    scope: {
      en: ['Addressable & conventional fire alarm', 'Sprinkler and hydrant networks', 'Clean agent & gas suppression', 'Smoke control & extraction', 'Fire pump sets & foam systems'],
      ar: ['إنذار حريق قابل للعنونة وتقليدي', 'شبكات المرشات وخطوط المياه', 'أنظمة الغاز النظيف والإطفاء', 'التحكم في الدخان والسحب', 'مجموعات مضخات الحريق والرغوة'],
    },
    capabilities: {
      en: ['Civil defence-compliant design', 'Hydraulic sprinkler calculations', 'Cause & effect matrices', 'Integrated testing & handover'],
      ar: ['تصميم متوافق مع الدفاع المدني', 'حسابات المرشات الهيدروليكية', 'مصفوفات السبب والأثر', 'اختبار متكامل وتسليم'],
    },
    related: ['control-panels', 'electrical-works', 'maintenance-testing'],
  },
  {
    slug: 'control-panels',
    icon: 'Gauge',
    image: '/img/svc-panels.jpg',
    imageAlt: 'Industrial control panel and PLC cabinet with HMI touchscreen',
    imageCaption: 'Industrial control panel and PLC cabinet with HMI touchscreen',
    title: { en: 'Control Panels', ar: 'لوحات التحكم' },
    blurb: { en: 'Panel building, PLC & automation.', ar: 'تصنيع اللوحات وتحكم PLC والأتمتة.' },
    description: {
      en: 'Design, fabrication and programming of control panels, MCC/DB boards and PLC-based automation for reliable, safe and maintainable building and process control.',
      ar: 'تصميم وتصنيع وبرمجة لوحات التحكم ولوحات MCC/DB وتحكم PLC لأتمتة موثوقة وآمنة وقابلة للصيانة في المباني والعمليات.',
    },
    scope: {
      en: ['MCC, DB and control panel build', 'PLC & SCADA programming', 'Motor & lighting control logic', 'Panel wiring, tagging & FAT', 'BMS and field device integration'],
      ar: ['تصنيع لوحات MCC وDB والتحكم', 'برمجة PLC وSCADA', 'منطق التحكم في المحركات والإنارة', 'تمديد وترقيم واختبار المصنع', 'التكامل مع BMS وأجهزة الميدان'],
    },
    capabilities: {
      en: ['Electrical schematic design', 'Component scheduling & layout', 'Factory acceptance testing', 'On-site commissioning & SAT'],
      ar: ['تصميم المخططات الكهربائية', 'جدولة المكونات والتخطيط', 'اختبار القبول بالمصنع', 'تشغيل واختبار موقعي'],
    },
    related: ['electrical-works', 'hvac-systems', 'elv-smart-systems'],
  },
  {
    slug: 'elv-smart-systems',
    icon: 'Cctv',
    image: '/img/svc-elv.jpg',
    imageAlt: 'CCTV security camera, access control terminals, and network rack',
    imageCaption: 'CCTV security camera, access control terminals, and network rack',
    title: { en: 'ELV & Smart Systems', ar: 'الأنظمة الذكية والمنخفضة الجهد' },
    blurb: { en: 'Security, networking & smart systems.', ar: 'أنظمة أمنية وشبكات ومبانٍ ذكية.' },
    description: {
      en: 'Extra-low-voltage and smart building systems including CCTV, access control, structured cabling, public address, and integrated building management for safer, connected environments.',
      ar: 'أنظمة الجهد المنخفض جدًا والمباني الذكية تشمل المراقبة والتحكم في الوصول والكابلات المهيكلة والإذاعة الداخلية وإدارة المباني المتكاملة لبيئات أكثر أمانًا وترابطًا.',
    },
    scope: {
      en: ['CCTV & video surveillance', 'Access control & time attendance', 'Structured cabling & networking', 'Public address & voice evacuation', 'Smart home & building automation'],
      ar: ['المراقبة بالفيديو', 'التحكم في الوصول وحضور الانصراف', 'الكابلات المهيكلة والشبكات', 'الإذاعة الداخلية والإخلاء الصوتي', 'أتمتة المنازل والمباني الذكية'],
    },
    capabilities: {
      en: ['Network & system design', 'Head-end and server configuration', 'Integration with BMS & fire systems', 'Cyber-aware installation practices'],
      ar: ['تصميم الشبكات والأنظمة', 'إعداد الأنظمة والخوادم', 'التكامل مع BMS وأنظمة الحريق', 'ممارسات تركيب واعية أمنياً'],
    },
    related: ['control-panels', 'electrical-works', 'maintenance-testing'],
  },
  {
    slug: 'maintenance-testing',
    icon: 'Wrench',
    image: '/img/svc-maintenance.png',
    imageAlt: 'Maintenance technician with multimeter, diagnostic tools, and safety equipment',
    imageCaption: 'Maintenance technician with multimeter, diagnostic tools, and safety equipment',
    title: { en: 'Maintenance & Testing', ar: 'الصيانة والاختبار' },
    blurb: { en: 'Preventive maintenance & testing.', ar: 'صيانة وقائية وفحص واختبار.' },
    description: {
      en: 'Planned preventive maintenance, statutory testing and rapid reactive response that keep building systems safe, compliant and running at peak performance throughout their lifecycle.',
      ar: 'صيانة وقائية مخططة واختبارات دورية واستجابة سريعة تضمن بقاء أنظمة المباني آمنة ومتوافقة وعاملة بأفضل أداء طوال دورة حياتها.',
    },
    scope: {
      en: ['PPM contracts & service plans', 'Electrical & mechanical testing', 'Fire system inspection & certification', 'Thermographic surveys', '24/7 reactive maintenance'],
      ar: ['عقود الصيانة المخططة وخطط الخدمة', 'اختبارات كهربائية وميكانيكية', 'فحص وشهادة أنظمة الحريق', 'مسح حراري', 'صيانة استجابة على مدار الساعة'],
    },
    capabilities: {
      en: ['Asset register & condition audits', 'Compliance & statutory reporting', 'Energy & performance monitoring', 'Dedicated helpdesk & SLAs'],
      ar: ['سجل الأصول وتدقيق الحالة', 'الامتثال والتقارير الدورية', 'رصد الأداء والطاقة', 'مكتب مساعدة واتفاقيات مستوى خدمة'],
    },
    related: ['electrical-works', 'hvac-systems', 'fire-fighting-fire-alarm'],
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
