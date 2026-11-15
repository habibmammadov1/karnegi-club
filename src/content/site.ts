// Saytın bütün məzmunu burada saxlanılır.
// Növbəti mərhələdə bu məlumatlar PostgreSQL-ə köçürülüb admin paneldən idarə olunacaq.

export const site = {
  name: "Karnegi Klub",
  legalName: "Karnegi Klub Treninq Mərkəzi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://karnegi.az",
  description:
    "2011-ci ildən bəri natiqlik, ünsiyyət, satış və şəxsi inkişaf təlimləri. Auditoriya qarşısında sərbəst danışmağı Dr. Nəcəf Allahverdiyevlə öyrənin.",
  founded: 2011,
  phones: ["+994 55 444 14 00", "+994 77 444 14 00"],
  email: "info@karnegi.az",
  address: "Bakı ş., Murtuza Muxtarov küç. 53",
  social: {
    instagram: "https://www.instagram.com/karnegi_klub/",
    facebook: "https://www.facebook.com/KarnegiKlub",
    youtube: "https://www.youtube.com/@dr.ncfallahverdiyev6665",
    tiktok: "https://www.tiktok.com/@dr.nacafallahverdiyev",
  },
};

// Əsas menyu (karnegi.az saytındakı struktur)
// children: alt menyu qrupları. title/href verilməyən tək qrup sadə siyahı kimi göstərilir.
export type NavItem = { label: string; href: string; children?: { title?: string; href?: string; links: { label: string; href: string }[] }[] };

export const about = [
  "“Karnegi Klub” Treninq Mərkəzi 2011-ci ildə Dr. Nəcəf Allahverdiyev tərəfindən təsis edilib. Mərkəzdə fərdi, qrup və korporativ formatlarda “Xarizmatik Natiq”, “Ünsiyyət bacarıqları”, “Effektiv satış”, “Zamanın idarə olunması”, “Mind Mapping”, “Psixoloji aykido”, “İdeyalar generatoru”, “Kreativ düşüncə”, “Motivasiya” və digər mövzularda treninqlər keçirilir. Bu treninqlərdə 10 000-dən çox insan iştirak edib.",
  "Korporativ sektorda müasir və innovativ tədris üslublarını tətbiq edirik. Məqsəd işçilərin motivasiyasını artırmaq, komanda əhval-ruhiyyəsini yüksəltmək, ünsiyyət, təqdimat və satış bacarıqlarını gücləndirməkdir. Nəticədə müştəri məmnuniyyəti və təşkilatın gəlirləri artır.",
  "Mərkəzdə həmçinin fərdi və anonim şəkildə çıxış və təqdimatlara hazırlıq, biznes və layf kouç sessiyaları keçirilir.",
];

// Ana səhifədə header-dən sonra avtomatik oxunan video (Instagram: karnegi_akademiya)
export const heroVideo = {
  src: "/video/tanitim.mp4",
  poster: "/video/tanitim.jpg",
  label: "Dr. Nəcəf Allahverdiyevin video müraciəti",
  source: "https://www.instagram.com/p/CnZRA8Gr1Pt/",
};

export const photos = {
  portrait: "/images/necef-portret.jpg",
  heart: "/images/necef-urek.jpg",
  stage: "/images/necef-sehne.jpg",
  forum: "/images/necef-forum.jpg",
};

export const gallery = [
  { src: "/images/qalereya/1.jpg", alt: "Dolu zalda keçirilən təlim" },
  { src: "/images/qalereya/2.jpg", alt: "Uğur Forumu iştirakçılarının birgə şəkli" },
  { src: "/images/qalereya/3.jpg", alt: "Təlimçi səhnədə, arxada iştirakçılar" },
  { src: "/images/qalereya/4.jpg", alt: "İştirakçılar çıxışı dinləyir" },
  { src: "/images/qalereya/5.jpg", alt: "Konfrans zalında masterklass" },
  { src: "/images/qalereya/6.jpg", alt: "Təlimçi iştirakçıların arasında" },
  { src: "/images/qalereya/7.jpg", alt: "Səhnədən zalın görünüşü" },
  { src: "/images/qalereya/8.jpg", alt: "İştirakçı ilə praktiki tapşırıq" },
];

