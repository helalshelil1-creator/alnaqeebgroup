import type { Loc, LocList } from './services'

export interface Project {
  slug: string
  title: Loc
  category: string
  image: string
  imageAlt?: string
  imageCaption?: string
  location: Loc
  sector: Loc
  year: string
  status: Loc
  summary: Loc
  services: string[]
  challenge: Loc
  solution: Loc
  results: LocList
}

export const projectCategories = [
  { key: 'commercial', label: { en: 'Commercial Buildings', ar: 'مبانٍ تجارية' } },
  { key: 'residential', label: { en: 'Residential Projects', ar: 'مشاريع سكنية' } },
  { key: 'electrical', label: { en: 'Electrical Projects', ar: 'مشاريع كهربائية' } },
  { key: 'mechanical', label: { en: 'Mechanical Projects', ar: 'مشاريع ميكانيكية' } },
  { key: 'hvac', label: { en: 'HVAC Projects', ar: 'مشاريع تكييف' } },
  { key: 'fire', label: { en: 'Fire Fighting Systems', ar: 'أنظمة مكافحة الحريق' } },
  { key: 'control', label: { en: 'Control Panels', ar: 'لوحات التحكم' } },
  { key: 'infrastructure', label: { en: 'Infrastructure', ar: 'البنية التحتية' } },
]

