const STORE = {
  users: "raghad.users",
  bookings: "raghad.bookings",
  currentUser: "raghad.currentUser",
  remember: "raghad.remember",
  media: "raghad.media",
  owner: "raghad.owner",
  modelApplications: "raghad.modelApplications",
  modelProfiles: "raghad.modelProfiles"
};

const OWNER_PASSWORD = "raghad2026";
const HOURS = Array.from({ length: 15 }, (_, index) => index + 8);
let lang = localStorage.getItem("raghad.lang") || "ar";

const I18N = {
  ar: {
    brandName: "رغد مودلز",
    navBook: "الحجز",
    navModels: "المودلز",
    navSchedule: "الجدول",
    navWork: "الأعمال",
    navAdmin: "الإدارة",
    signOut: "تسجيل الخروج",
    heroEyebrow: "وكالة مودلز في السعودية",
    heroTitle: "حجز مودلز فاخر للحملات، الأزياء، الجمال، وأيام التصوير.",
    heroText: "اختَر المودل، المدينة، التاريخ، الساعة، نوع التسعير، ورابط الموقع. تتم مراجعة الطلبات قبل التأكيد، خصوصا عند تغيير المدينة أو وجود متطلبات إنتاج خاصة.",
    metricModels: "مودلز",
    metricPending: "قيد المراجعة",
    metricConfirmed: "مؤكد",
    startHere: "ابدأ هنا",
    authTitle: "سجّل الدخول أو أنشئ حساب",
    free: "مجاني",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    brandRole: "علامة تجارية / حجز",
    brandRoleText: "لطلب المودلز للحملات وجلسات التصوير.",
    modelRole: "مودل",
    modelRoleText: "تقديم طلب للانضمام إلى قائمة الوكالة.",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    city: "المدينة",
    portfolioLink: "رابط البورتفوليو",
    modelProfile: "نبذة قصيرة عن خبرتك",
    rememberMe: "تذكرني",
    priorityBooking: "حجز أولوية",
    requestSession: "طلب جلسة مودل",
    requestSessionText: "اختَر من القائمة أو اختر \"ساعدوني بالاختيار\" وستراجع الوكالة الأنسب لك.",
    brandNameLabel: "اسم العلامة التجارية",
    contactNumber: "رقم التواصل",
    model: "المودل",
    pricingChoice: "نوع التسعير",
    priceHour: "السعر بالساعة",
    priceOutfit: "السعر بالفستان / اللوك",
    campaignTitle: "عنوان الحملة",
    requestedCity: "المدينة المطلوبة",
    date: "التاريخ",
    startTime: "وقت البداية",
    duration: "المدة",
    outfits: "عدد اللوكات / الفساتين",
    locationLink: "رابط الموقع",
    photographer: "تفاصيل المصور",
    notes: "ملاحظات",
    rulesTitle: "الشروط قبل تأكيد الحجز",
    rule1: "الدفع نقدا فقط إلا إذا تم الاتفاق قبل الحجز.",
    rule2: "يجب توضيح وجود مصور من عدمه، ويفضل أن تكون المصورة امرأة.",
    rule3: "عند تغيير موعد التصوير، يجب التواصل مع الوكالة قبل الموعد بثلاثة أيام على الأقل.",
    sendReview: "إرسال الطلب للمراجعة",
    yourRequests: "طلبات الحجز الخاصة بك",
    agencySystem: "نظام الوكالة",
    agencyTitle: "منصة واحدة لحجز المودلز في السعودية، المراجعة، الجدولة، وتنسيق المدن.",
    intro1Title: "قائمة المودلز",
    intro1Text: "لكل مودل ملف، مدينة، أسعار، وحالة حجز. طلبات انضمام المودلز تذهب للإدارة قبل الظهور للعامة.",
    intro2Title: "طلبات العلامات التجارية",
    intro2Text: "تحدد العلامات التجارية الساعات، رابط الموقع، تفاصيل المصور، ونوع التسعير قبل موافقة الوكالة.",
    intro3Title: "مدن السعودية",
    intro3Text: "الرياض، جدة، الخبر، الدمام، العلا، وطلبات المدن الخاصة يمكن تنسيقها مع رسوم إضافية بعد المراجعة.",
    demoRoster: "قائمة تجريبية",
    chooseModel: "اختَر ملف المودل",
    clearSelection: "مسح الاختيار",
    next30: "الأيام الـ 30 القادمة",
    scheduleHour: "الجدول بالساعة",
    open: "متاح",
    pending: "قيد المراجعة",
    booked: "محجوز",
    refused: "مرفوض",
    campaignProof: "أعمال سابقة",
    featuredWork: "الأعمال المميزة",
    featuredText: "ستظهر منشورات إنستغرام وفيديوهات تيك توك الخاصة بالحملات هنا عند إضافة الروابط.",
    adminAccess: "دخول الإدارة",
    openDashboard: "فتح لوحة التحكم",
    bookingRequests: "طلبات الحجز",
    modelApplications: "طلبات انضمام المودلز",
    addMedia: "إضافة أعمال",
    platform: "المنصة",
    link: "الرابط",
    addMediaButton: "إضافة",
    languageButton: "English",
    helpChoose: "ساعدوني باختيار المودل الأنسب",
    sar: "ريال",
    perHour: "بالساعة",
    perOutfit: "لللوك",
    selectedModel: "المودل المختار",
    baseCity: "مدينة المودل",
    hourlyRate: "السعر بالساعة",
    outfitRate: "سعر اللوك",
    specialties: "التخصصات",
    bookThisModel: "احجز هذا المودل",
    noRequests: "لا توجد طلبات حاليا.",
    noApplications: "لا توجد طلبات مودلز حاليا.",
    noMediaInsta: "ستظهر منشورات إنستغرام الخاصة بالوكالة هنا.",
    noMediaTiktok: "ستظهر فيديوهات تيك توك الخاصة بالحملات هنا.",
    pendingReview: "قيد المراجعة",
    accepted: "مقبول",
    acceptAction: "قبول",
    refuseAction: "رفض",
    rescheduleAction: "تغيير الموعد",
    rescheduled: "تم تغيير الموعد",
    brand: "العلامة التجارية",
    contact: "التواصل",
    pricing: "التسعير",
    cityReview: "مراجعة المدينة",
    location: "الموقع",
    bookedBy: "تم الحجز بواسطة",
    openLocation: "فتح الموقع",
    none: "لا يوجد",
    cityExtra: "المدينة مختلفة عن مدينة المودل. قد تطبق رسوم إضافية بعد المراجعة.",
    noCityExtra: "لا توجد رسوم مدينة متوقعة.",
    estimatePrefix: "السعر التقريبي",
    beforeReview: "قبل مراجعة الإدارة",
    agencyPricing: "ستقترح الوكالة المودل المناسب وتؤكد السعر بعد المراجعة.",
    chooseEstimate: "اختَر مودل لعرض السعر التقريبي.",
    modelApplicationSent: "تم إرسال طلب المودل للمراجعة من الإدارة.",
    usernameExists: "اسم المستخدم موجود مسبقا.",
    wrongLogin: "اسم المستخدم أو كلمة المرور غير صحيحة.",
    modelWaiting: "حساب المودل بانتظار مراجعة الإدارة.",
    bookingConflict: "هذا الوقت مطلوب أو محجوز لهذا المودل. اختر ساعة أخرى.",
    bookingSent: "تم إرسال الطلب. ستراجع الوكالة السعر والمدينة والجدول.",
    adminWrong: "كلمة مرور الإدارة غير صحيحة.",
    mediaAdded: "تمت إضافة العمل.",
    total: "المجموع",
    requests: "طلبات",
    request: "طلب",
    pendingCount: "قيد المراجعة",
    profile: "الملف",
    portfolio: "البورتفوليو",
    notProvided: "غير مضاف",
    waitingAdmin: "بانتظار مراجعة الإدارة",
    available: "متاح للطلبات"
  },
  en: {
    brandName: "Saudi Models",
    navBook: "Book",
    navModels: "Models",
    navSchedule: "Schedule",
    navWork: "Work",
    navAdmin: "Admin",
    signOut: "Sign out",
    heroEyebrow: "Saudi Arabia modeling agency",
    heroTitle: "Luxury talent booking for campaigns, fashion, beauty, and content days.",
    heroText: "Choose a model, city, date, hour, pricing type, and location link. Requests are reviewed before confirmation, especially for city changes or special production needs.",
    metricModels: "models",
    metricPending: "pending",
    metricConfirmed: "confirmed",
    startHere: "Start here",
    authTitle: "Sign in or create an account",
    free: "Free",
    login: "Log in",
    signup: "Sign up",
    brandRole: "Brand / booking",
    brandRoleText: "Request models for campaigns and shoots.",
    modelRole: "Model",
    modelRoleText: "Apply to join the agency roster.",
    username: "Username",
    password: "Password",
    city: "City",
    portfolioLink: "Portfolio link",
    modelProfile: "Short modeling profile",
    rememberMe: "Remember me",
    priorityBooking: "Priority booking",
    requestSession: "Request a model session",
    requestSessionText: "Pick from the roster or choose \"help me choose\" and the agency will review the right fit.",
    brandNameLabel: "Brand name",
    contactNumber: "Contact number",
    model: "Model",
    pricingChoice: "Pricing choice",
    priceHour: "Price per hour",
    priceOutfit: "Price per dress/outfit",
    campaignTitle: "Campaign title",
    requestedCity: "City requested",
    date: "Date",
    startTime: "Start time",
    duration: "Duration",
    outfits: "Outfits / dresses",
    locationLink: "Location link",
    photographer: "Photographer details",
    notes: "Notes",
    rulesTitle: "Rules before confirmation",
    rule1: "Payments are cash only unless agreed upon before the booking.",
    rule2: "The brand must state whether there will be a photographer; a woman photographer is preferred.",
    rule3: "If the modeling date changes, contact the agency at least 3 days before the session.",
    sendReview: "Send request for review",
    yourRequests: "Your booking requests",
    agencySystem: "Agency system",
    agencyTitle: "One platform for Saudi model booking, review, scheduling, and city coordination.",
    intro1Title: "Model roster",
    intro1Text: "Every model has a profile, city, rates, and booking status. Model applications will go to admin review before they appear publicly.",
    intro2Title: "Brand requests",
    intro2Text: "Brands request exact hours, location links, photographer details, and pricing type before the agency approves.",
    intro3Title: "Saudi cities",
    intro3Text: "Riyadh, Jeddah, Khobar, Dammam, AlUla, and special city requests can be handled with extra charges after review.",
    demoRoster: "Demo roster",
    chooseModel: "Choose a model profile",
    clearSelection: "Clear selection",
    next30: "Next 30 days",
    scheduleHour: "Schedule by hour",
    open: "Open",
    pending: "Pending",
    booked: "Booked",
    refused: "Refused",
    campaignProof: "Campaign proof",
    featuredWork: "Featured work",
    featuredText: "Instagram posts and TikTok brand videos will appear here as links are added.",
    adminAccess: "Admin access",
    openDashboard: "Open dashboard",
    bookingRequests: "Booking requests",
    modelApplications: "Model applications",
    addMedia: "Add media",
    platform: "Platform",
    link: "Link",
    addMediaButton: "Add media",
    languageButton: "العربية",
    helpChoose: "Help me choose the best model",
    sar: "SAR",
    perHour: "per hour",
    perOutfit: "per outfit",
    selectedModel: "Selected model",
    baseCity: "Base city",
    hourlyRate: "Hourly rate",
    outfitRate: "Per outfit",
    specialties: "Specialties",
    bookThisModel: "Book this model",
    noRequests: "No requests yet.",
    noApplications: "No model applications yet.",
    noMediaInsta: "Instagram posts from agency models will appear here.",
    noMediaTiktok: "TikTok brand campaign videos will appear here.",
    pendingReview: "Pending review",
    accepted: "Accepted",
    acceptAction: "Accept",
    refuseAction: "Refuse",
    rescheduleAction: "Reschedule",
    rescheduled: "Rescheduled",
    brand: "Brand",
    contact: "Contact",
    pricing: "Pricing",
    cityReview: "City review",
    location: "Location",
    bookedBy: "Booked by",
    openLocation: "Open location",
    none: "None",
    cityExtra: "City differs from model base. Extra charges may apply after review.",
    noCityExtra: "No city surcharge expected.",
    estimatePrefix: "estimated",
    beforeReview: "before admin review",
    agencyPricing: "Agency will recommend a model and confirm pricing after review.",
    chooseEstimate: "Choose a model to estimate pricing.",
    modelApplicationSent: "Model application sent for admin review.",
    usernameExists: "This username already exists.",
    wrongLogin: "Username or password is incorrect.",
    modelWaiting: "Your model account is waiting for admin review.",
    bookingConflict: "That time is already requested or booked for this model. Choose another hour.",
    bookingSent: "Request sent. The agency will review price, city, and schedule.",
    adminWrong: "Admin password is incorrect.",
    mediaAdded: "Media added.",
    total: "total",
    requests: "requests",
    request: "request",
    pendingCount: "pending",
    profile: "Profile",
    portfolio: "Portfolio",
    notProvided: "Not provided",
    waitingAdmin: "waiting for admin review",
    available: "Available for requests"
  }
};