export const corporate = [
  { title: "Ünsiyyət və təqdimat", text: "İclaslarda, müştəri qarşısında və səhnədə aydın, inamlı çıxış." },
  { title: "Effektiv və psixoloji satış", text: "Müştərini dinləmək, etirazlarla işləmək və razılaşmanı bağlamaq." },
  { title: "Motivasiya və komanda ruhu", text: "Kollektivdə xoş ab-hava, birgə işləmək vərdişi və daxili motivasiya." },
  { title: "Fərdi hazırlıq", text: "Rəhbərlər üçün çıxışa fərdi və anonim hazırlıq, kouç sessiyaları." },
];

export const facts = [
  { value: "2011", label: "ildən fəaliyyətdəyik" },
  { value: "10 000+", label: "insan təlimlərimizdə iştirak edib" },
  { value: "2 000", label: "təlim və masterklass keçirilib" },
];

export type Program = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  duration?: string;
  audience: string[];
  goals: string[];
  outline?: { title: string; points: string[] }[];
};

export const programs: Program[] = [
  {
    slug: "xarizmatik-natiq",
    title: "Xarizmatik Natiq",
    short: "Auditoriya qarşısında sərbəst, inamlı və təsirli çıxış.",
    lead:
      "Kommunikasiya, ünsiyyət, təqdimat və natiqlik treninqi. Fikrinizi rahat ifadə etməyi, iclas və konfranslarda çıxış etməyi və həyəcanı idarə etməyi öyrənirsiniz.",
    duration: "12 saat · 4 dərs",
    audience: [
      "Toplum önündə çıxış edənlər",
      "Təqdimat keçirənlər və rəhbər işçilər",
      "Satış menecerləri və sahibkarlar",
      "Karyerasında irəliləmək istəyənlər",
      "Qorxularına “yox” demək istəyən hər kəs",
    ],
    goals: [
      "Fikirlərinizi rahat ifadə etmək, toplantı və konfranslarda çıxış etmək",
      "Effektiv çıxış texnikalarını mənimsəmək",
      "Təlimdən sonra da özünü inkişaf etdirmə vərdişi qazanmaq",
    ],
    outline: [
      {
        title: "Ünsiyyətin əsasları",
        points: ["Ünsiyyət kanalları və “Mercedes” prinsipi", "Bədən dili, səs, məna üçbucağı", "Motivasiya və şüuraltının rolu", "Özünütəqdimat"],
      },
      {
        title: "Qarşılıqlı əlaqə",
        points: ["Söz improvizasiyası", "Qarşılıqlı əlaqə prinsipləri", "Sendviç və beş-ulduz üslubu", "İmprovizə və əlaqənin birgə tətbiqi"],
      },
      {
        title: "Nitqin enerjisi",
        points: ["Nitqin energetikası və səs tonu", "Yüksək və aşağı enerji səviyyələri", "Enerji ilə liderliyi ələ almaq"],
      },
      {
        title: "Nitqin parametrləri",
        points: ["Sürət, pauza, diksiya", "Parazit sözlərdən qurtulmaq", "Duruş, jestlər, göz kontaktı"],
      },
    ],
  },
  {
    slug: "beyin-xeritesi",
    title: "Beyin Xəritəsi",
    short: "Mind Map üsulu ilə aydın düşünmək və tez yadda saxlamaq.",
    lead:
      "Effektiv düşüncə treninqi. Məlumatı vizual xəritəyə çevirməyi, fikirləri strukturlaşdırmağı və planlamanı sadələşdirməyi öyrənirsiniz.",
    audience: ["Tələbələr və müəllimlər", "Layihə rəhbərləri", "Çox məlumatla işləyənlər"],
    goals: ["Fikirləri bir səhifədə strukturlaşdırmaq", "Yadda saxlamanı gücləndirmək", "Planlama və qərar qəbulunu sürətləndirmək"],
  },
  {
    slug: "ideyalar-generatoru",
    title: "İdeyalar Generatoru",
    short: "Kreativ düşüncə və yeni ideya yaratmaq texnikaları.",
    lead:
      "Kreativliyi təsadüfdən sistemə çevirən treninq. Komanda ilə və tək işləyərkən ideya yaratmağın praktik üsullarını sınayırsınız.",
    audience: ["Marketinq və məhsul komandaları", "Sahibkarlar", "Yaradıcı sahədə çalışanlar"],
    goals: ["Ideya yaratma texnikalarını mənimsəmək", "Stereotip düşüncədən çıxmaq", "Ideyaları seçmək və inkişaf etdirmək"],
  },
  {
    slug: "time-management",
    title: "Time & Life Management",
    short: "Vaxtı və həyat prioritetlərini idarə etmək.",
    lead:
      "Gündəlik işlərdə itməmək, vacib olanı təcili olandan ayırmaq və məqsədlərə ardıcıl irəliləmək üçün praktik sistem.",
    audience: ["Rəhbərlər və menecerlər", "Sahibkarlar", "İş və həyat balansını qurmaq istəyənlər"],
    goals: ["Prioritetləri müəyyən etmək", "Vaxt itkilərini aradan qaldırmaq", "Uzunmüddətli məqsədlər qurmaq"],
  },
  {
    slug: "effektiv-satis",
    title: "Effektiv Satış",
    short: "Müştəri ilə ünsiyyət və psixoloji satış texnikaları.",
    lead:
      "Satışı danışıqdan münasibətə çevirən treninq. Müştərini dinləməyi, etirazlarla işləməyi və razılaşmanı bağlamağı öyrənirsiniz.",
    audience: ["Satış menecerləri", "Müştəri xidməti komandaları", "Sahibkarlar"],
    goals: ["Müştəri ehtiyacını düzgün müəyyən etmək", "Etirazlarla işləmək", "Satışı inamla bağlamaq"],
  },
  {
    slug: "stress-management",
    title: "Stressin idarə edilməsi",
    short: "Gərginlikli anlarda sakit qalmaq və aydın qərar vermək.",
    lead:
      "Stressin səbəblərini tanımaq, emosiyaları idarə etmək və gündəlik həyatda dayanıqlılıq qazanmaq üçün praktik treninq.",
    audience: ["Yüksək tempdə çalışanlar", "Rəhbər işçilər", "Emosional yükü azaltmaq istəyənlər"],
    goals: ["Stress siqnallarını erkən tanımaq", "Emosiyaları idarə etmək", "Bərpa vərdişləri qurmaq"],
  },
];

