export interface SolutionDetail {
  slug: string;
  title_hu: string;
  title_en: string;
  hero_hu: string;
  hero_en: string;
  sub_hu: string;
  sub_en: string;
  insights_hu: { title: string; desc: string }[];
  insights_en: { title: string; desc: string }[];
  process_hu: { step: string; title: string; desc: string }[];
  process_en: { step: string; title: string; desc: string }[];
  foresight_hu: { title: string; desc: string }[];
  foresight_en: { title: string; desc: string }[];
  balance_hu: { title: string; desc: string };
  balance_en: { title: string; desc: string };
  relatedDivisions: Array<"sironic" | "siroved" | "sirosoft" | "sirovill">;
  relatedSolutions: string[];
}

export const SOLUTIONS_DATA: Record<string, SolutionDetail> = {
  "uj-telephely": {
    slug: "uj-telephely",
    title_hu: "Új telephely kivitelezése és üzemeltetése",
    title_en: "New Site Infrastructure Design & Execution",
    hero_hu: "Új telephely? Az infrastruktúrát egy rendszerként tervezzük meg.",
    hero_en: "New site? We design the entire infrastructure as one integrated system.",
    sub_hu: "Hálózat, Wi-Fi, kamera, riasztó, beléptetés, villamos kiállások és informatikai környezet összehangoltan.",
    sub_en: "Coordinated network, Wi-Fi, CCTV, alarm, access control, electrical outlets, and IT environment.",
    insights_hu: [
      { title: "Szakági szétaprózódás", desc: "Ha a villanyszerelő, a rendszergazda és a biztonságtechnikus nem egyeztet, a csövezés és a rack méretezése későn derül ki." },
      { title: "Későbbi bővíthetőség hiánya", desc: "Előrelátó nyomvonal-tervezés nélkül a telephely bővítésekor falbontásra vagy drága utólagos kábelezésre lesz szükség." },
      { title: "Túlbonyolított üzemeltetés", desc: "Eltérő szállítók esetén hiba esetén egymásra mutogatás indul a garanciális felelősség helyett." }
    ],
    insights_en: [
      { title: "Discipline Fragmentation", desc: "If electrician, network admin, and security provider don't align, cable paths and rack sizing clash." },
      { title: "Lack of Scalability", desc: "Without forward-looking pathway design, future expansion requires expensive re-cabling or wall demolition." },
      { title: "Overcomplicated Operations", desc: "Multiple isolated vendors lead to blame-shifting during downtime instead of rapid resolution." }
    ],
    process_hu: [
      { step: "01", title: "Igényfelmérés & helyszín", desc: "A telephelyi adottságok, munkaállomások, kapuk és csarnokok felmérése." },
      { step: "02", title: "Összehangolt terv", desc: "Erős- és gyengeáramú nyomvonalak, rack helyiség és AP lefedettség közös rajza." },
      { step: "03", title: "Szakági kivitelezés", desc: "Kábelezés, elosztóépítés, kamera és beléptető végpontok szerelése." },
      { step: "04", title: "Konfiguráció & mérés", desc: "Wi-Fi hőtérkép-mérés, hálózati VLAN-ok és biztonsági szabályok beállítása." },
      { step: "05", title: "Dokumentált átadás & support", desc: "Nyomvonali rajzok átadása és opcionális üzemeltetési támogatás." }
    ],
    process_en: [
      { step: "01", title: "Needs Assessment", desc: "Surveying physical site bounds, workstations, gates, and building spaces." },
      { step: "02", title: "Integrated Blueprint", desc: "Unified plan for high/low voltage cable paths, rack rooms, and Wi-Fi AP placement." },
      { step: "03", title: "Multi-Disciplinary Execution", desc: "Cabling, panel build, CCTV and access control hardware installation." },
      { step: "04", title: "Configuration & Testing", desc: "Wi-Fi heatmap validation, VLAN setup, and security access policy check." },
      { step: "05", title: "Handover & Ongoing Support", desc: "Full cable schematics handed over with long-term maintenance options." }
    ],
    foresight_hu: [
      { title: "Központi rack helyiség méretezése", desc: "Megfelelő hűtés, UPS szünetmentes táplálás és bővítő hely a szerverszekrényben." },
      { title: "Kültéri lefedettség és kapuk", desc: "Kaputelefon, rendszámfelismerő kamera és parkolói Wi-Fi előkészítése." },
      { title: "Tartalék nyomvonalak", desc: "Legalább 30% tartalék kapacitás a kábelcsatornákban az újabb üzemcsarnokokhoz." },
      { title: "Szigorú beléptetés-kezelés", desc: "Zónázott kártyás/biometrikus átlépés az iroda és a raktár határán." }
    ],
    foresight_en: [
      { title: "Central Rack Room Sizing", desc: "Ensure active cooling, UPS battery backup, and spare rack unit space." },
      { title: "Perimeter & Gate Systems", desc: "Prepare wiring for LPR camera, intercom, and outdoor parking Wi-Fi." },
      { title: "Spare Ducting Pathways", desc: "Reserve at least 30% capacity in cable trays for future hall extensions." },
      { title: "Zoned Access Control", desc: "Configure card/biometric barriers between admin offices and production areas." }
    ],
    balance_hu: {
      title: "Új építés vagy meglévő telephely korszerűsítése?",
      desc: "Teljesen új zöldmezős beruházást és meglévő, működő telephelyek fázisolt bővítését vagy hibás hálózatának felújítását is lekövetjük a termelés fennakadása nélkül."
    },
    balance_en: {
      title: "Greenfield Construction or Modernising Existing Sites?",
      desc: "We deliver full greenfield setups as well as phased expansions or network modernisations on operational sites without causing production downtime."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-csarnok", "gyartotelephely", "raktar-logisztika"]
  },
  "uj-iroda": {
    slug: "uj-iroda",
    title_hu: "Új irodai infrastruktúra kialakítása",
    title_en: "New Office Infrastructure Setup",
    hero_hu: "Új iroda, ahol a technika nem akadályozza a munkát.",
    hero_en: "New office where tech never slows down your team.",
    sub_hu: "Hálózat, Wi-Fi, tárgyalók, hozzáférés, biztonság és munkahelyi IT összehangolt kialakítása.",
    sub_en: "Coordinated networks, Wi-Fi, conference rooms, access control, security, and workplace IT.",
    insights_hu: [
      { title: "Zavaros Wi-Fi lefedettség", desc: "A falak és tárgyalóüvegek árnyékolása miatt sok irodában leszakad a videóhívás." },
      { title: "Asztali kábelkaosz", desc: "Megfelelő padlódoboz és IT-kiállás hiányában a munkaállomásokon lengőkábelek futnak." },
      { title: "Tárgyalók nehézkes használata", desc: "Bonyolult AV és hálózati csatlakozók miatt a megbeszélések 10 perces csúszással indulnak." }
    ],
    insights_en: [
      { title: "Unreliable Wi-Fi", desc: "Concrete walls and glass meeting rooms cause dropped video calls without proper AP planning." },
      { title: "Desk Cable Chaos", desc: "Lack of floor box planning leads to exposed Ethernet and power cables across the office." },
      { title: "Complicated Meeting Rooms", desc: "Incompatible AV and network ports delay meeting starts by 10 minutes every time." }
    ],
    process_hu: [
      { step: "01", title: "Irodai alaprajz & kapacitás", desc: "Az asztalkiosztás, tárgyalókapacitás és sávszélesség-igény meghatározása." },
      { step: "02", title: "Kábelezes & Wi-Fi tervezés", desc: "Gigabites UTP/optika és zavarmentes Wi-Fi AP pozíciók kijelölése." },
      { step: "03", title: "Rack & villamos szerelés", desc: "Csendes irodai rack szekrény, szünetmentes táp és padlódobozok építése." },
      { step: "04", title: "Beléptetés & kamerák", desc: "Kártyás irodai beléptető és recepciói kiskapu/kamera integráció." },
      { step: "05", title: "Beüzemelés & átadás", desc: "Microsoft 365, nyomtatók és vendég Wi-Fi hálózatok élesítése." }
    ],
    process_en: [
      { step: "01", title: "Office Layout Survey", desc: "Defining desk layouts, meeting room count, and bandwidth demand." },
      { step: "02", title: "Cabling & Wi-Fi Simulation", desc: "Mapping Gigabit Ethernet drops and interference-free Wi-Fi AP positions." },
      { step: "03", title: "Rack & Electrical Work", desc: "Installing silent rack enclosures, UPS systems, and floor boxes." },
      { step: "04", title: "Access Control & CCTV", desc: "Implementing RFID card entry and reception security cameras." },
      { step: "05", title: "Commissioning & Handover", desc: "Deploying Microsoft 365, network printers, and guest Wi-Fi networks." }
    ],
    foresight_hu: [
      { title: "Vendég Wi-Fi szeparáció", desc: "VLAN szeparálással elválasztott belső vállalati és látogatói hálózat." },
      { title: "Tárgyalói hibrid eszközök", desc: "Egyszerű kijelző és vezeték nélküli képernyőmegosztó kiállások." },
      { title: "Munkaállomás sűrűség", desc: "Asztalonként 2-4 Cat6A adatcsatlakozó és tiszta villamos kiállás." },
      { title: "Szerverfülke zajszigetelés", desc: "Informatikai szekrény hűtése és zajcsillapítása az irodatér mellett." }
    ],
    foresight_en: [
      { title: "Guest Wi-Fi Isolation", desc: "VLAN-separated corporate internal and guest networks for maximum security." },
      { title: "Hybrid Meeting Rooms", desc: "Clean TV wall mounts and wireless screen share network ports." },
      { title: "Workstation Outlet Density", desc: "2-4 Cat6A data drops and clean AC outlets per desk position." },
      { title: "Rack Enclosure Acoustic Isolation", desc: "Ensuring silent operation and proper airflow for racks near work areas." }
    ],
    balance_hu: {
      title: "Új iroda nyitása vagy a meglévő irodaterület átrendezése?",
      desc: "Ugyanolyan hatékonysággal tervezzük meg az új bérlemény teljes hálózatát, mint a meglévő iroda bővülés miatti átkábelezését és modernizálását."
    },
    balance_en: {
      title: "Opening New Offices or Reconfiguring Existing Workspace?",
      desc: "We handle new leased space setups with the same precision as re-cabling and upgrading operational offices during team expansions."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["cegkoltozes", "uzletnyitas", "rendelo"]
  },
  "uj-csarnok": {
    slug: "uj-csarnok",
    title_hu: "Ipari csarnok infrastruktúra kivitelezése",
    title_en: "Industrial Hall Infrastructure Execution",
    hero_hu: "Új csarnokhoz ipari szemléletű infrastruktúra.",
    hero_en: "Industrial-grade infrastructure for new halls.",
    sub_hu: "Optikai és réz hálózat, ipari Wi-Fi, kamera, beléptetés és villamos infrastruktúra.",
    sub_en: "Fiber optic backbone, industrial Wi-Fi, CCTV, access control, and electrical infrastructure.",
    insights_hu: [
      { title: "Nagy belmagasság és interferencia", desc: "A fémvázas csarnokok és magas polcrendszerek visszaverik és leárnyékolják a vezeték nélküli jeleket." },
      { title: "Nagy távolságok rézkábelen", desc: "100 méter feletti távolságoknál a normál UTP kábel jelveszteséget szenved; optikai gerinc kell." },
      { title: "Ipari villamos terhelés", desc: "Nagy teljesítményű gépek és elosztók koordinált villamos kiépítést igényelnek." }
    ],
    insights_en: [
      { title: "High Ceilings & Metal Interference", desc: "Steel structures and tall racking reflect and shield wireless signals." },
      { title: "Long Distances Beyond 100m", desc: "Copper Cat6 degrades over 100 meters; fiber optic backbones are mandatory." },
      { title: "Industrial Electrical Loads", desc: "Heavy machinery and sub-panels require coordinated electrical installation." }
    ],
    process_hu: [
      { step: "01", title: "Szakipari felmérés", desc: "Csarnokméretek, magassági nyomvonalak és ipari környezeti hatások felmérése." },
      { step: "02", title: "Optikai & villamos tervezés", desc: "Optikai gerinchálózat, elosztószekrények és sugárzó Wi-Fi pontok rajza." },
      { step: "03", title: "Magaslati szerelés", desc: "Tálcázás, optika hegesztés és ipari AP-k rögzítése emelőkosárból." },
      { step: "04", title: "Periméter & kamerák", desc: "Nagy felbontású dóm/cső kamerák és kapu beléptetők bekötése." },
      { step: "05", title: "Ipari tesztelés", desc: "Optikai mérés (OTDR), villamos szabványossági teszt és élesítés." }
    ],
    process_en: [
      { step: "01", title: "Industrial Site Survey", desc: "Assessing hall dimensions, high-altitude cable trays, and environmental dust/moisture." },
      { step: "02", title: "Fiber & Electrical Design", desc: "Designing fiber backbone, sub-distribution panels, and high-density Wi-Fi APs." },
      { step: "03", title: "High-Altitude Installation", desc: "Tray installation, fiber splicing, and industrial AP mounting using cherry pickers." },
      { step: "04", title: "Perimeter & CCTV", desc: "Connecting high-resolution PTZ/bullet cameras and gate access terminals." },
      { step: "05", title: "Industrial Certification", desc: "OTDR fiber testing, electrical safety compliance, and system commissioning." }
    ],
    foresight_hu: [
      { title: "Por- és páravédelem (IP65/IP67)", desc: "Ipari védettségű kötődobozok és zárt rack szekrények alkalmazása." },
      { title: "Optikai gyűrűs topológia", desc: "Redundáns hálózati gyűrű, hogy egy kábelszakadás se állítsa le a csarnokot." },
      { title: "Magaslati kamera elhelyezés", desc: "Behajtó utak és folyosók vakfoltmentes kamerázása." },
      { title: "Biztonsági villamos lekapcsolók", desc: "Főkapcsolók és vészkilövők szabványos kiépítése." }
    ],
    foresight_en: [
      { title: "Dust & Moisture Protection (IP65/IP67)", desc: "Enclosing connections and racks in ruggedized industrial housing." },
      { title: "Fiber Ring Topology", desc: "Redundant network loop ensuring single cable cuts do not stop production." },
      { title: "High-Bay CCTV Positioning", desc: "Blind-spot-free camera coverage along aisles and loading bays." },
      { title: "Emergency Power Cutoffs", desc: "Installing compliant main isolation switches and safety shut-offs." }
    ],
    balance_hu: {
      title: "Új csarnok építése vagy meglévő üzemcsarnok korszerűsítése?",
      desc: "Teljesen új csarnok kivitelezése mellett meglévő, elavult villamos hálózattal vagy akadási problémákkal küzdő csarnokok felújítását is elvégezzük."
    },
    balance_en: {
      title: "Constructing New Halls or Upgrading Existing Industrial Facilities?",
      desc: "Alongside new hall builds, we rehabilitate legacy halls facing aging power distribution or connectivity drops."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-telephely", "raktar-logisztika", "gyartotelephely"]
  },
  "uzletnyitas": {
    slug: "uzletnyitas",
    title_hu: "Üzletnyitás technológiai kivitelezése",
    title_en: "Retail Store Opening Tech Execution",
    hero_hu: "Üzletnyitáskor minden rendszernek együtt kell működnie.",
    hero_en: "On store opening day, every system must work in harmony.",
    sub_hu: "Internet, POS-hálózat, Wi-Fi, kamera, riasztó és villamos kiállások egy egységes tervben.",
    sub_en: "Internet, POS network, Wi-Fi, CCTV, alarm, and electrical drops in one master plan.",
    insights_hu: [
      { title: "Szigorú nyitási határidő", desc: "A plázák vagy sétálóutcák nyitási dátuma nem csúszhat a hiányzó kasszahálózat miatt." },
      { title: "Kereskedelmi vagyonvédelem", desc: "Áruvédelmi kapuk, riasztók és pénztárfókuszos kamerák összehangolt működése elengedhetetlen." },
      { title: "Szűkös hely a pénztárnál", desc: "Esztétikus és helytakarékos villamos és IT beépítés kell a pultokba." }
    ],
    insights_en: [
      { title: "Strict Opening Deadlines", desc: "Mall or high-street opening dates cannot slip due to delayed POS connectivity." },
      { title: "Retail Asset Protection", desc: "EAS anti-theft gates, alarms, and POS-focused CCTV cameras must operate seamlessly." },
      { title: "Compact Counter Space", desc: "Aesthetic, space-saving electrical and network wiring is required inside checkout counters." }
    ],
    process_hu: [
      { step: "01", title: "Üzlettéri felmérés", desc: "Pénztárak, eladótér, raktárfülke és világítási kiállások felmérése." },
      { step: "02", title: "POS & Biztonsági terv", desc: "Kasszahálózat, POS terminál kiállások és kamerás lefedettség terve." },
      { step: "03", title: "Gyors kivitelezés", desc: "Kábelezés, világítási áramkörök és kompakt fali rack beszerelése." },
      { step: "04", title: "Riasztó & Vagyonvédelem", desc: "Mozgásérzékelők, nyitásérzékelők és távfelügyeleti modul beállítása." },
      { step: "05", title: "Nyitási próbafutás", desc: "Kasszapróba, vendég Wi-Fi és kamerás teszt a nyitás előtti napon." }
    ],
    process_en: [
      { step: "01", title: "Retail Space Survey", desc: "Mapping cash registers, sales floor, backroom storage, and display lighting drops." },
      { step: "02", title: "POS & Security Blueprint", desc: "Designing dedicated POS networks, card reader lines, and cashier CCTV coverage." },
      { step: "03", title: "Rapid Installation", desc: "Deploying cabling, lighting circuits, and compact wall-mount rack cabinets." },
      { step: "04", title: "Alarm & Anti-Theft", desc: "Setting up motion detectors, door sensors, and monitoring station telemetry." },
      { step: "05", title: "Pre-Opening Trial Run", desc: "POS transaction testing, guest Wi-Fi, and CCTV verification prior to store opening." }
    ],
    foresight_hu: [
      { title: "POS hálózati prioritás (QoS)", desc: "A bankkártyás fizetések prioritást élveznek a háttérzene és a Wi-Fi felett." },
      { title: "Kassza feletti HD kamerák", desc: "Nagy felbontású pénzkezelő kamerák a tévesztések és reklamációk tisztázására." },
      { title: "Mobil POS & leltár Wi-Fi", desc: "Stabil Wi-Fi lefedettség az eladótéri kézi leltározó termináloknak." },
      { title: "Világítási elosztó vezérlés", desc: "Kirakat és eladótér automatikus időzített kapcsolása." }
    ],
    foresight_en: [
      { title: "POS Network Quality of Service (QoS)", desc: "Card processing traffic is prioritized over background music and guest Wi-Fi." },
      { title: "Cashier HD CCTV", desc: "High-detail cameras over registers to resolve bill discrepancies instantly." },
      { title: "Mobile POS & Stock Wi-Fi", desc: "Seamless wireless coverage for handheld inventory barcode scanners." },
      { title: "Automated Storefront Lighting", desc: "Timer-controlled lighting circuits for display windows and floor lights." }
    ],
    balance_hu: {
      title: "Első üzlet nyitása vagy teljes üzlethálózat átalakítása?",
      desc: "Egyedi üzletnyitások éppen úgy a portfóliónk részét képezik, mint meglévő üzletek gyors átbrandelése és technikai felújítása."
    },
    balance_en: {
      title: "Single Store Opening or Multi-Site Franchise Rollouts?",
      desc: "We support single boutique store launches as well as rapid re-branding and tech retrofits across entire retail chains."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-iroda", "raktar-logisztika", "cegkoltozes"]
  },
  "gyartotelephely": {
    slug: "gyartotelephely",
    title_hu: "Gyártótelephely komplex infrastruktúrája",
    title_en: "Manufacturing Plant Infrastructure Solution",
    hero_hu: "Gyártótelephelyhez stabil, dokumentálható infrastruktúra.",
    hero_en: "Stable, fully documented infrastructure for manufacturing sites.",
    sub_hu: "Hálózat, optika, biztonságtechnika, beléptetés és villamos háttér a termelési környezethez igazítva.",
    sub_en: "Network, fiber optics, security, access control, and electrical background aligned with production goals.",
    insights_hu: [
      { title: "Leállási kockázat", desc: "A termelőgépek hálózati kimaradása vagy feszültségingadozása milliós kiesést okozhat." },
      { title: "Szigorú munka- és vagyonvédelem", desc: "Belépési szintek a veszélyes üzemi területekre és IP kamerás felügyelet." },
      { title: "Ipari integrációs igény", desc: "Szoftveres adatgyűjtés és PLC/SCADA hálózati szeparálás szükséges." }
    ],
    insights_en: [
      { title: "Downtime Financial Risk", desc: "Network drops or power surges on production lines can trigger costly halts." },
      { title: "Strict Safety & Access Control", desc: "Restricted entry zones for hazardous shop floors and IP camera surveillance." },
      { title: "Industrial Integration Needs", desc: "Data capture software and PLC/SCADA network segmentation are vital." }
    ],
    process_hu: [
      { step: "01", title: "Üzemi audit & követelmények", desc: "Gépsorok, villamos elosztók és hálózati csomópontok auditja." },
      { step: "02", title: "Redundáns hálózati terv", desc: "Gyűrűs optikai gerinc, VLAN szeparáció és szünetmentes táplálás." },
      { step: "03", title: "Szakági kivitelezés", desc: "Tálcázás, IP65-ös csatlakozók, kamera és beléptető terminálok." },
      { step: "04", title: "Szoftveres integráció", desc: "Gyártási adatok átvitele, egyedi SIROSOFT felület vagy API bekötés." },
      { step: "05", title: "Folyamatos üzemeltetés", desc: "7/24 felügyelet és rendszeres megelőző karbantartás." }
    ],
    process_en: [
      { step: "01", title: "Plant Audit & Specs", desc: "Auditing production lines, power distribution, and network nodes." },
      { step: "02", title: "Redundant Network Blueprint", desc: "Fiber ring backbone, VLAN isolation, and industrial UPS backup." },
      { step: "03", title: "Multi-Disciplinary Build", desc: "Trays, IP65 connectors, CCTV cameras, and turnstile access terminals." },
      { step: "04", title: "Software Integration", desc: "Production data feeds, custom SIROSOFT dashboards or API connectors." },
      { step: "05", title: "Sustained Operations", desc: "24/7 telemetry monitoring and preventive maintenance schedules." }
    ],
    foresight_hu: [
      { title: "OT és IT hálózat elválasztása", desc: "Az üzemi termelőgépek hálózata ne legyen közvetlenül elérhető az irodai netről." },
      { title: "Villamos feszültségvédelmek", desc: "Túlfeszültség- és villámvédelem a drága vezérlőkártyák védelmére." },
      { title: "Forgókapuk és kártyás áthaladás", desc: "Műszakváltási torlódásmentes beléptetés a csarnokkapuknál." },
      { title: "Valós idejű hőtérképes kamerák", desc: "Hőkamerás túlmelegedés-észlelés a gépsorok mellett." }
    ],
    foresight_en: [
      { title: "OT / IT Network Segmentation", desc: "Operational technology machinery networks are isolated from office IT." },
      { title: "Electrical Surge Protection", desc: "Multi-stage surge & lightning arresters protecting costly PLC cards." },
      { title: "Turnstile Gate Access", desc: "High-throughput turnstiles preventing shift-change entry bottlenecks." },
      { title: "Thermal Overheat Cameras", desc: "Thermal CCTV detection monitoring critical machinery temperature." }
    ],
    balance_hu: {
      title: "Új gyáregység építése vagy működő üzem bővítése?",
      desc: "Zöldmezős gyárépítés és működő üzemi sorok közötti fázisolt hálózatbővítés vagy villamos rekonstrukció esetén is garantáljuk a folytonosságot."
    },
    balance_en: {
      title: "Building New Plant Wings or Modernising Active Lines?",
      desc: "We support greenfield factory builds as well as phased cabling or electrical retrofits on active shop floors without interrupting shifts."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-telephely", "uj-csarnok", "raktar-logisztika"]
  },
  "raktar-logisztika": {
    slug: "raktar-logisztika",
    title_hu: "Raktári és logisztikai hálózat & biztonság",
    title_en: "Warehouse & Logistics Connectivity & Security",
    hero_hu: "Raktárban a lefedettség és az átláthatóság kulcskérdés.",
    hero_en: "Coverage and visibility are vital in modern warehouse logistics.",
    sub_hu: "Ipari Wi-Fi, hálózat, kamera, beléptetés és kapcsolódó infrastruktúra egy rendszerként.",
    sub_en: "Industrial Wi-Fi, network backbone, CCTV, access control, and electrical drops as one solution.",
    insights_hu: [
      { title: "Vonalkódolvasó leszakadások", desc: "Polcsorok közötti árnyékolás miatt a kézi terminálok elveszítik a kapcsolatot a WMS-sel." },
      { title: "Árukár és leltárhiány", desc: "Kamerás lefedettség hiányában a sérült raklapok és hiányzó áruk felelőssége tisztázatlan." },
      { title: "Magaslati szerelési nehézségek", desc: "10-14 méteres polcrendszerek feletti munkák speciális szaktudást igénylenek." }
    ],
    insights_en: [
      { title: "Barcode Scanner Disconnections", desc: "Aisle shielding causes handheld scanners to drop WMS connection." },
      { title: "Cargo Damage & Shrinkage", desc: "Gaps in camera coverage leave pallet damage and missing items unverified." },
      { title: "High-Bay Installation Challenges", desc: "Mounting equipment 10-14 meters high over racking requires certified access gear." }
    ],
    process_hu: [
      { step: "01", title: "Raktári hőtérkép tervezés", desc: "Szoftveres rádiófrekvenciás szimuláció a polcrendszerek figyelembevételével." },
      { step: "02", title: "Kábelezes & Tálcázás", desc: "Optikai gerinc és Cat6A tálcázás a mennyezet alatti tartószerkezeteken." },
      { step: "03", title: "Ipari Wi-Fi AP telepítés", desc: "Irányított és körsugárzó ipari Wi-Fi hozzáférési pontok felperemezése." },
      { step: "04", title: "Folyosói & Kapu kamerák", desc: "Hosszú fókuszú kamerák szerelése a raklapmozgások követésére." },
      { step: "05", title: "Roaming tesztelés", desc: "Targonca útvonalakon való folyamatos adatátviteli tesztelés." }
    ],
    process_en: [
      { step: "01", title: "Warehouse Heatmap Design", desc: "Software RF simulation accounting for metal racking and inventory density." },
      { step: "02", title: "High-Level Cable Trays", desc: "Fiber backbone and Cat6A cable tray installation along roof trusses." },
      { step: "03", title: "Industrial Wi-Fi AP Mount", desc: "Installing directional APs designed for narrow high-bay aisles." },
      { step: "04", title: "Aisle & Dock Cameras", desc: "Long-focus cameras recording dock doors and main forklift thoroughfares." },
      { step: "05", title: "Roaming Speed Verification", desc: "Testing real-time roaming handover along active forklift routes." }
    ],
    foresight_hu: [
      { title: "Seamless Wi-Fi Roaming (802.11r/k/v)", desc: "A targoncák sebessége mellett is megszakításmentes csatlakozásváltás." },
      { title: "Rampa kamerák (Dock Door CCTV)", desc: "Be- és kirakodási folyamatok időbélyeges videórögzítése." },
      { title: "Teherportai beléptetés", desc: "Kamionos behajtó kapuk és sofőrvárók kontrollált beléptetése." },
      { title: "Targoncafeltöltő villamos kiállások", desc: "Nagy áramerősségű akkumulátortöltő pontok kiépítése." }
    ],
    foresight_en: [
      { title: "Seamless Wi-Fi Roaming (802.11r/k/v)", desc: "Uninterrupted AP roaming while forklifts travel at top speeds." },
      { title: "Loading Dock CCTV", desc: "Timestamped video logs of pallet loading and seal checks." },
      { title: "Gatehouse Truck Access Control", desc: "Automated barriers and driver badge verification at entry gates." },
      { title: "Forklift Charger Electrical Drops", desc: "Dedicated high-current circuits for battery charging stations." }
    ],
    balance_hu: {
      title: "Új logisztikai csarnok vagy meglévő raktári Wi-Fi felújítás?",
      desc: "Teljes új logisztikai bázisok kiépítése mellett a működő raktárakban folyamatosan szétkapcsoló Wi-Fi hálózatok mérését és újjáépítését is vállaljuk."
    },
    balance_en: {
      title: "New Logistics Hubs or Fixing Flaky Warehouse Wi-Fi?",
      desc: "We build new distribution hubs and diagnose/rebuild dropping Wi-Fi networks in operational warehouses."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-csarnok", "gyartotelephely", "uj-telephely"]
  },
  "rendelo": {
    slug: "rendelo",
    title_hu: "Orvosi rendelő és magánklinika infrastruktúra",
    title_en: "Medical Practice & Clinic Infrastructure",
    hero_hu: "Rendelő, ahol a technikai háttér észrevétlenül működik.",
    hero_en: "Medical clinics where tech works seamlessly in the background.",
    sub_hu: "Hálózat, Wi-Fi, biztonságtechnika, UPS és villamos infrastruktúra a napi működéshez igazítva.",
    sub_en: "Network, Wi-Fi, security, UPS power, and electrical infrastructure aligned with clinical care.",
    insights_hu: [
      { title: "Egészségügyi adatvédelem (GDPR)", desc: "Betegadatok és képdiagnosztika szigorúan elkülönített, védett hálózaton." },
      { title: "Folyamatos áramellátás igénye", desc: "Kényes orvosi műszerek védelme a hálózati feszültségcsúcsoktól és áramkimaradástól." },
      { title: "Diszkrét biztonságtechnika", desc: "A várótermek és bejáratok esztétikus, nem zavaró kamerás és beléptetési felügyelete." }
    ],
    insights_en: [
      { title: "Medical Data Privacy (GDPR)", desc: "Patient records and PACS image files on strictly isolated, encrypted networks." },
      { title: "Uninterrupted Power for Diagnostics", desc: "Protecting sensitive medical diagnostic tools against power spikes and cuts." },
      { title: "Discreet Clinic Security", desc: "Aesthetic, non-intrusive CCTV and access control for waiting areas and entryways." }
    ],
    process_hu: [
      { step: "01", title: "Rendelői igényfelmérés", desc: "Kezelők, recepció, diagnosztikai helyiségek és páciens Wi-Fi igények." },
      { step: "02", title: "Orvostechnikai villamos terv", desc: "Érintésvédelmi leválasztás, szünetmentes tápellátás és LAN kiállások." },
      { step: "03", title: "Tiszta kivitelezés", desc: "Zajmentes és esztétikus kábelcsatornázás, süllyesztett szerelvények." },
      { step: "04", title: "Recepció & Beléptetés", desc: "Kártyás személyzeti ajtók és rendelői hívórendszer kiépítése." },
      { step: "05", title: "Validation & Dokumentáció", desc: "Villamos biztonsági mérések és hálózati adatvédelmi audit." }
    ],
    process_en: [
      { step: "01", title: "Clinical Workflow Assessment", desc: "Mapping treatment rooms, reception desk, PACS imaging, and patient Wi-Fi." },
      { step: "02", title: "Medical Grade Power & Net", desc: "Designing isolated grounding, medical UPS backup, and Gigabit drops." },
      { step: "03", title: "Clean Room Execution", desc: "Quiet, dust-free installation with flush-mount medical grade fittings." },
      { step: "04", title: "Reception & Staff Access", desc: "Keycard locks for staff-only areas and patient paging integration." },
      { step: "05", title: "Compliance Certification", desc: "Electrical safety compliance check and network security audit." }
    ],
    foresight_hu: [
      { title: "Orvosi műszer tápszűrés", desc: "Zajszűrt, szünetmentes tápáramkörök az ultrahang és CT gépeknek." },
      { title: "Páciens és személyzeti Wi-Fi bontás", desc: "Külön hálózat az orvosok tabletszámitógépeinek és a várakozó betegeknek." },
      { title: "Recepció alatti pánikgomb", desc: "Csendes riasztási jelzés a rendőrség vagy vagyonvédelmi cég felé." },
      { title: "Biológiai / gyógyszertári beléptetés", desc: "Naplózott kártyás bejutás a gyógyszerraktárba." }
    ],
    foresight_en: [
      { title: "Medical Grade Power Filtering", desc: "Noise-filtered UPS circuits protecting ultrasound and X-ray equipment." },
      { title: "Isolated Patient / Staff Wi-Fi", desc: "Dedicated VLANs separating clinical tablets from public waiting room internet." },
      { title: "Reception Panic Buttons", desc: "Discreet panic trigger wired directly to monitoring stations." },
      { title: "Pharmacy Storage Access Logs", desc: "Audited keycard entry for medicine storage rooms." }
    ],
    balance_hu: {
      title: "Új praxisközpont nyitása vagy meglévő rendelő felújítása?",
      desc: "Teljesen új magánklinikák kivitelezését és rendelők rendelési időn kívüli, szakaszos hálózati/villamos modernizációját is elvégezzük."
    },
    balance_en: {
      title: "Opening New Practices or Retrofitting Operational Clinics?",
      desc: "We build new private clinics as well as upgrade existing practices after-hours to avoid disrupting patient appointments."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-iroda", "uzletnyitas", "cegkoltozes"]
  },
  "epitkezes": {
    slug: "epitkezes",
    title_hu: "Építkezési erős- és gyengeáramú előkészítés",
    title_en: "Construction Electrical & Low-Voltage Infrastructure",
    hero_hu: "Építkezéskor a legkönnyebb jól előkészíteni a technológiát.",
    hero_en: "During construction is the best time to embed future technology.",
    sub_hu: "Erős- és gyengeáramú nyomvonalak, hálózat, kamera, riasztó és későbbi bővíthetőség összehangolva.",
    sub_en: "High/low voltage conduits, network drops, CCTV, alarm, and future expansion capacity aligned.",
    insights_hu: [
      { title: "Későbbi falbontás elkerülése", desc: "Ha a védőcsövek kimaradnak a szerkezetépítés során, utólag csak látható kábelcsatornával pótolható." },
      { title: "Közös nyomvonal-kialakítás", desc: "Az erősáram és a gyengeáram megfelelő távolsága előzi meg a hálózati zavarokat." },
      { title: "Tervezői koordináció", desc: "Építész, gépész és villamos tervek összehangolása a szerkezetkész állapotban." }
    ],
    insights_en: [
      { title: "Avoiding Post-Build Wall Chasing", desc: "Missing conduits during shell construction means ugly trunking or wall chasing later." },
      { title: "Parallel Pathway Separation", desc: "Proper distance between power cables and Ethernet prevents data interference." },
      { title: "Architectural Coordination", desc: "Harmonising architectural, HVAC, and electrical plans during structural stages." }
    ],
    process_hu: [
      { step: "01", title: "Tervasztal egyeztetés", desc: "Építészeti tervek átvizsgálása, nyomvonalak és kiállási pontok berajzolása." },
      { step: "02", title: "Védőcsövezés & Tálcázás", desc: "Falhornyok, födémáttörések és kábeltálcák kiépítése szerkezetkész fázisban." },
      { step: "03", title: "Kábelbehúzás", desc: "Cat6A UTP, optika, riasztókábelek és tápkábelek fektetése a vakolás előtt." },
      { step: "04", title: "Szerelvényezés & Rack", desc: "Vakolás és festés utáni aljzatok, elosztók és rack szekrény felépítése." },
      { step: "05", title: "Mérés & Átadási dokumentáció", desc: "Szigetelési és hálózati mérési jegyzőkönyv átadása." }
    ],
    process_en: [
      { step: "01", title: "Blueprint Review", desc: "Reviewing architectural drawings and marking conduit paths and outlet heights." },
      { step: "02", title: "Conduits & Trays", desc: "Chasing wall slots, ceiling penetrations, and cable trays during shell phase." },
      { step: "03", title: "Cable Pulling", desc: "Pulling Cat6A, fiber, alarm, and power cables prior to plastering." },
      { step: "04", title: "Trim-Out & Rack Build", desc: "Post-paint faceplate installation, main distribution panels, and rack build." },
      { step: "05", title: "Certification & Documentation", desc: "Handing over electrical insulation certificates and cable test reports." }
    ],
    foresight_hu: [
      { title: "Tartalék csövezés a kertbe / kapuhoz", desc: "Védőcső a jövőbeli automatat kapunak, elektromos autó töltőnek vagy okos kaputelefonnak." },
      { title: "Központi csillagpontos csőhálózat", desc: "Minden pontból csillagpontosan futó nyomvonal a központi rackhez." },
      { title: "Tetőkibúvó és napelem előkészítés", desc: "Szolár inverter és időjárás-állomás kábelnyomvonalak." },
      { title: "Okosotthon / okosépület alapok", desc: "Buszkábeles vagy hálózati érzékelők kiállásai." }
    ],
    foresight_en: [
      { title: "Spare Conduits to Gate / Parking", desc: "Unused ducts for future auto gates, EV chargers, or smart intercoms." },
      { title: "Star-Topology Conduit Run", desc: "Every drop runs directly back to the central tech rack room." },
      { title: "Rooftop Solar & Weather Ducts", desc: "Dedicated conduits for solar inverter telemetry and weather sensors." },
      { title: "Smart Building Bus Preparation", desc: "Installing bus wiring or Ethernet points for future automation controllers." }
    ],
    balance_hu: {
      title: "Generálkivitelezési szakipari előkészítés vagy utólagos kiegészítés?",
      desc: "Teljes új építésű ingatlanok erős/gyengeáramú generálkivitelezése mellett a félbeszakadt vagy elhibázott előkészítések korrekcióját is elvégezzük."
    },
    balance_en: {
      title: "New Build Subcontracting or Rectifying Stalled Wiring?",
      desc: "We perform full electrical/low-voltage subcontracts on new builds as well as take over incomplete or faulty wiring projects."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-telephely", "uj-iroda", "uj-csarnok"]
  },
  "cegkoltozes": {
    slug: "cegkoltozes",
    title_hu: "Cégköltözés IT és biztonságtechnikai átállása",
    title_en: "Corporate Relocation IT & Security Migration",
    hero_hu: "Költözéskor ne csak a gépek költözzenek.",
    hero_en: "During corporate moves, don't just move physical boxes.",
    sub_hu: "A meglévő eszközök, hálózat és szolgáltatások felmérése, áttervezése és az új helyszínhez igazítása.",
    sub_en: "Auditing, re-designing, and relocating active hardware, servers, and security to the new site.",
    insights_hu: [
      { title: "Hétvégi állásidő-korlát", desc: "Péntek esti leállás után hétfő reggel 8:00-kor minden munkaállomásnak működnie kell." },
      { title: "Eszközök sérülésveszélye", desc: "Szerverek, rack-ek és aktív hálózati eszközök szakszerűtlen mozgatása adatvesztést okozhat." },
      { title: "Internet és provider átállás", desc: "A bérelt vonalak és nyilvános IP címek szinkronizálása a szolgáltatóval." }
    ],
    insights_en: [
      { title: "Weekend Downtime Constraints", desc: "Shutting down Friday night means every workstation must be live Monday at 08:00." },
      { title: "Hardware Damage Risks", desc: "Unprofessional server and rack transport risks physical damage or data loss." },
      { title: "ISP & Public IP Migration", desc: "Synchronising leased line cuts and static IP transitions with telecom providers." }
    ],
    process_hu: [
      { step: "01", title: "Meglévő infrastruktúra audit", desc: "Aktív eszközök, szerverek, licencállomány és kábelezés felmérése a régi helyen." },
      { step: "02", title: "Új helyszín előkészítése", desc: "Nyomvonalak, új rack, tápkiállások és hálózat kiépítése a költözés előtt." },
      { step: "03", title: "Szerver & IT leszerelés", desc: "Leállítás, adatmásolási ellenőrzés és antisztatikus csomagolás péntek este." },
      { step: "04", title: "Szállítás & Beszerelés", desc: "Biztonságos költöztetés, új rackbe szerelés és kábelezés szombaton." },
      { step: "05", title: "Tesztelés & Hétfői ügyelet", desc: "Vasárnapi hálózati próba és helyszíni IT asszisztencia hétfő reggel." }
    ],
    process_en: [
      { step: "01", title: "Legacy Site IT Audit", desc: "Auditing active switches, servers, licenses, and cables at the current office." },
      { step: "02", title: "New Location Preparation", desc: "Pre-building cabling, new rack enclosure, and power drops prior to move day." },
      { step: "03", title: "Decommissioning", desc: "Friday night shutdown, backup verification, and anti-static hardware packing." },
      { step: "04", title: "Transport & Rack Mount", desc: "Secure weekend transport, mounting into new racks, and patching on Saturday." },
      { step: "05", title: "Testing & Monday On-Site Support", desc: "Sunday end-to-end network test and dedicated on-site engineers Monday morning." }
    ],
    foresight_hu: [
      { title: "Párhuzamos internet vonal", desc: "Ideiglenes 4G/5G vagy másodlagos optika az átmeneti napokra." },
      { title: "Eszközállomány selejtezése / felújítása", desc: "Az elavult kapcsolók és hozzáférési pontok cseréje a költözéskor." },
      { title: "Címkézett kábelrendszer", desc: "Minden munkaállomási port pontos számozása a gyors asztalhoz rendeléshez." },
      { title: "Mentési teszt leállítás előtt", desc: "Teljes fizikai és felhős biztonsági mentés a szerverek áramtalanítása előtt." }
    ],
    foresight_en: [
      { title: "Parallel Internet Lines", desc: "Temporary 5G or secondary fiber link to cover transition days." },
      { title: "Hardware Refresh Opportunity", desc: "Replacing outdated switches and APs during relocation to avoid moving obsolete tech." },
      { title: "Labeled Patch System", desc: "Precision numbering on desk drops for fast matching on move day." },
      { title: "Pre-Shutdown Backup Audit", desc: "Verified full physical & cloud backup snapshot taken before power down." }
    ],
    balance_hu: {
      title: "Teljes cégköltözés vagy csak az informatikai rack áttelepítése?",
      desc: "Vállaljuk a teljes irodai/üzemi IT és biztonságtechnika átköltöztetését, vagy kizárólag a kényes szerver- és hálózati infrastruktúra áthelyezését."
    },
    balance_en: {
      title: "Full Headquarters Move or Rack Transport Only?",
      desc: "We migrate entire office IT and security setups or handle specialized server rack relocation with equal expertise."
    },
    relatedDivisions: ["sironic", "siroved", "sirosoft", "sirovill"],
    relatedSolutions: ["uj-iroda", "uj-telephely", "uzletnyitas"]
  }
};