const MODELS = [
  {
    id: "raghad",
    name: "Raghad",
    city: "Riyadh",
    priceHour: 950,
    priceOutfit: 1450,
    specialties: ["Luxury fashion", "Beauty reels", "Editorial"],
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=84",
    bio: "Premium fashion and beauty model for high-end campaign shoots, launch reels, and editorial styling."
  },
  {
    id: "lina",
    name: "Lina",
    city: "Jeddah",
    priceHour: 780,
    priceOutfit: 1200,
    specialties: ["Resort wear", "Lifestyle", "Commercial"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=84",
    bio: "Warm lifestyle presence for coastal campaigns, modest fashion, and polished social content."
  },
  {
    id: "noura",
    name: "Noura",
    city: "Khobar",
    priceHour: 720,
    priceOutfit: 1100,
    specialties: ["Jewelry", "Abaya", "Studio"],
    image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=84",
    bio: "Elegant studio model with strong posing for accessories, abayas, and beauty closeups."
  },
  {
    id: "mira",
    name: "Mira",
    city: "Riyadh",
    priceHour: 860,
    priceOutfit: 1350,
    specialties: ["Runway", "Lookbooks", "Video"],
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=84",
    bio: "Runway-trained model for clean lookbooks, movement-led video, and fashion launches."
  },
  {
    id: "sara",
    name: "Sara",
    city: "Dammam",
    priceHour: 690,
    priceOutfit: 1050,
    specialties: ["Skincare", "UGC", "Beauty"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=84",
    bio: "Beauty and skincare talent with natural camera presence for product-first campaigns."
  },
  {
    id: "lama",
    name: "Lama",
    city: "AlUla",
    priceHour: 1100,
    priceOutfit: 1650,
    specialties: ["Destination", "Luxury", "Editorial"],
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=84",
    bio: "Destination model for cinematic shoots, luxury travel visuals, and dramatic outdoor concepts."
  },
  {
    id: "reem",
    name: "Reem",
    city: "Jeddah",
    priceHour: 740,
    priceOutfit: 1150,
    specialties: ["Sportswear", "Lifestyle", "Events"],
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=84",
    bio: "Energetic commercial model for events, sportswear, lifestyle reels, and mall activations."
  },
  {
    id: "dana",
    name: "Dana",
    city: "Riyadh",
    priceHour: 820,
    priceOutfit: 1280,
    specialties: ["Perfume", "Evening wear", "Hands"],
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=84",
    bio: "Refined model for perfume, evening wear, hand modeling, and luxe product storytelling."
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const CITY_AR = {
  Riyadh: "الرياض",
  Jeddah: "جدة",
  Khobar: "الخبر",
  Dammam: "الدمام",
  AlUla: "العلا",
  "Other Saudi city": "مدينة سعودية أخرى"
};
const CITY_EN = Object.fromEntries(Object.entries(CITY_AR).map(([en, ar]) => [ar, en]));
const MODEL_AR = {
  raghad: {
    name: "رغد",
    specialties: ["أزياء فاخرة", "ريلز جمال", "تحريري"],
    bio: "مودل أزياء وجمال فاخرة للحملات الراقية، ريلز الإطلاق، والتنسيقات التحريرية."
  },
  lina: {
    name: "لينا",
    specialties: ["أزياء منتجعات", "لايف ستايل", "تجاري"],
    bio: "حضور ناعم ومناسب للحملات الساحلية، الأزياء المحتشمة، ومحتوى السوشال المصقول."
  },
  noura: {
    name: "نورة",
    specialties: ["مجوهرات", "عبايات", "استوديو"],
    bio: "مودل أنيقة للاستوديو مع بوزات قوية للإكسسوارات، العبايات، ولقطات الجمال القريبة."
  },
  mira: {
    name: "ميرا",
    specialties: ["رن واي", "لوك بوك", "فيديو"],
    bio: "مودل بخبرة رن واي للوك بوكس النظيفة، الفيديوهات الحركية، وإطلاقات الموضة."
  },
  sara: {
    name: "سارة",
    specialties: ["عناية بالبشرة", "UGC", "جمال"],
    bio: "مودل جمال وعناية بالبشرة بحضور طبيعي أمام الكاميرا للحملات التي تركز على المنتج."
  },
  lama: {
    name: "لمى",
    specialties: ["وجهات", "فاخر", "تحريري"],
    bio: "مودل وجهات للتصوير السينمائي، صور السفر الفاخرة، والمفاهيم الخارجية القوية."
  },
  reem: {
    name: "ريم",
    specialties: ["ملابس رياضية", "لايف ستايل", "فعاليات"],
    bio: "مودل تجارية نشطة للفعاليات، الملابس الرياضية، ريلز اللايف ستايل، وتنشيطات المولات."
  },
  dana: {
    name: "دانا",
    specialties: ["عطور", "فساتين سهرة", "مودل يد"],
    bio: "مودل راقية للعطور، فساتين السهرة، تصوير اليد، وسرد المنتجات الفاخرة."
  }
};

let authMode = "login";
let accountRole = "brand";
let currentUser = null;
let ownerAuthed = false;
let selectedModelId = MODELS[0].id;
let activeProfileModelId = MODELS[0].id;
let activeView = "brand";
let accountPanelTab = "profile";
let wizardStep = 0;
const wizardData = {};

function t(key) {
  return I18N[lang][key] || I18N.en[key] || key;
}

function w(key) {
  const labels = {
    ar: {
      brandName: "مودلز السعودية",
      back: "السابق",
      next: "التالي",
      submit: "إرسال الطلب",
      required: "يرجى تعبئة هذا الحقل.",
      choose: "يرجى اختيار خيار.",
      chooseDate: "يرجى اختيار تاريخ متاح.",
      booked: "محجوز",
      selected: "تم الاختيار",
      brandTitle: "ما اسم العلامة التجارية؟",
      brandText: "سنستخدمه في الطلب ولوحة المتابعة.",
      linksTitle: "أضف رابطا للتعريف بالعلامة",
      linksText: "الرابط الأول إلزامي، والثاني اختياري. يمكنك وضع موقع أو حساب اجتماعي.",
      mainLink: "موقع إلكتروني أو حساب اجتماعي",
      optionalLink: "رابط إضافي اختياري",
      modelTitle: "اختَر المودل وطريقة التسعير",
      modelText: "يمكنك اختيار مودل محدد أو ترك الوكالة تقترح الأنسب.",
      locationTitle: "أين ستكون جلسة التصوير؟",
      locationText: "اختر نوع المكان. سنطلب رابط الموقع فقط إذا كان التصوير في منزل.",
      home: "منزل خاص",
      homeText: "يتطلب مشاركة رابط العنوان الآن.",
      rented: "مكان مستأجر / فندق",
      rentedText: "Airbnb أو Gathern أو فندق. يمكن تحديث الموقع بعد تأكيد الحجز.",
      arranged: "الوكالة ترتب الموقع",
      arrangedText: "نقترح موقعا بناء على دراسة السوق والمنافسين واحتياج الحملة.",
      homeLink: "رابط عنوان المنزل",
      rentedNote: "لا يلزم تحديد الموقع الآن، لكن يجب تزويدنا بالرابط بعد تأكيد الحجز.",
      arrangedNote: "سيتم اقتراح موقع مناسب بعد مراجعة العلامة والمنافسين.",
      purposeTitle: "ما سبب التصوير؟",
      purposeText: "اختر نوع المحتوى حتى نراجع المودل والمكان بشكل أدق.",
      otherPurpose: "اكتب سبب التصوير",
      cityTitle: "اختر المدينة",
      cityText: "إذا كانت المدينة مختلفة عن مدينة المودل قد تظهر رسوم إضافية بعد المراجعة.",
      dateTitle: "اختر تاريخا متاحا من الأسبوع القادم",
      dateText: "لا تظهر التواريخ القديمة أو القريبة. الأيام غير المتاحة تظهر فقط كـ محجوز بدون تفاصيل.",
      productionTitle: "تفاصيل الإنتاج",
      productionText: "أضف وقت البداية، المدة، عدد اللوكات، وهل يوجد مصور.",
      rulesTitle: "الشروط النهائية",
      rulesText: "يجب قبول الشروط قبل إرسال الطلب للمراجعة.",
      reviewTitle: "مراجعة الطلب",
      reviewText: "تأكد من البيانات ثم أرسل الطلب للإدارة.",
      brandLinks: "روابط العلامة",
      locationType: "نوع الموقع",
      shootPurpose: "سبب التصوير",
      production: "تفاصيل الإنتاج"
    },
    en: {
      brandName: "Saudi Models",
      back: "Back",
      next: "Next",
      submit: "Send request",
      required: "Please fill this field.",
      choose: "Please choose an option.",
      chooseDate: "Please choose an available date.",
      booked: "Booked",
      selected: "Selected",
      brandTitle: "What is the brand name?",
      brandText: "We will use it in the request and tracking dashboard.",
      linksTitle: "Add a brand reference link",
      linksText: "The first link is required, the second is optional. You can add a website or social account.",
      mainLink: "Website or social account",
      optionalLink: "Optional extra link",
      modelTitle: "Choose model and pricing",
      modelText: "Choose a specific model or let the agency recommend the best fit.",
      locationTitle: "Where will the photo or video session happen?",
      locationText: "Choose the location type. We only ask for an address link now if it is a home.",
      home: "Personal home",
      homeText: "Requires sharing the address link now.",
      rented: "Rented place / hotel",
      rentedText: "Airbnb, Gathern, or hotel. You can update us with the location after confirmation.",
      arranged: "Agency arranges location",
      arrangedText: "We suggest a location based on your market, competitors, and campaign needs.",
      homeLink: "Home address link",
      rentedNote: "No location is required now, but you must update us with the link after confirmation.",
      arrangedNote: "A suitable location will be proposed after brand and competitor review.",
      purposeTitle: "What is the photoshoot for?",
      purposeText: "Choose the content type so we can review the model and location more accurately.",
      otherPurpose: "Write the shoot purpose",
      cityTitle: "Choose the city",
      cityText: "If the city differs from the model base city, extra charges may apply after review.",
      dateTitle: "Choose an available date from next week",
      dateText: "Past and close dates are hidden. Unavailable days only show as Booked with no private details.",
      productionTitle: "Production details",
      productionText: "Add start time, duration, outfit count, and photographer details.",
      rulesTitle: "Final rules",
      rulesText: "Rules must be accepted before sending the request for review.",
      reviewTitle: "Review request",
      reviewText: "Check the details, then send the request to admin.",
      brandLinks: "Brand links",
      locationType: "Location type",
      shootPurpose: "Shoot purpose",
      production: "Production details"
    }
  };
  return labels[lang][key] || labels.en[key] || key;
}

function displayCity(city) {
  const english = CITY_EN[city] || city;
  return lang === "ar" ? CITY_AR[english] || city : english;
}

function normalizeCity(city) {
  return CITY_EN[city] || city;
}

function displayModelName(model) {
  if (model.userModel) return model.name;
  return lang === "ar" ? MODEL_AR[model.id]?.name || model.name : model.name;
}

function displayModelBio(model) {
  if (model.userModel) return model.bio;
  return lang === "ar" ? MODEL_AR[model.id]?.bio || model.bio : model.bio;
}

function displaySpecialties(model) {
  if (model.userModel) return model.specialties;
  return lang === "ar" ? MODEL_AR[model.id]?.specialties || model.specialties : model.specialties;
}

function modelProfileMeta(model) {
  if (model.userModel) {
    const profile = model.profile || {};
    const gallery = [...(profile.highlightFiles || [])];
    const brands = (profile.brands || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    return {
      gallery: gallery.length ? gallery : [model.image],
      brands: brands.length ? brands : [lang === "ar" ? "علامات قيد الإضافة" : "Brands being added"],
      socials: {
        instagram: profile.instagram || "#",
        tiktok: profile.tiktok || "#",
        snapchat: profile.snapchat || "#"
      },
      stats: {
        campaigns: profile.campaigns || 0,
        views: profile.views || (lang === "ar" ? "قيد التحديث" : "updating"),
        response: lang === "ar" ? "حسب التوفر" : "by availability"
      }
    };
  }
  const galleries = {
    raghad: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=82",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=82"
    ],
    lina: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=82",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=82",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=82"
    ],
    noura: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=82",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=82",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=82"
    ]
  };
  const fallback = [
    model.image,
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=82",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=82"
  ];
  const brandSets = {
    Riyadh: ["Oud Elite", "Layali Beauty", "Nakhla Studio", "Velvet Abaya"],
    Jeddah: ["Red Sea Resort", "Nour Beauty", "Maison Jeddah", "Luma Atelier"],
    Khobar: ["Eastern Jewels", "Khobar Gallery", "Pearl Fragrance", "Dana Studio"],
    Dammam: ["Dammam Active", "Skin Muse", "Coastline Cafe", "Saffron Events"],
    AlUla: ["AlUla Edit", "Desert Muse", "Heritage House", "Astra Travel"]
  };
  return {
    gallery: galleries[model.id] || fallback,
    brands: brandSets[model.city] || brandSets.Riyadh,
    socials: {
      instagram: `https://instagram.com/${model.id}.model`,
      tiktok: `https://tiktok.com/@${model.id}model`,
      snapchat: `https://snapchat.com/add/${model.id}model`
    },
    stats: {
      campaigns: 28 + model.name.length,
      views: model.city === "Riyadh" ? "420M+" : model.city === "Jeddah" ? "310M+" : "180M+",
      response: lang === "ar" ? "خلال 24 ساعة" : "within 24h"
    }
  };
}

function applyTranslations() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  $('[data-i18n="brandName"]').textContent = w("brandName");
  document.title = w("brandName");
  $('[data-i18n="agencyTitle"]').textContent =
    lang === "ar"
      ? "نحوّل أفكارك وأفكارنا إلى محتوى حي باستخدام مودلز محترفات وصناعة محتوى مبنية على النتائج."
      : "We turn your ideas and ours into live content using experienced models and result-driven production.";
  $('[data-i18n="intro1Title"]').textContent = lang === "ar" ? "خبرة في صناعة المحتوى" : "Content creation expertise";
  $('[data-i18n="intro1Text"]').textContent =
    lang === "ar"
      ? "نساعدك في تجهيز الفكرة، اختيار المودل، وتوجيه التصوير حتى تحصل على أكبر قيمة من يوم التصوير."
      : "We help shape the idea, choose the model, and guide the shoot so you get the most from production day.";
  $('[data-i18n="intro2Title"]').textContent = lang === "ar" ? "نتائج ضخمة على تيك توك" : "Massive TikTok results";
  $('[data-i18n="intro2Text"]').textContent =
    lang === "ar"
      ? "مودلز وخبرات ساعدت على تحقيق أكثر من مليار مشاهدة في تيك توك خلال 2026 وأكثر من 2 مليار مشاهدة في 2025."
      : "Models and experience that helped generate over 1 billion TikTok views in 2026 and over 2 billion in 2025.";
  $('[data-i18n="intro3Title"]').textContent = lang === "ar" ? "تنفيذ يقلل الهدر" : "Production that reduces waste";
  $('[data-i18n="intro3Text"]').textContent =
    lang === "ar"
      ? "نعرف نوع التصوير مسبقا حتى يصل المودل مستعدا ذهنيا وجسديا، ونقترح ترندات وأفكارا تساعدك على تقليل الوقت والتكاليف."
      : "We learn the shoot type early so the model arrives mentally and physically prepared, while we suggest trends and ideas that reduce wasted time and cost.";
  $("#languageToggle").textContent = t("languageButton");
  $("#authSubmit").textContent = authMode === "login" ? t("login") : t("signup");
  $("#pricePreview").textContent ||= t("chooseEstimate");
  renderLocalizedOptions();
}

function renderLocalizedOptions() {
  const cityValues = ["Riyadh", "Jeddah", "Khobar", "Dammam", "AlUla", "Other Saudi city"];
  ["requestedCity", "modelCity"].forEach((id) => {
    const select = $(`#${id}`);
    if (!select) return;
    const current = normalizeCity(select.value || "Riyadh");
    select.innerHTML = cityValues
      .filter((city) => id === "requestedCity" || city !== "Other Saudi city")
      .map((city) => `<option value="${city}">${displayCity(city)}</option>`)
      .join("");
    select.value = cityValues.includes(current) ? current : "Riyadh";
  });

  const durations = [
    ["1", lang === "ar" ? "ساعة واحدة" : "1 hour"],
    ["2", lang === "ar" ? "ساعتان" : "2 hours"],
    ["3", lang === "ar" ? "3 ساعات" : "3 hours"],
    ["4", lang === "ar" ? "4 ساعات" : "4 hours"],
    ["5", lang === "ar" ? "5 ساعات" : "5 hours"],
    ["6", lang === "ar" ? "6 ساعات" : "6 hours"]
  ];
  const durationSelect = $("#duration");
  if (durationSelect) {
    const current = durationSelect.value || "1";
    durationSelect.innerHTML = durations.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
    durationSelect.value = current;
  }

  const photographerSelect = $("#photographer");
  if (photographerSelect) {
    const current = photographerSelect.value || "No photographer";
    const values = ["No photographer", "Female photographer", "Male photographer", "Team photographer"];
    photographerSelect.innerHTML = values.map((value) => `<option value="${value}">${translatePhotographer(value)}</option>`).join("");
    photographerSelect.value = current;
  }
}

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function padHour(hour) {
  return `${String(hour).padStart(2, "0")}:00`;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function money(value) {
  return `${Number(value).toLocaleString(lang === "ar" ? "ar-SA" : "en-US")} ${t("sar")}`;
}

function getUpcomingDates() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  return Array.from({ length: 30 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return isoDate(date);
  });
}

function getBookings() {
  return readStore(STORE.bookings, []);
}

function setBookings(bookings) {
  writeStore(STORE.bookings, bookings);
}

function getUsers() {
  return readStore(STORE.users, []);
}

function setUsers(users) {
  writeStore(STORE.users, users);
}

function getModelApplications() {
  return readStore(STORE.modelApplications, []);
}

function setModelApplications(applications) {
  writeStore(STORE.modelApplications, applications);
}

function getModelProfiles() {
  return readStore(STORE.modelProfiles, {});
}

function setModelProfiles(profiles) {
  writeStore(STORE.modelProfiles, profiles);
}

function getCurrentModelProfile() {
  if (!currentUser || currentUser.role !== "model") return null;
  const profiles = getModelProfiles();
  return profiles[currentUser.username] || {
    username: currentUser.username,
    displayName: currentUser.username,
    city: "Riyadh",
    pfp: "",
    highlights: "",
    highlightFiles: [],
    brands: "",
    priceHour: 700,
    priceOutfit: 350,
    specialties: "",
    category: "",
    instagram: "",
    tiktok: "",
    snapchat: "",
    bio: ""
  };
}

function saveCurrentModelProfile(profile) {
  const profiles = getModelProfiles();
  profiles[currentUser.username] = profile;
  setModelProfiles(profiles);
}

function getRosterModels() {
  const profiles = getModelProfiles();
  const users = getUsers();
  const approvedProfiles = users
    .filter((user) => user.role === "model" && user.status === "active")
    .map((user) => {
      const profile = profiles[user.username] || {};
      const id = `user-${user.username.toLowerCase()}`;
      const specialtyList = (profile.specialties || profile.category || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      return {
        id,
        userModel: true,
        username: user.username,
        name: profile.displayName || user.username,
        city: profile.city || "Riyadh",
        priceHour: Number(profile.priceHour || 700),
        priceOutfit: Number(profile.priceOutfit || Math.round(Number(profile.priceHour || 700) * 0.5)),
        specialties: specialtyList.length ? specialtyList : [lang === "ar" ? "محتوى تجاري" : "Commercial content"],
        image: profile.pfp || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=82",
        bio: profile.bio || (lang === "ar" ? "مودل معتمدة في مودلز السعودية." : "Approved model on Saudi Models."),
        profile
      };
    });
  return [...MODELS, ...approvedProfiles];
}

function approveModelApplication(id) {
  const applications = getModelApplications();
  const application = applications.find((item) => item.id === id);
  if (!application) return;

  const users = getUsers().map((user) =>
    user.username === application.username && user.role === "model"
      ? { ...user, status: "active" }
      : user
  );
  setUsers(users);
  setModelApplications(applications.filter((item) => item.id !== id));
  renderAll();
}

function getMedia() {
  return readStore(STORE.media, [
    {
      id: crypto.randomUUID(),
      platform: "instagram",
      url: "",
      placeholderKey: "noMediaInsta"
    },
    {
      id: crypto.randomUUID(),
      platform: "tiktok",
      url: "",
      placeholderKey: "noMediaTiktok"
    }
  ]);
}

function setMedia(media) {
  writeStore(STORE.media, media);
}

function modelById(id) {
  return getRosterModels().find((model) => model.id === id) || getRosterModels()[0] || MODELS[0];
}

function setMessage(id, text) {
  $(id).textContent = text;
}

function switchView(viewName) {
  activeView = viewName;
  $$(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.viewTarget === viewName));
  $$(".view").forEach((view) => view.classList.remove("active"));
  $(`#${viewName}View`).classList.add("active");
  if (viewName === "modelProfile") renderModelProfile(activeProfileModelId);
  updateBookingPageVisibility();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBookingPageVisibility() {
  const isBookingPage = activeView === "brand" && currentUser?.role === "brand";
  document.body.classList.toggle("booking-mode", isBookingPage);
  $("#bookingPanel").classList.toggle("hidden", !isBookingPage);
}

function openModelProfile(modelId) {
  activeProfileModelId = modelId;
  selectedModelId = modelId;
  renderModelProfile(modelId);
  switchView("modelProfile");
}

function statusLabel(status) {
  const labels = {
    pending: t("pendingReview"),
    accepted: t("accepted"),
    refused: t("refused"),
    rescheduled: t("rescheduled")
  };
  return labels[status] ?? status;
}

function bookingHours(booking) {
  return Array.from({ length: Number(booking.duration) }, (_, index) => Number(booking.startHour) + index);
}

function hasConflict(candidate, ignoredId = null) {
  return getBookings().some((booking) => {
    if (booking.id === ignoredId || booking.status === "refused") return false;
    if (booking.modelId !== candidate.modelId || booking.date !== candidate.date) return false;
    return bookingHours(booking).some((hour) => bookingHours(candidate).includes(hour));
  });
}

function estimateBooking(booking) {
  const model = modelById(booking.modelId);
  const base =
    booking.pricingChoice === "outfit"
      ? pieceRate(model) * Number(booking.outfitCount || 1)
      : model.priceHour * Number(booking.duration || 1);
  const cityNote = normalizeCity(booking.requestedCity) !== model.city ? t("cityExtra") : t("noCityExtra");
  return { base, cityNote };
}

function translatePhotographer(value) {
  const map = {
    "No photographer": { ar: "لا يوجد مصور", en: "No photographer" },
    "Female photographer": { ar: "مصورة امرأة", en: "Female photographer" },
    "Male photographer": { ar: "مصور رجل", en: "Male photographer" },
    "Team photographer": { ar: "فريق تصوير", en: "Team photographer" }
  };
  return map[value]?.[lang] || value;
}

function renderStats() {
  const bookings = getBookings();
  $("#modelCount").textContent = getRosterModels().length;
  $("#pendingCount").textContent = bookings.filter((booking) => booking.status === "pending").length;
  $("#acceptedCount").textContent = bookings.filter((booking) => booking.status === "accepted").length;
}

function renderAuth() {
  const storedUser = readStore(STORE.currentUser, null);
  currentUser = storedUser ? { ...storedUser, role: storedUser.role || "brand" } : null;
  ownerAuthed = readStore(STORE.owner, false);

  const isBrand = currentUser?.role === "brand";
  $("#authPanel").classList.toggle("hidden", Boolean(currentUser));
  $("#brandRequestsPanel").classList.toggle("hidden", !isBrand);
  $("#signOutButton").classList.toggle("hidden", !currentUser && !ownerAuthed);
  $("#ownerLogin").classList.toggle("hidden", ownerAuthed);
  $("#ownerDashboard").classList.toggle("hidden", !ownerAuthed);
  $('[data-view-target="schedule"]')?.classList.toggle("hidden", !ownerAuthed);
  if (!ownerAuthed && $("#scheduleView")?.classList.contains("active")) switchView("brand");
  updateBookingPageVisibility();

  if (isBrand) {
    $("#currentBrand").textContent = currentUser.username;
    $("#brandName").value ||= currentUser.username;
  }
  renderAccountPanel();
}

function renderRequests(target, bookings, ownerMode = false) {
  const root = $(target);
  root.innerHTML = "";

  if (!bookings.length) {
    root.innerHTML = `<div class="media-placeholder">${t("noRequests")}</div>`;
    return;
  }

  bookings
    .sort((a, b) => `${a.date}${a.startHour}`.localeCompare(`${b.date}${b.startHour}`))
    .forEach((booking) => {
      const model = modelById(booking.modelId);
      const { base, cityNote } = estimateBooking(booking);
      const card = $("#requestTemplate").content.firstElementChild.cloneNode(true);
      $("h3", card).textContent = booking.campaignTitle;
      $(".muted", card).textContent = `${displayModelName(model)} - ${booking.brandName} - ${formatDate(booking.date)} - ${padHour(booking.startHour)}`;
      const status = $(".status", card);
      status.textContent = statusLabel(booking.status);
      status.classList.add(booking.status);

      const fields = [
        [t("model"), `${displayModelName(model)} (${displayCity(model.city)})`],
        [t("brand"), booking.brandName],
        [w("brandLinks"), `${booking.brandPrimaryLink ? `<a href="${booking.brandPrimaryLink}" target="_blank" rel="noreferrer">${booking.brandPrimaryLink}</a>` : t("none")}${booking.brandSecondaryLink ? `<br><a href="${booking.brandSecondaryLink}" target="_blank" rel="noreferrer">${booking.brandSecondaryLink}</a>` : ""}`],
        [w("locationType"), locationLabel(booking.locationType)],
        [w("shootPurpose"), booking.campaignTitle],
        [t("requestedCity"), displayCity(booking.requestedCity)],
        [t("pricing"), `${booking.pricingChoice === "outfit" ? t("priceOutfit") : t("priceHour")} - ${t("estimatePrefix")} ${money(base)}`],
        [t("cityReview"), cityNote],
        [t("location"), booking.locationLink ? `<a href="${booking.locationLink}" target="_blank" rel="noreferrer">${t("openLocation")}</a>` : locationLabel(booking.locationType)],
        [t("photographer"), translatePhotographer(booking.photographer)],
        [t("bookedBy"), booking.username],
        [t("notes"), booking.notes || t("none")]
      ];
      $("dl", card).innerHTML = fields.map(([term, value]) => `<div><dt>${term}</dt><dd>${value}</dd></div>`).join("");

      const actions = $(".request-actions", card);
      if (ownerMode) {
        actions.append(
          actionButton(t("acceptAction"), () => updateBookingStatus(booking.id, "accepted")),
          actionButton(t("refuseAction"), () => updateBookingStatus(booking.id, "refused")),
          actionButton(t("rescheduleAction"), () => rescheduleBooking(booking.id))
        );
      }

      root.append(card);
    });
}

function bookingsForCurrentModel() {
  if (!currentUser || currentUser.role !== "model") return [];
  const username = currentUser.username.toLowerCase();
  return getBookings().filter((booking) => {
    const model = modelById(booking.modelId);
    return booking.modelId?.toLowerCase() === `user-${username}` || booking.modelId?.toLowerCase() === username || model.username?.toLowerCase() === username || model.name.toLowerCase() === username;
  });
}

function renderAccountPanel() {
  const label = $("#accountLabel");
  const avatar = $("#accountAvatar");
  const title = $("#accountPanelTitle");
  const menu = $("#accountMenu");
  const body = $("#accountPanelBody");
  if (!label || !avatar || !title || !menu || !body) return;

  const name = currentUser?.username || w("brandName");
  label.textContent = currentUser ? name : w("brandName");
  title.textContent = currentUser ? name : w("brandName");
  const modelProfile = currentUser?.role === "model" ? getCurrentModelProfile() : null;
  if (modelProfile?.pfp) {
    avatar.innerHTML = `<img src="${modelProfile.pfp}" alt="${name}" />`;
  } else {
    avatar.textContent = currentUser ? name.slice(0, 1).toUpperCase() : "S";
  }

  if (!currentUser) {
    menu.innerHTML = "";
    body.innerHTML = `<div class="media-placeholder">${lang === "ar" ? "سجل الدخول لعرض الحساب والإعدادات." : "Log in to view account and settings."}</div>`;
    return;
  }

  const tabs = currentUser.role === "model"
    ? [
        ["profile", lang === "ar" ? "الملف" : "Profile"],
        ["requests", lang === "ar" ? "طلبات العلامات" : "Brand requests"],
        ["schedule", lang === "ar" ? "الجدول" : "Schedule"]
      ]
    : [["requests", lang === "ar" ? "طلباتي" : "My requests"]];
  if (!tabs.some(([key]) => key === accountPanelTab)) accountPanelTab = tabs[0][0];
  menu.innerHTML = tabs.map(([key, text]) => `<button class="${accountPanelTab === key ? "active" : ""}" data-account-tab="${key}" type="button">${text}</button>`).join("");

  if (currentUser.role === "model" && accountPanelTab === "profile") body.innerHTML = renderModelAccountEditor();
  if (currentUser.role === "model" && accountPanelTab === "requests") body.innerHTML = renderModelBookingUpdates();
  if (currentUser.role === "model" && accountPanelTab === "schedule") body.innerHTML = renderModelAccountSchedule();
  if (currentUser.role === "brand") body.innerHTML = `<div class="request-list" id="panelBrandRequests"></div>`;

  $$("[data-account-tab]", menu).forEach((button) => {
    button.addEventListener("click", () => {
      accountPanelTab = button.dataset.accountTab;
      renderAccountPanel();
    });
  });

  if (currentUser.role === "brand") {
    renderRequests("#panelBrandRequests", getBookings().filter((booking) => booking.username === currentUser.username));
  }

  $("#modelProfileSettingsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const existingProfile = getCurrentModelProfile();
    const profile = {
      username: currentUser.username,
      displayName: $("#modelDisplayName").value.trim() || currentUser.username,
      city: $("#modelProfileCity").value,
      pfp: existingProfile?.pfp || "",
      highlights: (existingProfile?.highlights || ""),
      highlightFiles: existingProfile?.highlightFiles || [],
      priceHour: Number($("#modelPriceHour").value || 700),
      priceOutfit: Number($("#modelPricePiece").value || 350),
      specialties: $("#modelSpecialties").value.trim(),
      category: $("#modelCategory").value,
      brands: $("#modelBrands").value.trim(),
      instagram: $("#modelInstagram").value.trim(),
      tiktok: $("#modelTiktok").value.trim(),
      snapchat: $("#modelSnapchat").value.trim(),
      bio: $("#modelProfileBio").value.trim()
    };
    saveCurrentModelProfile(profile);
    renderAll();
  });

  $("#modelHighlightFiles")?.addEventListener("change", async (event) => {
    const files = [...event.target.files].filter((file) => file.type.startsWith("image/"));
    if (!files.length) return;
    const current = getCurrentModelProfile();
    const images = await Promise.all(files.map(fileToDataUrl));
    current.highlightFiles = [...(current.highlightFiles || []), ...images].slice(0, 12);
    saveCurrentModelProfile(current);
    renderAll();
  });

  $("#modelPfpFile")?.addEventListener("change", async (event) => {
    const file = [...event.target.files].find((item) => item.type.startsWith("image/"));
    if (!file) return;
    const current = getCurrentModelProfile();
    current.pfp = await fileToDataUrl(file);
    saveCurrentModelProfile(current);
    renderAll();
  });

  $("#previewOwnProfile")?.addEventListener("click", () => {
    const profile = getCurrentModelProfile();
    renderCustomModelProfile(profile);
    $("#accountPanel").classList.add("hidden");
    switchView("modelProfile");
  });
}

function renderModelAccountEditor() {
  const profile = getCurrentModelProfile();
  return `
    <form class="form" id="modelProfileSettingsForm">
      <label><span>${lang === "ar" ? "اسم الظهور" : "Display name"}</span><input id="modelDisplayName" value="${profile.displayName || ""}" /></label>
      <label class="file-picker">
        <span>${lang === "ar" ? "صورة الملف من المعرض" : "Profile photo from gallery"}</span>
        <input id="modelPfpFile" type="file" accept="image/*" />
        <small>${lang === "ar" ? "ستظهر دائرية في زر الحساب وكاملة في صفحة الملف." : "It appears circular in the account button and full in the profile page."}</small>
      </label>
      <div class="pfp-preview">${profile.pfp ? `<img src="${profile.pfp}" alt="profile" />` : `<span>${lang === "ar" ? "لم يتم رفع صورة بعد" : "No photo uploaded yet"}</span>`}</div>
      <label><span>${t("city")}</span><select id="modelProfileCity">${["Riyadh", "Jeddah", "Khobar", "Dammam", "AlUla", "Other Saudi city"].map((city) => `<option value="${city}" ${profile.city === city ? "selected" : ""}>${displayCity(city)}</option>`).join("")}</select></label>
      <label><span>${lang === "ar" ? "نبذة الملف" : "Profile bio"}</span><textarea id="modelProfileBio" rows="3">${profile.bio || ""}</textarea></label>
      <div class="grid two compact">
        <label><span>${lang === "ar" ? "سعري بالساعة" : "My hourly rate"}</span><input id="modelPriceHour" type="number" min="1" value="${profile.priceHour || 700}" /></label>
        <label><span>${lang === "ar" ? "سعري للقطعة / اللوك" : "My piece/look rate"}</span><input id="modelPricePiece" type="number" min="1" value="${profile.priceOutfit || Math.round(Number(profile.priceHour || 700) * 0.5)}" /></label>
      </div>
      <label><span>${lang === "ar" ? "أنا أتخصص في" : "I specialize in"}</span><select id="modelCategory">
        ${["Fashion", "Makeup", "Jewelry", "Skincare", "Perfume", "Lifestyle", "Events", "Other"].map((item) => `<option value="${item}" ${profile.category === item ? "selected" : ""}>${item}</option>`).join("")}
      </select></label>
      <label><span>${lang === "ar" ? "تخصصات إضافية" : "Additional specialties"}</span><input id="modelSpecialties" value="${profile.specialties || ""}" placeholder="${lang === "ar" ? "مثال: عبايات، مجوهرات، ريلز" : "Example: abayas, jewelry, reels"}" /></label>
      <label class="file-picker">
        <span>${lang === "ar" ? "صور الهايلايت من المعرض" : "Highlight photos from gallery"}</span>
        <input id="modelHighlightFiles" type="file" accept="image/*" multiple />
        <small>${lang === "ar" ? "يمكنك اختيار أكثر من صورة." : "You can choose multiple images."}</small>
      </label>
      <div class="upload-preview" id="highlightPreview">
        ${(profile.highlightFiles || []).map((src) => `<img src="${src}" alt="highlight" />`).join("") || `<span>${lang === "ar" ? "لا توجد صور مرفوعة بعد" : "No uploaded images yet"}</span>`}
      </div>
      <label><span>${lang === "ar" ? "علامات عملت معها" : "Brands worked with"}</span><textarea id="modelBrands" rows="3" placeholder="${lang === "ar" ? "افصلي بينها بفواصل" : "Separate with commas"}">${profile.brands || ""}</textarea></label>
      <div class="grid two compact">
        <label><span>Instagram</span><input id="modelInstagram" type="url" value="${profile.instagram || ""}" /></label>
        <label><span>TikTok</span><input id="modelTiktok" type="url" value="${profile.tiktok || ""}" /></label>
      </div>
      <label><span>Snapchat</span><input id="modelSnapchat" type="url" value="${profile.snapchat || ""}" /></label>
      <button class="primary-button" type="submit">${lang === "ar" ? "حفظ الملف" : "Save profile"}</button>
      <button class="ghost-button" type="button" id="previewOwnProfile">${lang === "ar" ? "عرض شكل الملف" : "View profile preview"}</button>
    </form>
  `;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderModelBookingUpdates() {
  const bookings = bookingsForCurrentModel();
  return `<div class="request-list">${bookings.length ? bookings.map((booking) => `<article class="request-card"><div class="request-top"><div><h3>${booking.campaignTitle}</h3><p class="muted">${booking.brandName} - ${formatDate(booking.date)} - ${padHour(booking.startHour)}</p></div><span class="status ${booking.status}">${statusLabel(booking.status)}</span></div></article>`).join("") : `<div class="media-placeholder">${lang === "ar" ? "لا توجد طلبات من علامات تجارية حاليا." : "No brand requests yet."}</div>`}</div>`;
}

function renderModelAccountSchedule() {
  const modelId = currentUser.username.toLowerCase();
  const matchedModel = getRosterModels().find((model) => model.id === `user-${modelId}` || model.id === modelId || model.name.toLowerCase() === modelId);
  return matchedModel ? renderModelSchedule(matchedModel.id) : `<div class="media-placeholder">${lang === "ar" ? "سيظهر جدولك هنا بعد ربط ملفك العام." : "Your schedule will appear here after your public profile is linked."}</div>`;
}

function actionButton(text, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = text === t("acceptAction") || text === t("bookThisModel") ? "primary-button" : "ghost-button";
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function updateBookingStatus(id, status) {
  setBookings(getBookings().map((booking) => (booking.id === id ? { ...booking, status } : booking)));
  renderAll();
}

function rescheduleBooking(id) {
  const bookings = getBookings();
  const booking = bookings.find((item) => item.id === id);
  if (!booking) return;

  const date = prompt(lang === "ar" ? "التاريخ الجديد (YYYY-MM-DD)" : "New date (YYYY-MM-DD)", booking.date);
  if (!date) return;
  const startHour = Number(prompt(lang === "ar" ? "ساعة البداية الجديدة (8-22)" : "New start hour (8-22)", booking.startHour));
  if (!HOURS.includes(startHour)) {
    alert(lang === "ar" ? "اختر ساعة بين 08:00 و 22:00." : "Choose an hour between 08:00 and 22:00.");
    return;
  }

  const updated = { ...booking, date, startHour, status: "rescheduled" };
  if (hasConflict(updated, id)) {
    alert(t("bookingConflict"));
    return;
  }

  setBookings(bookings.map((item) => (item.id === id ? updated : item)));
  renderAll();
}

function renderBrandRequests() {
  if (currentUser?.role !== "brand") return;
  const bookings = getBookings().filter((booking) => booking.username === currentUser.username);
  $("#brandRequestCount").textContent = `${bookings.length} ${bookings.length === 1 ? t("request") : t("requests")}`;
  renderRequests("#brandRequests", bookings);
}

function renderOwnerRequests() {
  const bookings = getBookings();
  $("#ownerRequestCount").textContent = `${bookings.length} ${t("total")}`;
  renderRequests("#ownerRequests", bookings, true);
}

function renderModelApplications() {
  const applications = getModelApplications();
  $("#modelApplicationCount").textContent = `${applications.length} ${t("pendingCount")}`;
  const root = $("#modelApplications");
  root.innerHTML = "";

  if (!applications.length) {
    root.innerHTML = `<div class="media-placeholder">${t("noApplications")}</div>`;
    return;
  }

  applications.forEach((application) => {
    const card = document.createElement("article");
    card.className = "request-card";
    card.innerHTML = `
      <div class="request-top">
        <div>
          <h3>${application.username}</h3>
          <p class="muted">${displayCity(application.city)} - ${t("waitingAdmin")}</p>
        </div>
        <span class="status pending">${t("pendingReview")}</span>
      </div>
      <dl>
        <div><dt>${t("portfolio")}</dt><dd>${application.portfolioLink ? `<a href="${application.portfolioLink}" target="_blank" rel="noreferrer">${t("link")}</a>` : t("notProvided")}</dd></div>
        <div><dt>${t("profile")}</dt><dd>${application.bio || t("notProvided")}</dd></div>
      </dl>
      <div class="request-actions">
        <button class="primary-button" type="button" data-approve-model="${application.id}">${lang === "ar" ? "قبول المودل" : "Approve model"}</button>
      </div>
    `;
    root.append(card);
  });

  $$("[data-approve-model]", root).forEach((button) => {
    button.addEventListener("click", () => approveModelApplication(button.dataset.approveModel));
  });
}

function renderSchedule() {
  const dates = getUpcomingDates();
  $("#scheduleRange").textContent = `${formatDate(dates[0])} to ${formatDate(dates.at(-1))}`;
  const grid = $("#scheduleGrid");
  grid.innerHTML = "";

  const bookings = getBookings();
  dates.forEach((date) => {
    const day = document.createElement("article");
    day.className = "day-card";
    day.innerHTML = `<h3>${formatDate(date)}</h3>`;

    HOURS.forEach((hour) => {
      const booking = bookings.find((item) => item.date === date && item.status !== "refused" && bookingHours(item).includes(hour));
      const row = document.createElement("div");
      row.className = "hour-row";
      if (booking) {
        const model = modelById(booking.modelId);
        row.innerHTML = ownerAuthed
          ? `
            <span class="hour">${padHour(hour)}</span>
            <span class="slot ${booking.status}">
            <strong>${displayModelName(model)} - ${booking.campaignTitle}</strong>
              <small>${displayCity(booking.requestedCity)} - ${booking.locationLink ? `<a href="${booking.locationLink}" target="_blank" rel="noreferrer">${t("location")}</a>` : locationLabel(booking.locationType)} - ${statusLabel(booking.status)}</small>
            </span>
          `
          : `
            <span class="hour">${padHour(hour)}</span>
            <span class="slot ${booking.status}">
              <strong>${w("booked")}</strong>
              <small>${statusLabel(booking.status)}</small>
            </span>
          `;
      } else {
        row.innerHTML = `
          <span class="hour">${padHour(hour)}</span>
          <span class="slot open"><strong>${t("open")}</strong><small>${t("available")}</small></span>
        `;
      }
      day.append(row);
    });

    grid.append(day);
  });
}

function renderModelSchedule(modelId) {
  const bookings = getBookings();
  return `
    <div class="model-profile-schedule">
      <h3>${lang === "ar" ? "توفر المودل من الأسبوع القادم" : "Model availability from next week"}</h3>
      <div class="availability-grid compact-availability">
        ${getBookableDates().slice(0, 18).map((date) => {
          const isBooked = bookings.some((booking) => booking.modelId === modelId && booking.date === date && booking.status !== "refused");
          return `
            <div class="availability-day ${isBooked ? "booked" : ""}">
              <strong>${formatDate(date)}</strong>
              <span>${isBooked ? w("booked") : t("open")}</span>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderModels() {
  $("#modelSelect").innerHTML = [
    `<option value="agency">${t("helpChoose")}</option>`,
    ...getRosterModels().map((model) => `<option value="${model.id}">${displayModelName(model)} - ${displayCity(model.city)} - ${money(model.priceHour)} / ${t("perHour")}</option>`)
  ].join("");
  $("#modelSelect").value = selectedModelId;

  const grid = $("#modelsGrid");
  grid.innerHTML = "";
  const homeSlider = $("#homeModelSlider");
  if (homeSlider) homeSlider.innerHTML = "";
  getRosterModels().forEach((model) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "model-card";
    card.innerHTML = `
      <img src="${model.image}" alt="${displayModelName(model)} model profile" />
      <div class="model-card-content">
        <div class="model-meta">
          <span>${displayCity(model.city)}</span>
          <span>${money(model.priceHour)} / ${t("perHour")}</span>
          <span>${money(pieceRate(model))} / ${t("perOutfit")}</span>
        </div>
        <h3>${displayModelName(model)}</h3>
        <p>${displaySpecialties(model).join(" / ")}</p>
      </div>
    `;
    card.addEventListener("click", () => {
      openModelProfile(model.id);
    });
    grid.append(card);
    if (homeSlider) {
      const slide = card.cloneNode(true);
      slide.addEventListener("click", () => {
        openModelProfile(model.id);
      });
      homeSlider.append(slide);
    }
  });
}

function renderModelDetail(modelId) {
  const model = modelById(modelId);
  const detail = $("#modelDetail");
  if (!detail) {
    renderModelProfile(modelId);
    return;
  }
  detail.classList.remove("hidden");
  detail.innerHTML = `
    <div class="model-detail-layout">
      <img src="${model.image}" alt="${displayModelName(model)} model full profile" />
      <div>
        <p class="eyebrow">${t("selectedModel")}</p>
        <h2>${displayModelName(model)}</h2>
        <p class="muted">${displayModelBio(model)}</p>
        <dl class="detail-stats">
          <div><dt>${t("baseCity")}</dt><dd>${displayCity(model.city)}</dd></div>
          <div><dt>${t("hourlyRate")}</dt><dd>${money(model.priceHour)}</dd></div>
          <div><dt>${t("outfitRate")}</dt><dd>${money(pieceRate(model))}</dd></div>
          <div><dt>${t("specialties")}</dt><dd>${displaySpecialties(model).join(", ")}</dd></div>
        </dl>
        <div class="request-actions">
          <button class="primary-button" id="bookSelectedModel">${t("bookThisModel")}</button>
        </div>
        ${renderModelSchedule(model.id)}
      </div>
    </div>
  `;
  $("#bookSelectedModel").addEventListener("click", () => {
    selectedModelId = model.id;
    $("#modelSelect").value = model.id;
    updatePricePreview();
    switchView("brand");
  });
}

function renderModelProfile(modelId) {
  const model = modelById(modelId);
  const meta = modelProfileMeta(model);
  const root = $("#modelProfilePage");
  if (!root) return;
  root.innerHTML = `
    <section class="profile-hero">
      <button class="ghost-button" id="backToModels" type="button">${lang === "ar" ? "العودة للمودلز" : "Back to models"}</button>
      <div class="profile-hero-grid">
        <div class="profile-copy">
          <p class="eyebrow">${displayCity(model.city)} / ${displaySpecialties(model).join(" / ")}</p>
          <h1>${displayModelName(model)}</h1>
          <p>${displayModelBio(model)}</p>
          <div class="profile-stats">
            <span><strong>${meta.stats.campaigns}</strong>${lang === "ar" ? "حملة" : "campaigns"}</span>
            <span><strong>${meta.stats.views}</strong>${lang === "ar" ? "مشاهدات مساهمة" : "contributed views"}</span>
            <span><strong>${meta.stats.response}</strong>${lang === "ar" ? "استجابة" : "response"}</span>
          </div>
          <div class="request-actions">
            <button class="primary-button" id="profileBookButton" type="button">${t("bookThisModel")}</button>
          </div>
        </div>
        <img class="profile-main-image" src="${model.image}" alt="${displayModelName(model)}" />
      </div>
    </section>

    <section class="profile-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">${lang === "ar" ? "المعرض" : "Gallery"}</p>
          <h2>${lang === "ar" ? "لقطات من أسلوب المودل" : "Visual style gallery"}</h2>
        </div>
      </div>
      <div class="profile-gallery">
        ${meta.gallery.map((src) => `<img src="${src}" alt="${displayModelName(model)} gallery" />`).join("")}
      </div>
    </section>

    <section class="profile-section profile-columns">
      <article class="panel">
        <div class="panel-heading">
          <h2>${lang === "ar" ? "علامات عملت معها" : "Previous brands"}</h2>
        </div>
        <div class="brand-chip-list">
          ${meta.brands.map((brand) => `<span>${brand}</span>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="panel-heading">
          <h2>${lang === "ar" ? "حساباتها" : "Socials"}</h2>
        </div>
        <div class="social-list">
          <a href="${meta.socials.instagram}" target="_blank" rel="noreferrer">Instagram</a>
          <a href="${meta.socials.tiktok}" target="_blank" rel="noreferrer">TikTok</a>
          <a href="${meta.socials.snapchat}" target="_blank" rel="noreferrer">Snapchat</a>
        </div>
      </article>
    </section>

    <section class="profile-section profile-columns">
      <article class="panel">
        <div class="panel-heading">
          <h2>${lang === "ar" ? "الأسعار" : "Rates"}</h2>
        </div>
        <dl class="detail-stats">
          <div><dt>${t("hourlyRate")}</dt><dd>${money(model.priceHour)}</dd></div>
          <div><dt>${t("outfitRate")}</dt><dd>${money(pieceRate(model))}</dd></div>
          <div><dt>${t("baseCity")}</dt><dd>${displayCity(model.city)}</dd></div>
          <div><dt>${t("specialties")}</dt><dd>${displaySpecialties(model).join(", ")}</dd></div>
        </dl>
      </article>
      <article class="panel">
        ${renderModelSchedule(model.id)}
      </article>
    </section>
  `;
  $("#backToModels").addEventListener("click", () => switchView("models"));
  $("#profileBookButton").addEventListener("click", () => {
    selectedModelId = model.id;
    wizardData.modelId = model.id;
    renderAll();
    switchView("brand");
  });
}

function renderCustomModelProfile(profile) {
  const root = $("#modelProfilePage");
  if (!root) return;
  const galleryLinks = (profile.highlights || "")
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
  const gallery = [...(profile.highlightFiles || []), ...galleryLinks];
  const brands = (profile.brands || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const image = profile.pfp || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=82";
  root.innerHTML = `
    <section class="profile-hero">
      <button class="ghost-button" id="backToAccountPanel" type="button">${lang === "ar" ? "العودة للإعدادات" : "Back to settings"}</button>
      <div class="profile-hero-grid">
        <div class="profile-copy">
          <p class="eyebrow">${displayCity(profile.city || "Riyadh")}</p>
          <h1>${profile.displayName || profile.username}</h1>
          <p>${profile.bio || (lang === "ar" ? "سيظهر وصف المودل هنا بعد إضافته من الإعدادات." : "Model bio will appear here after adding it in settings.")}</p>
          <div class="request-actions">
            <button class="primary-button" type="button" id="editOwnProfileAgain">${lang === "ar" ? "تعديل الملف" : "Edit profile"}</button>
          </div>
        </div>
        <img class="profile-main-image" src="${image}" alt="${profile.displayName || profile.username}" />
      </div>
    </section>
    <section class="profile-section">
      <div class="section-heading"><div><p class="eyebrow">${lang === "ar" ? "المعرض" : "Gallery"}</p><h2>${lang === "ar" ? "هايلايت الصور" : "Highlights"}</h2></div></div>
      <div class="profile-gallery">
        ${(gallery.length ? gallery : [image]).map((src) => `<img src="${src}" alt="gallery" />`).join("")}
      </div>
    </section>
    <section class="profile-section profile-columns">
      <article class="panel">
        <div class="panel-heading"><h2>${lang === "ar" ? "علامات عملت معها" : "Previous brands"}</h2></div>
        <div class="brand-chip-list">${(brands.length ? brands : [lang === "ar" ? "أضيفي العلامات من الإعدادات" : "Add brands in settings"]).map((brand) => `<span>${brand}</span>`).join("")}</div>
      </article>
      <article class="panel">
        <div class="panel-heading"><h2>${lang === "ar" ? "حساباتها" : "Socials"}</h2></div>
        <div class="social-list">
          ${profile.instagram ? `<a href="${profile.instagram}" target="_blank" rel="noreferrer">Instagram</a>` : ""}
          ${profile.tiktok ? `<a href="${profile.tiktok}" target="_blank" rel="noreferrer">TikTok</a>` : ""}
          ${profile.snapchat ? `<a href="${profile.snapchat}" target="_blank" rel="noreferrer">Snapchat</a>` : ""}
        </div>
      </article>
    </section>
    <section class="profile-section">
      <div class="panel-heading"><h2>${lang === "ar" ? "الأسعار والتخصص" : "Rates and specialty"}</h2></div>
      <dl class="detail-stats">
        <div><dt>${t("hourlyRate")}</dt><dd>${money(profile.priceHour || 700)}</dd></div>
        <div><dt>${t("outfitRate")}</dt><dd>${money(profile.priceOutfit || Math.round(Number(profile.priceHour || 700) * 0.5))}</dd></div>
        <div><dt>${lang === "ar" ? "التخصص" : "Specialty"}</dt><dd>${profile.category || t("none")}</dd></div>
        <div><dt>${t("specialties")}</dt><dd>${profile.specialties || t("none")}</dd></div>
      </dl>
    </section>
  `;
  $("#backToAccountPanel")?.addEventListener("click", () => {
    switchView("brand");
    $("#accountPanel").classList.remove("hidden");
    accountPanelTab = "profile";
    renderAccountPanel();
  });
  $("#editOwnProfileAgain")?.addEventListener("click", () => {
    $("#accountPanel").classList.remove("hidden");
    accountPanelTab = "profile";
    renderAccountPanel();
  });
}

function renderMedia() {
  const media = getMedia();
  const mediaGrid = $("#mediaGrid");
  const ownerList = $("#ownerMediaList");
  mediaGrid.innerHTML = "";
  ownerList.innerHTML = "";

  media.forEach((item) => {
    const card = document.createElement("article");
    card.className = "media-card";
    if (!item.url) {
      card.innerHTML = `<div class="media-placeholder">${t(item.placeholderKey) || item.placeholder || ""}</div>`;
    } else if (item.platform === "instagram") {
      card.innerHTML = `<blockquote class="instagram-media" data-instgrm-permalink="${item.url}" data-instgrm-version="14"></blockquote>`;
    } else {
      card.innerHTML = `<blockquote class="tiktok-embed" cite="${item.url}" data-video-id="${extractTikTokId(item.url)}"><section><a href="${item.url}" target="_blank" rel="noreferrer">TikTok video</a></section></blockquote>`;
    }
    mediaGrid.append(card);

    const ownerRow = document.createElement("div");
    ownerRow.className = "request-card";
    ownerRow.innerHTML = `<strong>${item.platform}</strong><p class="muted">${item.url || t(item.placeholderKey) || item.placeholder}</p>`;
    ownerRow.append(actionButton(lang === "ar" ? "حذف" : "Remove", () => {
      setMedia(getMedia().filter((mediaItem) => mediaItem.id !== item.id));
      renderAll();
    }));
    ownerList.append(ownerRow);
  });

  window.instgrm?.Embeds?.process?.();
  if (window.tiktokEmbedLoad) window.tiktokEmbedLoad();
}

function extractTikTokId(url) {
  return url.match(/video\/(\d+)/)?.[1] ?? "";
}

function renderTimeOptions() {
  $("#startTime").innerHTML = HOURS.map((hour) => `<option value="${hour}">${padHour(hour)}</option>`).join("");
  const dates = getUpcomingDates();
  $("#bookingDate").min = dates[0];
  $("#bookingDate").max = dates.at(-1);
  $("#bookingDate").value ||= dates[0];
}

function updatePricePreview() {
  const modelId = $("#modelSelect").value;
  const model = modelId === "agency" ? null : modelById(modelId);
  if (!model) {
    $("#pricePreview").textContent = t("agencyPricing");
    return;
  }
  selectedModelId = model.id;
  const duration = Number($("#duration").value || 1);
  const outfitCount = Number($("#outfitCount").value || 1);
  const pricingChoice = $("#pricingChoice").value;
  const requestedCity = $("#requestedCity").value;
  const base = pricingChoice === "outfit" ? pieceRate(model) * outfitCount : model.priceHour * duration;
  const suffix = normalizeCity(requestedCity) !== model.city ? ` ${t("cityExtra")}` : ` ${t("noCityExtra")}`;
  $("#pricePreview").textContent =
    lang === "ar"
      ? `${displayModelName(model)}: ${t("estimatePrefix")} ${money(base)} ${t("beforeReview")}.${suffix}`
      : `${displayModelName(model)}: ${t("estimatePrefix")} ${money(base)} ${t("beforeReview")}.${suffix}`;
}

function getBookableDates() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() + 8);
  return Array.from({ length: 30 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return isoDate(date);
  });
}

function optionButton(value, title, text, selectedValue) {
  return `
    <button class="wizard-option ${selectedValue === value ? "active" : ""}" type="button" data-wizard-value="${value}">
      <strong>${title}</strong>
      <small>${text || ""}</small>
    </button>
  `;
}

function iconOptionButton(value, icon, title, text, selectedValue) {
  return `
    <button class="wizard-option icon-option ${selectedValue === value ? "active" : ""}" type="button" data-wizard-value="${value}">
      <span class="option-icon">${icon}</span>
      <strong>${title}</strong>
      ${text ? `<small>${text}</small>` : ""}
    </button>
  `;
}

function getPurposeOptions() {
  return [
    ["makeup", "✦", lang === "ar" ? "فيديوهات مكياج" : "Makeup videos"],
    ["fashion", "◈", lang === "ar" ? "أزياء / عبايات" : "Fashion / abayas"],
    ["perfume", "◇", lang === "ar" ? "عطور / منتجات فاخرة" : "Perfume / luxury products"],
    ["skincare", "◌", lang === "ar" ? "عناية بالبشرة" : "Skincare"],
    ["jewelry", "◆", lang === "ar" ? "مجوهرات وإكسسوارات" : "Jewelry and accessories"],
    ["lifestyle", "◎", lang === "ar" ? "مطعم أو لايف ستايل" : "Restaurant or lifestyle"],
    ["event", "✧", lang === "ar" ? "فعالية / افتتاح" : "Event / opening"],
    ["other", "+", lang === "ar" ? "أخرى" : "Other"]
  ];
}

function modelRate(model) {
  return wizardData.pricingChoice === "outfit" ? pieceRate(model) : model.priceHour;
}

function pieceRate(model) {
  return model.userModel ? Number(model.priceOutfit || Math.round(model.priceHour * 0.5)) : Math.round(model.priceHour * 0.5);
}

function quantityLabel() {
  if (wizardData.pricingChoice === "hour") return t("duration");
  if (["fashion", "makeup"].includes(wizardData.purpose)) return t("outfits");
  if (wizardData.purpose === "jewelry") return lang === "ar" ? "عدد القطع" : "Number of pieces";
  if (wizardData.purpose === "perfume" || wizardData.purpose === "skincare") return lang === "ar" ? "عدد المنتجات" : "Number of products";
  return lang === "ar" ? "عدد العناصر" : "Number of items";
}

function renderWizardModelSlider() {
  const pricingLabel = wizardData.pricingChoice === "outfit" ? t("perOutfit") : t("perHour");
  return `
    <div class="pricing-toggle">
      <button class="${wizardData.pricingChoice === "hour" ? "active" : ""}" type="button" data-pricing="hour">${t("priceHour")}</button>
      <button class="${wizardData.pricingChoice === "outfit" ? "active" : ""}" type="button" data-pricing="outfit">${t("priceOutfit")}</button>
    </div>
    <div class="model-slider" dir="rtl">
      <button class="model-card agency-pick ${wizardData.modelId === "agency" ? "active" : ""}" type="button" data-model-id="agency">
        <div class="model-card-content">
          <div class="model-meta"><span>${t("helpChoose")}</span></div>
          <h3>${lang === "ar" ? "اختيار الوكالة" : "Agency pick"}</h3>
          <p>${lang === "ar" ? "سنختار المودل الأنسب حسب المدينة ونوع التصوير." : "We choose the best model by city and shoot type."}</p>
        </div>
      </button>
      ${getRosterModels().map((model) => `
        <button class="model-card slider-card ${wizardData.modelId === model.id ? "active" : ""}" type="button" data-model-id="${model.id}">
          <img src="${model.image}" alt="${displayModelName(model)}" />
          <div class="model-card-content">
            <div class="model-meta">
              <span>${displayCity(model.city)}</span>
              <span>${money(modelRate(model))} / ${pricingLabel}</span>
            </div>
            <h3>${displayModelName(model)}</h3>
            <p>${displaySpecialties(model).join(" / ")}</p>
          </div>
        </button>
      `).join("")}
    </div>
  `;
}

function renderWizard() {
  const screen = $("#wizardScreen");
  if (!screen) return;
  const total = 12;
  $("#wizardStepText").textContent = `${wizardStep + 1} / ${total}`;
  $("#wizardProgressBar").style.width = `${((wizardStep + 1) / total) * 100}%`;
  $("#wizardBack").textContent = w("back");
  $("#wizardNext").textContent = wizardStep === total - 1 ? w("submit") : w("next");
  $("#wizardBack").classList.toggle("hidden", wizardStep === 0);
  $("#wizardMessage").textContent = "";

  if (!wizardData.modelId) wizardData.modelId = selectedModelId;
  if (!wizardData.pricingChoice) wizardData.pricingChoice = "hour";
  if (!wizardData.requestedCity) wizardData.requestedCity = "Riyadh";
  if (!wizardData.duration) wizardData.duration = "2";
  if (!wizardData.startHour) wizardData.startHour = "10";
  if (!wizardData.outfitCount) wizardData.outfitCount = "1";
  if (!wizardData.photographer) wizardData.photographer = "Female photographer";

  const model = wizardData.modelId === "agency" ? null : modelById(wizardData.modelId);
  const purposeOptions = getPurposeOptions(); /*
    ["makeup", lang === "ar" ? "فيديوهات مكياج" : "Makeup videos"],
    ["fashion", lang === "ar" ? "أزياء / عبايات" : "Fashion / abayas"],
    ["perfume", lang === "ar" ? "عطور / منتجات فاخرة" : "Perfume / luxury products"],
    ["skincare", lang === "ar" ? "عناية بالبشرة" : "Skincare"],
    ["jewelry", lang === "ar" ? "مجوهرات وإكسسوارات" : "Jewelry and accessories"],
    ["lifestyle", lang === "ar" ? "مطعم أو لايف ستايل" : "Restaurant or lifestyle"],
    ["event", lang === "ar" ? "فعالية / افتتاح" : "Event / opening"],
    ["other", lang === "ar" ? "أخرى" : "Other"]
  ];*/

  const steps = [
    () => `
      <h3>${w("brandTitle")}</h3>
      <p>${w("brandText")}</p>
      <div class="wizard-field">
        <input id="wizBrandName" value="${wizardData.brandName || currentUser?.username || ""}" autocomplete="organization" />
      </div>
    `,
    () => `
      <h3>${w("linksTitle")}</h3>
      <p>${w("linksText")}</p>
      <div class="wizard-link-grid">
        <label>
          <span><b class="focus-word">${w("mainLink")}</b></span>
          <input id="wizPrimaryLink" type="url" value="${wizardData.primaryLink || ""}" placeholder="https://..." />
        </label>
        <label>
          <span><b class="focus-word">${w("optionalLink")}</b></span>
          <input id="wizSecondaryLink" type="url" value="${wizardData.secondaryLink || ""}" placeholder="https://..." />
        </label>
      </div>
    `,
    () => `
      <h3>${w("modelTitle")}</h3>
      <p>${w("modelText")}</p>
      ${renderWizardModelSlider()}
    `,
    () => `
      <h3>${w("locationTitle")}</h3>
      <p>${w("locationText")}</p>
      <div class="wizard-options">
        ${iconOptionButton("home", "⌂", w("home"), w("homeText"), wizardData.locationType)}
        ${iconOptionButton("rented", "▣", w("rented"), w("rentedText"), wizardData.locationType)}
        ${iconOptionButton("agency", "✦", w("arranged"), w("arrangedText"), wizardData.locationType)}
      </div>
      ${wizardData.locationType === "home" ? `<label><span>${w("homeLink")}</span><input id="wizHomeLink" type="url" value="${wizardData.homeLink || ""}" placeholder="https://maps.google.com/..." /></label>` : ""}
      ${wizardData.locationType === "rented" ? `<div class="wizard-note">${w("rentedNote")}</div>` : ""}
      ${wizardData.locationType === "agency" ? `<div class="wizard-note">${w("arrangedNote")}</div>` : ""}
    `,
    () => `
      <h3>${w("purposeTitle")}</h3>
      <p>${w("purposeText")}</p>
      <div class="wizard-note">${lang === "ar" ? "نسأل عن نوع التصوير لأنه مهم لنا وللمودل لمعرفة ما سيتم تصويره والاستعداد ذهنيا وجسديا، وهذا يساعدك على الوصول لأهدافك وربما اقتراح ترندات أو تقليل التكاليف بعدم إضاعة وقت في الشرح عند الوصول." : "We ask because it helps us and the model prepare mentally and physically for what will be shot, helping you reach your goals and sometimes suggesting trends or cutting costs by avoiding wasted explanation time on arrival."}</div>
      <div class="wizard-options">
        ${purposeOptions.map(([value, icon, label]) => iconOptionButton(value, icon, label, "", wizardData.purpose)).join("")}
      </div>
      ${wizardData.purpose === "other" ? `<label><span>${w("otherPurpose")}</span><textarea id="wizOtherPurpose" rows="4">${wizardData.otherPurpose || ""}</textarea></label>` : ""}
    `,
    () => `
      <h3>${w("cityTitle")}</h3>
      <p>${w("cityText")}</p>
      <div class="wizard-options">
        ${["Riyadh", "Jeddah", "Khobar", "Dammam", "AlUla", "Other Saudi city"].map((city) => optionButton(city, displayCity(city), model && model.city !== city ? t("cityExtra") : "", wizardData.requestedCity)).join("")}
      </div>
      ${wizardData.requestedCity === "Other Saudi city" ? `<label><span>${lang === "ar" ? "اكتب أو ابحث عن مدينتك" : "Type or search your city"}</span><input id="wizCustomCity" value="${wizardData.customCity || ""}" placeholder="${lang === "ar" ? "مثال: أبها، المدينة، تبوك" : "Example: Abha, Madinah, Tabuk"}" /></label>` : ""}
      ${renderCityRecommendations()}
    `,
    () => {
      const activeModelId = wizardData.modelId === "agency" ? getRosterModels()[0].id : wizardData.modelId;
      const bookings = getBookings();
      return `
        <h3>${w("dateTitle")}</h3>
        <p>${w("dateText")}</p>
        <div class="availability-grid">
          ${getBookableDates().map((date) => {
            const isBooked = bookings.some((booking) => booking.modelId === activeModelId && booking.date === date && booking.status !== "refused");
            return `
              <button class="availability-day ${isBooked ? "booked" : ""} ${wizardData.date === date ? "active" : ""}" type="button" ${isBooked ? "disabled" : ""} data-date="${date}">
                <strong>${formatDate(date)}</strong>
                <span>${isBooked ? w("booked") : t("open")}</span>
              </button>
            `;
          }).join("")}
        </div>
      `;
    },
    () => `
      <h3>${w("productionTitle")}</h3>
      <p>${w("productionText")}</p>
      <div class="wizard-link-grid">
        <label><span>${t("startTime")}</span><select id="wizStartHour">${HOURS.map((hour) => `<option value="${hour}" ${String(hour) === String(wizardData.startHour) ? "selected" : ""}>${padHour(hour)}</option>`).join("")}</select></label>
        <label><span>${t("duration")}</span><select id="wizDuration">${[1, 2, 3, 4, 5, 6].map((duration) => `<option value="${duration}" ${String(duration) === String(wizardData.duration) ? "selected" : ""}>${duration} ${lang === "ar" ? "ساعات" : "hours"}</option>`).join("")}</select></label>
        ${wizardData.pricingChoice === "outfit" ? `<label><span>${quantityLabel()}</span><div class="stepper-row"><button type="button" data-step-qty="-1">-</button><input id="wizOutfitCount" type="number" min="1" max="20" value="${wizardData.outfitCount || 1}" /><button type="button" data-step-qty="1">+</button></div></label>` : ""}
        <label><span>${t("photographer")}</span><select id="wizPhotographer">${["No photographer", "Female photographer", "Male photographer", "Team photographer"].map((value) => `<option value="${value}" ${wizardData.photographer === value ? "selected" : ""}>${translatePhotographer(value)}</option>`).join("")}</select></label>
      </div>
    `,
    () => `
      <h3>${w("rulesTitle")}</h3>
      <p>${w("rulesText")}</p>
      <div class="rules-box single-rule">
        <label class="check-row"><input type="checkbox" id="wizRule1" ${wizardData.rule1 ? "checked" : ""} /><span>${t("rule1")}</span></label>
      </div>
    `,
    () => `
      <h3>${w("rulesTitle")}</h3>
      <p>${w("rulesText")}</p>
      <div class="rules-box single-rule">
        <label class="check-row"><input type="checkbox" id="wizRule2" ${wizardData.rule2 ? "checked" : ""} /><span>${t("rule2")}</span></label>
      </div>
    `,
    () => `
      <h3>${w("rulesTitle")}</h3>
      <p>${w("rulesText")}</p>
      <div class="rules-box single-rule">
        <label class="check-row"><input type="checkbox" id="wizRule3" ${wizardData.rule3 ? "checked" : ""} /><span>${t("rule3")}</span></label>
      </div>
      <label><span>${t("notes")}</span><textarea id="wizNotes" rows="4">${wizardData.notes || ""}</textarea></label>
    `,
    () => `
      <h3>${w("reviewTitle")}</h3>
      <p>${w("reviewText")}</p>
      <dl class="detail-stats">
        <div><dt>${t("brand")}</dt><dd>${wizardData.brandName || ""}</dd></div>
        <div><dt>${w("brandLinks")}</dt><dd>${wizardData.primaryLink || ""}${wizardData.secondaryLink ? `<br>${wizardData.secondaryLink}` : ""}</dd></div>
        <div><dt>${t("model")}</dt><dd>${wizardData.modelId === "agency" ? t("helpChoose") : displayModelName(modelById(wizardData.modelId))}</dd></div>
        <div><dt>${w("locationType")}</dt><dd>${locationLabel(wizardData.locationType)}</dd></div>
        <div><dt>${w("shootPurpose")}</dt><dd>${purposeLabel(wizardData.purpose, purposeOptions)}${wizardData.otherPurpose ? ` - ${wizardData.otherPurpose}` : ""}</dd></div>
        <div><dt>${t("requestedCity")}</dt><dd>${displayCity(wizardData.requestedCity)}</dd></div>
        <div><dt>${t("date")}</dt><dd>${wizardData.date ? formatDate(wizardData.date) : ""}</dd></div>
        <div><dt>${w("production")}</dt><dd>${padHour(Number(wizardData.startHour))} - ${wizardData.duration}h${wizardData.pricingChoice === "outfit" ? ` - ${wizardData.outfitCount} ${quantityLabel()}` : ""}</dd></div>
      </dl>
    `
  ];

  screen.innerHTML = steps[wizardStep]();
  bindWizardScreen();
}

function locationLabel(value) {
  return { home: w("home"), rented: w("rented"), agency: w("arranged") }[value] || "";
}

function purposeLabel(value, options) {
  return options.find((item) => item[0] === value)?.[2] || "";
}

function renderCityRecommendations() {
  const city = normalizeCity(wizardData.requestedCity);
  if (!city || city === "Other Saudi city") {
    return wizardData.customCity
      ? `<div class="wizard-note">${lang === "ar" ? "تم تسجيل طلب المدينة. سنراجع توفر مودلز في نفس المدينة أو أقرب مدينة مناسبة." : "City request saved. We will review same-city or nearest-city model availability."}</div>`
      : "";
  }
  const matches = getRosterModels().filter((model) => model.city === city);
  if (!matches.length) return "";
  return `
    <div class="wizard-note">${lang === "ar" ? "مودلز مقترحة في نفس المدينة:" : "Recommended models in the same city:"}</div>
    <div class="mini-model-row">
      ${matches.map((model) => `<button type="button" class="mini-model" data-model-id="${model.id}">${displayModelName(model)}<span>${money(modelRate(model))}</span></button>`).join("")}
    </div>
  `;
}

function bindWizardScreen() {
  const setAndRender = (key, value) => {
    wizardData[key] = value;
    renderWizard();
  };
  $("#wizBrandName")?.addEventListener("input", (event) => (wizardData.brandName = event.target.value));
  $("#wizPrimaryLink")?.addEventListener("input", (event) => (wizardData.primaryLink = event.target.value));
  $("#wizSecondaryLink")?.addEventListener("input", (event) => (wizardData.secondaryLink = event.target.value));
  $$("[data-model-id]").forEach((button) => {
    button.addEventListener("click", () => {
      wizardData.modelId = button.dataset.modelId;
      if (button.dataset.modelId !== "agency") selectedModelId = button.dataset.modelId;
      renderWizard();
    });
  });
  $$("[data-pricing]").forEach((button) => {
    button.addEventListener("click", () => {
      wizardData.pricingChoice = button.dataset.pricing;
      renderWizard();
    });
  });
  $("#wizHomeLink")?.addEventListener("input", (event) => (wizardData.homeLink = event.target.value));
  $("#wizOtherPurpose")?.addEventListener("input", (event) => (wizardData.otherPurpose = event.target.value));
  $("#wizCustomCity")?.addEventListener("input", (event) => (wizardData.customCity = event.target.value));
  $("#wizStartHour")?.addEventListener("change", (event) => (wizardData.startHour = event.target.value));
  $("#wizDuration")?.addEventListener("change", (event) => (wizardData.duration = event.target.value));
  $("#wizOutfitCount")?.addEventListener("input", (event) => (wizardData.outfitCount = event.target.value));
  $("#wizPhotographer")?.addEventListener("change", (event) => (wizardData.photographer = event.target.value));
  $("#wizNotes")?.addEventListener("input", (event) => (wizardData.notes = event.target.value));
  $$(".wizard-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (wizardStep === 3) setAndRender("locationType", button.dataset.wizardValue);
      if (wizardStep === 4) setAndRender("purpose", button.dataset.wizardValue);
      if (wizardStep === 5) setAndRender("requestedCity", button.dataset.wizardValue);
    });
  });
  $$(".availability-day:not(.booked)").forEach((button) => {
    button.addEventListener("click", () => setAndRender("date", button.dataset.date));
  });
  $$("[data-step-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      wizardData.outfitCount = String(Math.max(1, Math.min(20, Number(wizardData.outfitCount || 1) + Number(button.dataset.stepQty))));
      renderWizard();
    });
  });
  $("#wizRule1")?.addEventListener("change", (event) => (wizardData.rule1 = event.target.checked));
  $("#wizRule2")?.addEventListener("change", (event) => (wizardData.rule2 = event.target.checked));
  $("#wizRule3")?.addEventListener("change", (event) => (wizardData.rule3 = event.target.checked));
}

function validateWizardStep() {
  const message = $("#wizardMessage");
  message.textContent = "";
  if (wizardStep === 0 && !(wizardData.brandName || "").trim()) message.textContent = w("required");
  if (wizardStep === 1 && !(wizardData.primaryLink || "").trim()) message.textContent = w("required");
  if (wizardStep === 3 && !wizardData.locationType) message.textContent = w("choose");
  if (wizardStep === 3 && wizardData.locationType === "home" && !(wizardData.homeLink || "").trim()) message.textContent = w("required");
  if (wizardStep === 4 && !wizardData.purpose) message.textContent = w("choose");
  if (wizardStep === 4 && wizardData.purpose === "other" && !(wizardData.otherPurpose || "").trim()) message.textContent = w("required");
  if (wizardStep === 5 && wizardData.requestedCity === "Other Saudi city" && !(wizardData.customCity || "").trim()) message.textContent = w("required");
  if (wizardStep === 6 && !wizardData.date) message.textContent = w("chooseDate");
  if (wizardStep === 8 && !wizardData.rule1) message.textContent = w("choose");
  if (wizardStep === 9 && !wizardData.rule2) message.textContent = w("choose");
  if (wizardStep === 10 && !wizardData.rule3) message.textContent = w("choose");
  return !message.textContent;
}

function submitWizardBooking() {
  const modelId = wizardData.modelId === "agency" ? getRosterModels()[0].id : wizardData.modelId;
  const locationLink = wizardData.locationType === "home" ? wizardData.homeLink : "";
  const booking = {
    id: crypto.randomUUID(),
    username: currentUser.username,
    brandName: wizardData.brandName.trim(),
    contactNumber: "",
    brandPrimaryLink: wizardData.primaryLink.trim(),
    brandSecondaryLink: (wizardData.secondaryLink || "").trim(),
    modelId,
    modelPreference: wizardData.modelId,
    pricingChoice: wizardData.pricingChoice,
    requestedCity: wizardData.requestedCity === "Other Saudi city" ? wizardData.customCity : wizardData.requestedCity,
    locationType: wizardData.locationType,
    purpose: wizardData.purpose,
    otherPurpose: wizardData.otherPurpose || "",
    outfitCount: Number(wizardData.outfitCount || 1),
    campaignTitle: wizardData.purpose === "other" ? wizardData.otherPurpose : purposeLabel(wizardData.purpose, getPurposeOptions()), /*
      ["makeup", lang === "ar" ? "فيديوهات مكياج" : "Makeup videos"],
      ["fashion", lang === "ar" ? "أزياء / عبايات" : "Fashion / abayas"],
      ["perfume", lang === "ar" ? "عطور / منتجات فاخرة" : "Perfume / luxury products"],
      ["skincare", lang === "ar" ? "عناية بالبشرة" : "Skincare"],
      ["jewelry", lang === "ar" ? "مجوهرات وإكسسوارات" : "Jewelry and accessories"],
      ["lifestyle", lang === "ar" ? "مطعم أو لايف ستايل" : "Restaurant or lifestyle"],
      ["event", lang === "ar" ? "فعالية / افتتاح" : "Event / opening"],
      ["other", wizardData.otherPurpose || (lang === "ar" ? "أخرى" : "Other")]
    ]),*/
    date: wizardData.date,
    startHour: Number(wizardData.startHour),
    duration: Number(wizardData.duration),
    locationLink,
    photographer: wizardData.photographer,
    notes: wizardData.notes || "",
    status: "pending",
    createdAt: new Date().toISOString()
  };
  if (hasConflict(booking)) {
    $("#wizardMessage").textContent = t("bookingConflict");
    return;
  }
  setBookings([...getBookings(), booking]);
  Object.keys(wizardData).forEach((key) => delete wizardData[key]);
  wizardStep = 0;
  renderAll();
  switchView("brand");
}

function renderAll() {
  renderAuth();
  renderStats();
  renderModels();
  renderBrandRequests();
  renderOwnerRequests();
  renderModelApplications();
  renderSchedule();
  renderMedia();
  updatePricePreview();
  renderWizard();
  renderModelProfile(activeProfileModelId);
}

function setupEvents() {
  $$("[data-view-target]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.viewTarget)));

  $("#accountPanelToggle").addEventListener("click", () => {
    $("#accountPanel").classList.toggle("hidden");
    renderAccountPanel();
  });

  $("#accountPanelClose").addEventListener("click", () => {
    $("#accountPanel").classList.add("hidden");
  });

  $("#languageToggle").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("raghad.lang", lang);
    applyTranslations();
    renderAll();
  });

  $("#wizardBack").addEventListener("click", () => {
    wizardStep = Math.max(0, wizardStep - 1);
    renderWizard();
  });

  $("#wizardNext").addEventListener("click", () => {
    if (!validateWizardStep()) return;
    if (wizardStep >= 11) {
      submitWizardBooking();
      return;
    }
    wizardStep += 1;
    renderWizard();
  });

  $$(".segment").forEach((segment) => {
    segment.addEventListener("click", () => {
      authMode = segment.dataset.auth;
      $$(".segment").forEach((item) => item.classList.toggle("active", item === segment));
      $("#authSubmit").textContent = authMode === "login" ? t("login") : t("signup");
      $("#roleChoice").classList.toggle("hidden", authMode !== "signup");
      $("#modelSignupFields").classList.toggle("hidden", authMode !== "signup" || accountRole !== "model");
      setMessage("#authMessage", "");
    });
  });

  $$("input[name='accountRole']").forEach((radio) => {
    radio.addEventListener("change", () => {
      accountRole = radio.value;
      $$(".role-card").forEach((card) => card.classList.toggle("active", $("input", card).checked));
      $("#modelSignupFields").classList.toggle("hidden", authMode !== "signup" || accountRole !== "model");
    });
  });

  $("#authForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = $("#username").value.trim();
    const password = $("#password").value;
    const users = getUsers();
    const found = users.find((user) => user.username.toLowerCase() === username.toLowerCase());

    if (authMode === "signup") {
      if (found) {
        setMessage("#authMessage", t("usernameExists"));
        return;
      }
      const user = { username, password, role: accountRole, status: accountRole === "model" ? "pending" : "active" };
      users.push(user);
      setUsers(users);
      if (accountRole === "model") {
        setModelApplications([
          ...getModelApplications(),
          {
            id: crypto.randomUUID(),
            username,
            city: $("#modelCity").value,
            portfolioLink: $("#portfolioLink").value.trim(),
            bio: $("#modelBio").value.trim(),
            status: "pending",
            createdAt: new Date().toISOString()
          }
        ]);
        setMessage("#authMessage", t("modelApplicationSent"));
        return;
      }
    } else if (!found || found.password !== password) {
      setMessage("#authMessage", t("wrongLogin"));
      return;
    } else if (found.role === "model" && found.status !== "active") {
      setMessage("#authMessage", t("modelWaiting"));
      return;
    }

    const user = authMode === "signup" ? users.find((item) => item.username === username) : found;
    currentUser = { username: user.username, role: user.role || "brand" };
    writeStore(STORE.currentUser, currentUser);
    writeStore(STORE.remember, $("#rememberMe").checked);
    renderAll();
    switchView("brand");
  });

  $("#signOutButton").addEventListener("click", () => {
    localStorage.removeItem(STORE.currentUser);
    localStorage.removeItem(STORE.owner);
    currentUser = null;
    ownerAuthed = false;
    renderAll();
    switchView("brand");
  });

  ["modelSelect", "pricingChoice", "requestedCity", "duration", "outfitCount"].forEach((id) => {
    $(`#${id}`).addEventListener("change", updatePricePreview);
    $(`#${id}`).addEventListener("input", updatePricePreview);
  });

  $("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (currentUser?.role !== "brand") return;

    const modelValue = $("#modelSelect").value;
    const modelId = modelValue === "agency" ? getRosterModels()[0].id : modelValue;
    const booking = {
      id: crypto.randomUUID(),
      username: currentUser.username,
      brandName: $("#brandName").value.trim(),
      contactNumber: $("#contactNumber").value.trim(),
      modelId,
      modelPreference: modelValue,
      pricingChoice: $("#pricingChoice").value,
      requestedCity: $("#requestedCity").value,
      outfitCount: Number($("#outfitCount").value || 1),
      campaignTitle: $("#campaignTitle").value.trim(),
      date: $("#bookingDate").value,
      startHour: Number($("#startTime").value),
      duration: Number($("#duration").value),
      locationLink: $("#locationLink").value.trim(),
      photographer: $("#photographer").value,
      notes: $("#bookingNotes").value.trim(),
      status: "pending",
      createdAt: new Date().toISOString()
    };

    if (hasConflict(booking)) {
      setMessage("#bookingMessage", t("bookingConflict"));
      return;
    }

    setBookings([...getBookings(), booking]);
    event.target.reset();
    renderTimeOptions();
    $("#modelSelect").value = selectedModelId;
    updatePricePreview();
    setMessage("#bookingMessage", t("bookingSent"));
    renderAll();
    switchView("schedule");
  });

  $("#ownerLoginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if ($("#ownerPassword").value !== OWNER_PASSWORD) {
      setMessage("#ownerMessage", t("adminWrong"));
      return;
    }
    writeStore(STORE.owner, true);
    ownerAuthed = true;
    renderAll();
    switchView("owner");
  });

  $("#mediaForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = {
      id: crypto.randomUUID(),
      platform: $("#mediaPlatform").value,
      url: $("#mediaUrl").value.trim()
    };
    setMedia([...getMedia().filter((media) => media.url), item]);
    event.target.reset();
    setMessage("#mediaMessage", t("mediaAdded"));
    renderAll();
  });

  $("#clearModelButton").addEventListener("click", () => {
    selectedModelId = getRosterModels()[0].id;
    $("#modelSelect").value = selectedModelId;
    updatePricePreview();
  });
}

function boot() {
  if (!readStore(STORE.remember, true)) localStorage.removeItem(STORE.currentUser);
  applyTranslations();
  renderTimeOptions();
  setupEvents();
  renderAll();
}

boot();