export const otherTopics = [
  "Çıxışa fərdi hazırlıq",
  "Psixoloji satış",
  "Emosional intellekt (EQ)",
  "Psixoloji aykido",
  "Yeniyetmələr üçün SuperTreninq",
  "Uşaq tərbiyəsi",
  "Ailədaxili münasibətlər",
  "Tibbi və dental marketinq",
  "Biznes və life kouç sessiyaları",
];

export const trainer = {
  name: "Dr. Nəcəf Allahverdiyev",
  role: "Karnegi Klubun rəhbəri, biznes-trener, kouç, NLP-Master",
  credentials: [
    "“Moskva Ritorika və Natiqlik Bacarığı Universiteti”nin aparıcı təlimçisi",
    "“Beynəlxalq Trenerlər Assosiasiyası”nın üzvü",
    "Moskvada keçirilən “Beynəlxalq Oratorlar Çempionatı”nın mükafatçısı",
  ],
  numbers: [
    { value: "2 000", label: "təlim və masterklass" },
    { value: "6 000", label: "saat" },
    { value: "30 000", label: "iştirakçı" },
  ],
};

export const clients = [
  "North West Construction",
  "Lexus",
  "Red Bull",
  "Toyota",
  "Caspel",
  "ASAN Xidmət",
  "Xarici İşlər Nazirliyi",
];