export const projects: Project[] = [
  {
    slug: 'corporate-headquarters',
    title: { en: 'Corporate Headquarters Fit-Out', ar: 'تشغيل المقر الرئيسي لشركة' },
    category: 'commercial',
    image: '/img/proj-commercial.jpg',
    imageAlt: 'Corporate headquarters fit-out with modern glass office tower',
    imageCaption: 'Corporate Headquarters Fit-Out',
    location: { en: '6th of October City', ar: 'مدينة 6 أكتوبر' },
    sector: { en: 'Commercial Office', ar: 'مكاتب تجارية' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Integrated electromechanical fit-out for a multi-floor corporate headquarters including electrical, HVAC and control systems.',
      ar: 'تشغيل أعمال كهروميكانيكية متكاملة لمقر رئيسي متعدد الطوابق يشمل أنظمة الكهرباء والتكييف والتحكم.',
    },
    services: ['hvac-systems', 'control-panels'],
    challenge: {
      en: 'Delivering a full electromechanical fit-out across occupied floors with minimal disruption to the client’s operations.',
      ar: 'تنفيذ تشغيل أعمال كهروميكانيكية كاملة عبر طوابق مشغولة مع أقل تعطيل لعمليات العميل.',
    },
    solution: {
      en: 'Phased zoning, off-site panel fabrication and coordinated night works to keep the programme on track.',
      ar: 'تقسيم مرحلي وتصنيع لوحات خارج الموقع وأعمال ليلية منسّقة للالتزام بالجدول.',
    },
    results: {
      en: ['On-time handover of all zones', 'Integrated BMS control', 'Zero reportable incidents'],
      ar: ['تسليم كل المراحل في الموعد', 'تحكم BMS متكامل', 'صفر حوادث مسجّلة'],
    },
  },
  {
    slug: 'residential-compound',
    title: { en: 'Residential Compound Services', ar: 'خدمات مجمع سكني' },
    category: 'residential',
    image: '/img/proj-residential.jpg',
    imageAlt: 'Residential community with villas and apartment buildings',
    imageCaption: 'Residential Compound Services',
    location: { en: 'New Cairo', ar: 'القاهرة الجديدة' },
    sector: { en: 'Residential', ar: 'سكني' },
    year: '2023',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Water, drainage and electrical infrastructure for a gated residential community of villas and apartments.',
      ar: 'بنية تحتية للمياه والصرف والكهرباء لمجمع سكني مغلق من الفلل والشقق.',
    },
    services: ['mechanical-works', 'fire-fighting-fire-alarm'],
    challenge: {
      en: 'Coordinating multiple building types and services within a single community infrastructure plan.',
      ar: 'تنسيق أنواع مبانٍ وخدمات متعددة ضمن مخطط بنية تحتية مجتمعي واحد.',
    },
    solution: {
      en: 'Standardised riser strategy, central pumping and a unified fire and life-safety design.',
      ar: 'استراتيجية مواسير موحدة وضخ مركزي وتصميم موحّد للحريق وحماية الأرواح.',
    },
    results: {
      en: ['Unified services infrastructure', 'Standardised maintenance access', 'Full civil defence approval'],
      ar: ['بنية خدمات موحّدة', 'وصول قياسي للصيانة', 'اعتماد كامل من الدفاع المدني'],
    },
  },
  {
    slug: 'industrial-warehouse',
    title: { en: 'Industrial Warehouse Power', ar: 'طاقة مستودع صناعي' },
    category: 'electrical',
    image: '/img/execution-site.jpg',
    imageAlt: 'Large industrial warehouse with high-bay lighting and steel structure',
    imageCaption: 'Industrial Warehouse Power',
    location: { en: '10th of Ramadan City', ar: 'مدينة العاشر من رمضان' },
    sector: { en: 'Industrial', ar: 'صناعي' },
    year: '2024',
    status: { en: 'Ongoing', ar: 'قيد التنفيذ' },
    summary: {
      en: 'High- and low-voltage distribution, lighting and standby power for a large-format logistics warehouse.',
      ar: 'توزيع جهد عالٍ ومنخفض وإنارة وطاقة احتياطية لمستودع لوجستي كبير.',
    },
    services: ['maintenance-testing'],
    challenge: {
      en: 'Providing resilient power and high-bay lighting across a wide, tall single-storey footprint.',
      ar: 'توفير طاقة مرنة وإنارة مرتفعة عبر مساحة واسعة وارتفاع كبير لمبنى طابق واحد.',
    },
    solution: {
      en: 'Redundant feeders, LED high-bay design and a monitored standby generation system.',
      ar: 'مغذّيات احتياطية وتصميم إنارة LED مرتفعة ونظام توليد احتياطي مراقَب.',
    },
    results: {
      en: ['Resilient dual-feed design', 'Energy-efficient LED lighting', 'Monitored standby power'],
      ar: ['تصميم مزدوج مرن', 'إنارة LED موفرة للطاقة', 'طاقة احتياطية مراقَبة'],
    },
  },
  {
    slug: 'hvac-retail-mall',
    title: { en: 'Retail Cooling Upgrade', ar: 'ترقية تكييف مركز تجاري' },
    category: 'hvac',
    image: '/img/svc-hvac.jpg',
    imageAlt: 'Retail shopping mall with HVAC ductwork and ceiling system',
    imageCaption: 'Retail Cooling Upgrade',
    location: { en: 'Mall of Arabia, Cairo', ar: 'مول أرابيا، القاهرة' },
    sector: { en: 'Commercial Retail', ar: 'تجزئة تجارية' },
    year: '2023',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Chilled-water plant upgrade and air-distribution rebalance for a busy retail environment.',
      ar: 'ترقية محطة المياه المبردة وإعادة موازنة توزيع الهواء لبيئة تجارة مزدحمة.',
    },
    services: ['hvac-systems', 'maintenance-testing', 'control-panels'],
    challenge: {
      en: 'Improving comfort and efficiency without closing trading areas during peak season.',
      ar: 'تحسين الراحة والكفاءة دون إغلاق مناطق البيع في موسم الذروة.',
    },
    solution: {
      en: 'Staged plant replacement, VFD integration and BMS scheduling for demand-based cooling.',
      ar: 'استبدال مرحلي للمحطة وتكامل VFD وجدولة BMS للتبريد حسب الطلب.',
    },
    results: {
      en: ['Reduced energy consumption', 'Improved comfort zones', 'No trading downtime'],
      ar: ['استهلاك طاقة أقل', 'مناطق راحة محسّنة', 'بدون توقف للبيع'],
    },
  },
  {
    slug: 'fire-protection-network',
    title: { en: 'Fire Protection Network', ar: 'شبكة حماية من الحريق' },
    category: 'fire',
    image: '/img/svc-fire.jpg',
    imageAlt: 'Fire protection network with sprinkler system and control panels',
    imageCaption: 'Fire Protection Network',
    location: { en: 'New Administrative Capital', ar: 'العاصمة الإدارية الجديدة' },
    sector: { en: 'Mixed-Use', ar: 'استخدام مختلط' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Full sprinkler, hydrant and addressable fire-alarm installation with clean-agent protection for critical rooms.',
      ar: 'تركيب كامل للمرشات وخطوط المياه وإنذار قابل للعنونة مع غاز نظيف للغرف الحساسة.',
    },
    services: ['fire-fighting-fire-alarm', 'control-panels'],
    challenge: {
      en: 'Protecting a mixed-use building with varied occupancy risks and sensitive equipment rooms.',
      ar: 'حماية مبنى متعدد الاستخدامات بمخاطر إشغال متنوعة وغرف معدات حساسة.',
    },
    solution: {
      en: 'Zone-based detection, cause-and-effect logic and water-based plus clean-agent suppression.',
      ar: 'كشف حسب المناطق ومنطق السبب والأثر وإطفاء مائي وغازي.',
    },
    results: {
      en: ['Integrated alarm & suppression', 'Certified handover testing', 'Protected critical assets'],
      ar: ['إنذار وإطفاء متكاملان', 'اختبار تسليم معتمد', 'حصول حماية للأصول الحساسة'],
    },
  },
  {
    slug: 'mcc-control-suite',
    title: { en: 'MCC & Control Panel Suite', ar: 'مجموعة لوحات التحكم و MCC' },
    category: 'control',
    image: '/img/svc-panels.jpg',
    imageAlt: 'MCC and control panel fabrication suite with technicians working',
    imageCaption: 'MCC & Control Panel Suite',
    location: { en: '6th of October City', ar: 'مدينة 6 أكتوبر' },
    sector: { en: 'Facilities', ar: 'منشآت' },
    year: '2023',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Design, fabrication and commissioning of a full suite of MCC, DB and PLC control panels.',
      ar: 'تصميم وتصنيع وتشغيل مجموعة كاملة من لوحات MCC وDB والتحكم PLC.',
    },
    services: ['control-panels', 'hvac-systems', 'elv-smart-systems'],
    challenge: {
      en: 'Delivering a standardised, maintainable panel suite with reliable integration to site systems.',
      ar: 'تسليم مجموعة لوحات موحدة وقابلة للصيانة بتكامل موثوق مع أنظمة الموقع.',
    },
    solution: {
      en: 'Off-site fabrication with FAT, consistent tagging and PLC programming aligned to BMS.',
      ar: 'تصنيع خارج الموقع مع اختبار مصنع وترقيم موحّد وبرمجة PLC متوافقة مع BMS.',
    },
    results: {
      en: ['Factory-tested panels', 'Standardised documentation', 'Smooth on-site commissioning'],
      ar: ['لوحات مختبرة بالمصنع', 'توثيق موحّد', 'تشغيل موقعي سلس'],
    },
  },
  {
    slug: 'infrastructure-mep',
    title: { en: 'Infrastructure Electromechanical Works', ar: 'الأعمال الكهروميكانيكية للبنية التحتية' },
    category: 'infrastructure',
    image: '/img/proj-infrastructure.jpg',
    imageAlt: 'Infrastructure electromechanical works on highway tunnel and pumping station',
    imageCaption: 'Infrastructure Electromechanical Works',
    location: { en: 'New Administrative Capital', ar: 'العاصمة الإدارية الجديدة' },
    sector: { en: 'Infrastructure', ar: 'بنية تحتية' },
    year: '2024',
    status: { en: 'Ongoing', ar: 'قيد التنفيذ' },
    summary: {
      en: 'Mechanical and electrical services for tunnels, pump stations and public infrastructure assets.',
      ar: 'خدمات ميكانيكية وكهربائية للأنفاق ومحطات الضخ وأصول البنية التحتية العامة.',
    },
    services: ['mechanical-works', 'maintenance-testing'],
    challenge: {
      en: 'Working in live public environments with strict safety and continuity requirements.',
      ar: 'العمل في بيئات عامة حيّة بمتطلبات صارمة للسلامة والاستمرارية.',
    },
    solution: {
      en: 'Traffic-management plans, temporary works and round-the-clock installation windows.',
      ar: 'خطط إدارة مرور وأعمال مؤقتة ونوافذ تركيب على مدار الساعة.',
    },
    results: {
      en: ['Safe public works delivery', 'Continuity maintained', 'Resilient system design'],
      ar: ['تنفيذ آمن لأعمال عامة', 'الحفاظ على الاستمرارية', 'تصميم أنظمة مرنة'],
    },
  },
  {
    slug: 'smart-office-mechanical',
    title: { en: 'Smart Office Mechanical Retrofit', ar: 'تجديد ميكانيكي لمكتب ذكي' },
    category: 'mechanical',
    image: '/img/svc-mechanical.jpg',
    imageAlt: 'Smart office building with mechanical retrofit and modern facade',
    imageCaption: 'Smart Office Mechanical Retrofit',
    location: { en: 'New Cairo', ar: 'القاهرة الجديدة' },
    sector: { en: 'Commercial Office', ar: 'مكاتب تجارية' },
    year: '2023',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Pumping, drainage and water-services retrofit integrated with smart monitoring across an office tower.',
      ar: 'تجديد ضخ وصرف وخدمات مياه مع رصد ذكي عبر برج مكاتب.',
    },
    services: ['mechanical-works', 'maintenance-testing'],
    challenge: {
      en: 'Modernising aging mechanical services with limited riser access in an occupied tower.',
      ar: 'تحديث خدمات ميكانيكية قديمة مع وصول محدود للمواسير في برج مشغول.',
    },
    solution: {
      en: 'Prefabricated riser modules, smart leak detection and phased floor-by-floor changeout.',
      ar: 'وحدات مواسير مسبقة التصنيع وكشف تسريب ذكي واستبدال طابقي مرحلي.',
    },
    results: {
      en: ['Reduced water downtime', 'Early leak detection', 'Occupied-floor retrofit'],
      ar: ['توقف مياه أقل', 'كشف مبكر للتسريب', 'تجديد مع إشغال الطوابق'],
    },
  },
  {
    slug: 'fire-fighting-system',
    title: { en: 'Fire Fighting & Alarm System', ar: 'نظام مكافحة حريق وإنذار' },
    category: 'fire',
    image: '/img/fire-system.jpg',
    imageAlt: 'AL NAQEEB GROUP fire fighting and alarm system installation with red piping and control panels',
    imageCaption: 'Fire Fighting & Alarm System',
    location: { en: '6th of October City', ar: 'مدينة 6 أكتوبر' },
    sector: { en: 'Industrial Facility', ar: 'منشأة صناعية' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Complete fire fighting and alarm system installation including sprinkler network, fire pump, and control panels for an industrial facility.',
      ar: 'تركيب نظام مكافحة حريق وإنذار كامل يشمل شبكة رذاذ ومضخة حريق ولوحات تحكم لمنشأة صناعية.',
    },
    services: ['fire-fighting-fire-alarm', 'control-panels'],
    challenge: {
      en: 'Delivering a compliant fire protection system in a live industrial environment with strict safety requirements.',
      ar: 'تقديم نظام حماية من الحريق متوافق في بيئة صناعية حية بمتطلبات أمان صارمة.',
    },
    solution: {
      en: 'Phased installation, fire pump commissioning and integrated alarm panel programming with full testing.',
      ar: 'تركيب مرحلي وتشغيل مضخة حريق وبرمجة لوحة إنذار متكاملة مع اختبار كامل.',
    },
    results: {
      en: ['NFPA-compliant installation', 'Full system commissioning', 'Zero downtime during works'],
      ar: ['تركيب متوافق مع NFPA', 'تشغيل كامل للنظام', 'صفر توقف أثناء الأعمال'],
    },
  },
  {
    slug: 'smart-building-automation',
    title: { en: 'Smart Building Automation', ar: 'أتمتة مبنى ذكي' },
    category: 'control',
    image: '/img/svc-elv.jpg',
    imageAlt: 'CCTV security camera, access control terminals, and network rack for smart building systems',
    imageCaption: 'Smart Building Automation',
    location: { en: '6th of October City', ar: 'مدينة 6 أكتوبر' },
    sector: { en: 'Commercial Building', ar: 'مبنى تجاري' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'ELV and smart building automation including CCTV, access control, BMS integration and structured cabling.',
      ar: 'أتمتة ELV ومبنى ذكي تشمل كاميرات مراقبة وتحكم بالوصول وتكامل BMS وكابلات منظمة.',
    },
    services: ['elv-smart-systems', 'control-panels'],
    challenge: {
      en: 'Integrating multiple low-voltage systems across a multi-floor commercial building with minimal disruption.',
      ar: 'تكامل أنظمة جهد منخفض متعددة عبر مبنى تجاري متعدد الطوابق بأقل تعطيل.',
    },
    solution: {
      en: 'Centralized BMS platform, structured cabling backbone and phased floor-by-floor commissioning.',
      ar: 'منصة BMS مركزية وبنية كابلات منظمة وتشغيل طابقي مرحلي.',
    },
    results: {
      en: ['Unified building control', 'Reduced energy consumption', 'Seamless system integration'],
      ar: ['تحكم موحد للمبنى', 'استهلاك طاقة أقل', 'تكامل سلس للأنظمة'],
    },
  },
  {
    slug: 'infrastructure-mep-elv',
    title: { en: 'Infrastructure MEP & ELV', ar: 'MEP والجهد المنخفض للبنية التحتية' },
    category: 'infrastructure',
    image: '/img/ind-infrastructure.jpg',
    imageAlt: 'Highway interchange, bridge, and tunnel infrastructure with MEP and ELV systems',
    imageCaption: 'Infrastructure MEP & ELV',
    location: { en: 'Cairo', ar: 'القاهرة' },
    sector: { en: 'Infrastructure', ar: 'البنية التحتية' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'MEP and ELV systems for highway tunnel and bridge infrastructure including lighting, ventilation and monitoring.',
      ar: 'أنظمة MEP والجهد المنخفض لبنية تحتية للأنفاق والجسور تشمل إضاءة وتهوية ورصد.',
    },
    services: ['elv-smart-systems'],
    challenge: {
      en: 'Delivering critical MEP and ELV systems in a live infrastructure environment with strict safety standards.',
      ar: 'تقديم أنظمة MEP والجهد المنخفض حيوية في بيئة بنية تحتية حية بمعايير أمان صارمة.',
    },
    solution: {
      en: 'Phased installation, redundant systems design and integrated monitoring platform.',
      ar: 'تركيب مرحلي وتصميم أنظمة احتياطية ومنصة رصد متكاملة.',
    },
    results: {
      en: ['Reliable infrastructure systems', 'Enhanced safety monitoring', 'On-time delivery'],
      ar: ['أنظمة بنية تحتية موثوقة', 'رصد أمان محسّن', 'تسليم في الموعد'],
    },
  },
  {
    slug: 'electrical-panel-installation',
    title: { en: 'Electrical Panel Installation', ar: 'تركيب لوحات كهربائية' },
    category: 'electrical',
    image: '/img/electrical-project-1.png',
    imageAlt: 'Electrical panel installation and wiring works',
    imageCaption: 'Electrical Panel Installation',
    location: { en: '6th of October City', ar: 'مدينة 6 أكتوبر' },
    sector: { en: 'Commercial', ar: 'تجاري' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Complete electrical panel installation including distribution boards, cable management and testing.',
      ar: 'تركيب كامل للوحات كهربائية يشمل لوحات توزيع وإدارة كابلات واختبار.',
    },
    services: ['electrical-works'],
    challenge: {
      en: 'Delivering high-quality electrical panel installation within a tight project schedule.',
      ar: 'تقديم تركيب لوحات كهربائية عالية الجودة ضمن جدول مشروع ضيق.',
    },
    solution: {
      en: 'Phased installation with prefabricated panels and systematic testing protocol.',
      ar: 'تركيب مرحلي مع لوحات مسبقة التصنيع وبروتوكول اختبار منهجي.',
    },
    results: {
      en: ['On-time delivery', 'Full compliance testing', 'Zero defects'],
      ar: ['تسليم في الموعد', 'اختبار امتثال كامل', 'صفر عيوب'],
    },
  },
  {
    slug: 'electrical-wiring-works',
    title: { en: 'Electrical Wiring Works', ar: 'أعمال توصيل كهربائي' },
    category: 'electrical',
    image: '/img/electrical-project-2.png',
    imageAlt: 'Electrical wiring and cable installation works',
    imageCaption: 'Electrical Wiring Works',
    location: { en: 'New Cairo', ar: 'القاهرة الجديدة' },
    sector: { en: 'Residential', ar: 'سكني' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Comprehensive electrical wiring works including cable containment, tray systems and earthing.',
      ar: 'أعمال توصيل كهربائي شاملة تشمل احتواء كابلات وأنظمة صواني وتأريض.',
    },
    services: ['electrical-works'],
    challenge: {
      en: 'Managing complex wiring routes in a multi-floor residential building.',
      ar: 'إدارة مسارات توصيل معقدة في مبنى سكني متعدد الطوابق.',
    },
    solution: {
      en: 'Detailed routing plans, cable tray systems and phased floor-by-floor installation.',
      ar: 'خطط توجيه مفصلة وأنظمة صواني كابلات وتركيب طابقي مرحلي.',
    },
    results: {
      en: ['Clean cable management', 'Full test certification', 'Client satisfaction'],
      ar: ['إدارة كابلات نظيفة', 'شهادة اختبار كاملة', 'رضا العميل'],
    },
  },
  {
    slug: 'electrical-system-installation',
    title: { en: 'Electrical System Installation', ar: 'تركيب نظام كهربائي' },
    category: 'electrical',
    image: '/img/electrical-project-3.png',
    imageAlt: 'Electrical system installation and commissioning',
    imageCaption: 'Electrical System Installation',
    location: { en: 'Cairo', ar: 'القاهرة' },
    sector: { en: 'Industrial', ar: 'صناعي' },
    year: '2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Full electrical system installation including HV/LV distribution, lighting and power systems.',
      ar: 'تركيب نظام كهربائي كامل يشمل توزيع HV/LV وإضاءة وأنظمة طاقة.',
    },
    services: ['electrical-works'],
    challenge: {
      en: 'Integrating electrical systems in an industrial facility with minimal operational disruption.',
      ar: 'تكامل أنظمة كهربائية في منشأة صناعية بأقل تعطيل تشغيلي.',
    },
    solution: {
      en: 'Off-hours installation, redundant power paths and comprehensive commissioning tests.',
      ar: 'تركيب خارج ساعات العمل ومسارات طاقة احتياطية واختبارات تشغيل شاملة.',
    },
    results: {
      en: ['Seamless integration', 'Zero downtime', 'Full commissioning'],
      ar: ['تكامل سلس', 'صفر توقف', 'تشغيل كامل'],
    },
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