// Müştəri loqoları (karnegi.az saytından). name boşdursa, loqo adsız göstərilir.
export const clientLogos = [
  { src: "/images/musteriler/01.jpg", name: "Podium" },
  { src: "/images/musteriler/02.jpg", name: "Lexus" },
  { src: "/images/musteriler/03.jpg", name: "Caspel" },
  { src: "/images/musteriler/04.jpg", name: "189 Taxi" },
  { src: "/images/musteriler/05.jpg", name: "" },
  { src: "/images/musteriler/06.jpg", name: "SAT Group" },
  { src: "/images/musteriler/07.jpg", name: "Panda School" },
  { src: "/images/musteriler/08.jpg", name: "İrəli İctimai Birliyi" },
  { src: "/images/musteriler/09.jpg", name: "BOT Bioloji Təbabət" },
  { src: "/images/musteriler/10.jpg", name: "Caspident" },
  { src: "/images/musteriler/11.jpg", name: "Tiens" },
  { src: "/images/musteriler/12.jpg", name: "" },
  { src: "/images/musteriler/13.jpg", name: "Progress Academy" },
  { src: "/images/musteriler/14.jpg", name: "Red Bull" },
  { src: "/images/musteriler/15.jpg", name: "Toyota" },
  { src: "/images/musteriler/16.jpg", name: "Təmiz Dünya" },
  { src: "/images/musteriler/17.jpg", name: "Daxili İşlər Nazirliyi" },
  { src: "/images/musteriler/18.jpg", name: "" },
];

export const reviews = [
  {
    text: "Təlim mənə auditoriya qarşısında sərbəst çıxış etməyin sirlərini öyrətdi. Bu təlimdən sonra natiqlik yarışmasında qalib oldum.",
    name: "Nərgiz Əliyeva",
    role: "Maliyyəçi",
  },
  {
    text: "Nəcəf müəllimin təlimlərini SEO kimi təsəvvür edirəm: sayt kimi insanın da irəli getməsi üçün optimizasiya lazımdır.",
    name: "Elnur Xəlilsoy",
    role: "Hiremood, təsisçi",
  },
  {
    text: "Komplekslərimlə mübarizədə və özümə güvənin artmasında böyük rol oynadı. Təlimlər həm də çox əyləncəli idi.",
    name: "Vüsal Əsədi",
    role: "İstanbul Universiteti, tələbə",
  },
  {
    text: "Qorxularımızın nə qədər boş olduğunu burada öyrəndik.",
    name: "Səməndər Səfərli",
    role: "İştirakçı",
  },
  {
    text: "Bitməsini heç istəmədiyim nadir təlimlərdən oldu. Burada dəyərli dostlar da qazandıq.",
    name: "Suma Bağırova",
    role: "İştirakçı",
  },
  {
    text: "Auditoriya qarşısında həyəcan və utancaqlıq azaldı, özümə inam artdı.",
    name: "Məzun",
    role: "Erasmus University Rotterdam, tələbə",
  },
];

// Yuxarıdakı “story” zolağı. Hər slayda sonradan şəkil və ya video əlavə etmək olar (image / video sahəsi).
export type StorySlide = {
  kicker?: string;
  title: string;
  body?: string;
  image?: string;
  cta?: { label: string; href: string };
};

// cover: dairədə görünən şəkil (yoxdursa "mark" mətni göstərilir)
export type Story = { id: string; label: string; mark: string; cover?: string; slides: StorySlide[] };

export const stories: Story[] = [
  {
    id: "natiq",
    label: "Xarizmatik Natiq",
    mark: "Nq",
    slides: [
      { kicker: "Yeni qrup", title: "Xarizmatik Natiq", body: "12 saat, 4 dərs. Auditoriya qarşısında sərbəst danışmağı öyrənin.", image: "/images/necef-forum.jpg" },
      { kicker: "Format", title: "80% təcrübə", body: "Hər iştirakçı qrup önündə, cütlükdə və kiçik qruplarda dəfələrlə çıxış edir." },
      { title: "Çıxış zamanı qorxuya yox", cta: { label: "Təlimə yazıl", href: "/elaqe#muraciet" } },
    ],
  },
  {
    id: "reyler",
    label: "Rəylər",
    mark: "“ ”",
    slides: [
      { kicker: "Nərgiz Əliyeva", title: "Təlimdən sonra natiqlik yarışmasında qalib oldum." },
      { kicker: "Səməndər Səfərli", title: "Qorxularımızın nə qədər boş olduğunu öyrəndik." },
      { kicker: "Suma Bağırova", title: "Bitməsini heç istəmədiyim nadir təlimlərdən oldu." },
    ],
  },
  {
    id: "reqemler",
    label: "Rəqəmlər",
    mark: "10k",
    slides: [
      { kicker: "2011-dən bəri", title: "10 000+ iştirakçı", body: "Fərdi, qrup və korporativ formatlarda." },
      { kicker: "Dr. Nəcəf Allahverdiyev", title: "30 000 iştirakçı", body: "2 000 təlim və masterklass, 6 000 saat." },
    ],
  },
  {
    id: "korporativ",
    label: "Korporativ",
    mark: "B2B",
    slides: [
      { kicker: "Korporativ təlimlər", title: "Komandanız üçün", body: "Ünsiyyət, təqdimat və satış bacarıqları. Motivasiya və komanda ruhu." },
      { kicker: "Bizə etibar edənlər", title: "Toyota, Lexus, Red Bull, ASAN Xidmət", body: "və onlarla digər şirkət və təşkilat." },
    ],
  },
  {
    id: "telimci",
    label: "Təlimçi",
    mark: "NA",
    cover: "/images/necef-urek.jpg",
    slides: [
      { kicker: "Təlimçi", title: "Dr. Nəcəf Allahverdiyev", body: "Biznes-trener, kouç, NLP-Master. Beynəlxalq Oratorlar Çempionatının mükafatçısı.", image: "/images/necef-portret.jpg" },
      { kicker: "Səhnədə", title: "2 000 təlim və masterklass", body: "6 000 saat, 30 000 iştirakçı.", image: "/images/necef-sehne.jpg", cta: { label: "Haqqımızda", href: "/haqqimizda" } },
    ],
  },
  {
    id: "youtube",
    label: "Video",
    mark: "▶",
    slides: [
      { kicker: "YouTube", title: "Pulsuz video dərslər", body: "Natiqlik və ünsiyyət haqqında qısa videolar.", cta: { label: "Kanala keç", href: "https://www.youtube.com/@dr.ncfallahverdiyev6665" } },
    ],
  },
  {
    id: "elaqe",
    label: "Qeydiyyat",
    mark: "+",
    slides: [
      { kicker: "Sual var?", title: "+994 55 444 14 00", body: "Zəng edin və ya müraciət formunu doldurun.", cta: { label: "Müraciət et", href: "/elaqe#muraciet" } },
    ],
  },
];

export const nav: NavItem[] = [
  { label: "Əsas səhifə", href: "/" },
  {
    label: "Təlimlər",
    href: "/telimler",
    children: [
      {
        title: "Açıq təlimlər",
        href: "/telimler",
        links: [
          ...programs.map((p) => ({ label: p.title, href: `/telimler/${p.slug}` })),
          { label: "Təlim haqda fikirlər", href: "/fikirler" },
        ],
      },
      { title: "Korporativ təlimlər", href: "/korporativ", links: [] },
    ],
  },
  { label: "Tədbirlər", href: "/tedbirler" },
  {
    label: "Haqqımızda",
    href: "/haqqimizda",
    children: [
      {
        links: [
          { label: "Qalereya", href: "/qalereya" },
          { label: "VideoBloq", href: "/videobloq" },
        ],
      },
    ],
  },
  { label: "Əlaqə", href: "/elaqe" },
];
