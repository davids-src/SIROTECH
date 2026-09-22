export interface ExistingSystemDetail {
  slug: string;
  title_hu: string;
  title_en: string;
  hero_hu: string;
  hero_en: string;
  sub_hu: string;
  sub_en: string;
  situations_hu: { title: string; desc: string }[];
  situations_en: { title: string; desc: string }[];
  matrix_hu: { title: string; items: string[] }[];
  matrix_en: { title: string; items: string[] }[];
  process_hu: { step: string; title: string; desc: string }[];
  process_en: { step: string; title: string; desc: string }[];
  divisions: Array<"sironic" | "siroved" | "sirosoft" | "sirovill">;
}

export const EXISTING_SYSTEMS_DATA: Record<string, ExistingSystemDetail> = {
  bovites: {
    slug: "bovites",
    title_hu: "Meglévő rendszer bővítése",
    title_en: "Existing System Expansion",
    hero_hu: "Új végpontok, területek, eszközök és funkciók illesztése.",
    hero_en: "Adding new endpoints, areas, devices, and capabilities to active setups.",
    sub_hu: "Meglévő informatikai, biztonságtechnikai és villamos hálózatok zökkenőmentes bővítése falbontás és kiesés nélkül.",
    sub_en: "Seamlessly expanding operational IT, security, and electrical infrastructure without unnecessary downtime.",
    situations_hu: [
      { title: "Irodabővülés / Új szárny", desc: "Új munkaállomások, tárgyalók vagy teljes bérleményi szárnyak bekötése." },
      { title: "Raktári polcrendszer bővítés", desc: "Új csarnokrészek Wi-Fi és kamerás lefedettségének kiterjesztése." },
      { title: "Kameraszám és beléptetési pont növelés", desc: "Új bejáratok, szekciók és parkolói sorompók integrálása." },
      { title: "Villamos kiállások szaporítása", desc: "Gépcsere vagy új fogyasztók miatti elosztóbővítés." }
    ],
    situations_en: [
      { title: "Office Expansion / New Wing", desc: "Connecting new desks, conference rooms, or entire added floors." },
      { title: "Warehouse Racking Extension", desc: "Extending Wi-Fi APs and CCTV coverage to new warehouse bays." },
      { title: "Additional Camera & Door Drops", desc: "Integrating new gates, turnstiles, and perimeter sensors." },
      { title: "Electrical Drop Additions", desc: "Expanding distribution panels for new machinery or higher loads." }
    ],
    matrix_hu: [
      { title: "IT & Hálózati Bővítés", items: ["Új Cat6A / Optikai végpontok", "Wi-Fi AP lefedettség növelés", "Switch portkapacitás bővítés", "Microsoft 365 licenclépcsők"] },
      { title: "Biztonságtechnikai Bővítés", items: ["Új IP kamerák rögzítőbe illesztése", "Beléptető olvasók és ajtóvezérlők", "Riasztói zónatágítás", "Kültéri infrasorompók"] },
      { title: "Villamos Bővítés", items: ["Elosztószekrény kiegészítés", "Új áramköri kismegszakítók", "UPS kapacitásnövelés", "Ipari dugalj kiállások"] },
      { title: "Szoftveres Bővítés", items: ["Új API végpontok", "Adatbázis skálázás", "Új felhasználói modulok", "Riporting bővítmények"] }
    ],
    matrix_en: [
      { title: "IT & Network Expansion", items: ["New Cat6A / Fiber drops", "Expanding Wi-Fi coverage", "Adding switch port density", "Microsoft 365 licensing"] },
      { title: "Security System Expansion", items: ["Adding IP cameras to NVR", "Extra card access readers", "Alarm zone expansion", "Perimeter beam additions"] },
      { title: "Electrical Expansion", items: ["Distribution board extensions", "New circuit breakers", "UPS capacity upgrades", "Industrial AC outlets"] },
      { title: "Software Expansion", items: ["New API endpoints", "Database scaling", "New user modules", "Reporting add-ons"] }
    ],
    process_hu: [
      { step: "01", title: "Meglévő kapacitások mérnöki auditja", desc: "Felmérjük a szabad switch portokat, elosztó-kismegszakítókat és rögzítői csatornákat." },
      { step: "02", title: "Kompatibilitási ellenőrzés", desc: "Garantáljuk, hogy az új eszközök zökkenőmentesen kommunikálnak a meglévő központtal." },
      { step: "03", title: "Kiesésmentes kivitelezés", desc: "A bekötéseket és kábelezést munkaidőn kívül vagy fázisoltan végezzük." },
      { step: "04", title: "Integrált tesztelés & dokumentáció", desc: "Az új elemeket átadáskor pontos nyomvonali és logikai rajzokon dokumentáljuk." }
    ],
    process_en: [
      { step: "01", title: "Capacity Audit", desc: "Auditing available switch ports, breakers, and NVR channels." },
      { step: "02", title: "Compatibility Verification", desc: "Ensuring new hardware communicates smoothly with legacy controllers." },
      { step: "03", title: "Zero-Downtime Installation", desc: "Executing wiring and cutovers during off-hours or phased shifts." },
      { step: "04", title: "Testing & Documentation", desc: "Handing over updated logical topology maps and test certificates." }
    ],
    divisions: ["sironic", "siroved", "sirosoft", "sirovill"]
  },
  javitas: {
    slug: "javitas",
    title_hu: "Meglévő hálózatok és rendszerek hibajavítása",
    title_en: "Network & System Repair & Troubleshooting",
    hero_hu: "Gyors hibafeltárás és stabil helyreállítás.",
    hero_en: "Rapid fault diagnosis and reliable system restoration.",
    sub_hu: "Ha szakadozik a Wi-Fi, vak a kamera, lecsap az elosztó vagy nem működik az adatátvitel, feltárjuk a kiváltó okot.",
    sub_en: "Diagnosing root causes for dropping Wi-Fi, blind cameras, tripping breakers, or network packet loss.",
    situations_hu: [
      { title: "Folyamatos Wi-Fi szétkapcsolás", desc: "Roaming hibák, csatorna-interferencia és lefedettségi lyukak." },
      { title: "Nem működő kamerák / NVR hibák", desc: "Kábelszakadások, tápellátási hibák vagy IP cím ütközések." },
      { title: "Gyakori villamos túlterhelés", desc: "Kismegszakító leoldások és kiegyenlítetlen fázisterhelések." },
      { title: "Lassú vagy bizonytalan hálózat", desc: "Csomagvesztés, hibás patch kábelek és hurok a switch-ek között." }
    ],
    situations_en: [
      { title: "Unstable Wi-Fi Disconnections", desc: "Roaming drops, channel interference, and dead zones." },
      { title: "Offline Cameras / NVR Failures", desc: "Cable cuts, PoE power issues, or IP address collisions." },
      { title: "Frequent Electrical Tripping", desc: "Breaker trips and unbalanced phase loads." },
      { title: "Sluggish Network Drops", desc: "Packet loss, faulty patch cords, and switching loops." }
    ],
    matrix_hu: [
      { title: "Hálózati Hibakeresés", items: ["Fluke kábelmérés & minősítés", "Wi-Fi spektrum és hőtérkép diagnosztika", "Switch hurok- és VLAN felderítés"] },
      { title: "Biztonságtechnikai Mérés", items: ["PoE tápellátás tesztelés", "Riasztói vonal- és akkumulátor teszt", "Beléptető vezérlő log elemzés"] },
      { title: "Villamos Mérés", items: ["Szigetelési ellenállás mérés", "Hurokimpedancia & földelés vizsgálat", "Fázisszimmetria felülvizsgálat"] },
      { title: "Szoftveres Hibaelhárítás", items: ["API log analízis", "Adatbázis zárolási tesztek", "Szervererőforrás-szűkkeresztmetszet"] }
    ],
    matrix_en: [
      { title: "Network Troubleshooting", items: ["Fluke cable certification", "Wi-Fi spectrum & heatmap analysis", "Switch loop & VLAN audit"] },
      { title: "Security Diagnostics", items: ["PoE power supply testing", "Alarm loop & battery checks", "Access controller log trace"] },
      { title: "Electrical Diagnostics", items: ["Insulation resistance testing", "Loop impedance & grounding audit", "Phase balance review"] },
      { title: "Software Debugging", items: ["API error trace logs", "Database lock checks", "Server resource bottleneck trace"] }
    ],
    process_hu: [
      { step: "01", title: "Műszeres hibadiagnosztika", desc: "Nem találgatunk: műszeres mérésekkel azonosítjuk a fizikai vagy logikai hiba pontos helyét." },
      { step: "02", title: "Gyors ideiglenes elhárítás", desc: "Amennyiben szükséges, bypass vagy tartalék útvonal aktiválásával visszaállítjuk az alapszolgáltatást." },
      { step: "03", title: "Végleges mérnöki javítás", desc: "Kábelszakasz csere, szakszerű újracsatlakozás vagy eszközcsere elvégzése." },
      { step: "04", title: "Jelentés & megelőzési javaslat", desc: "Jegyzőkönyv átadása a hiba okáról és javaslat a jövőbeli ismétlődés elkerülésére." }
    ],
    process_en: [
      { step: "01", title: "Hardware Diagnostic Testing", desc: "Pinpointing physical or logical faults with certified measuring tools." },
      { step: "02", title: "Immediate Workaround", desc: "Activating bypass or backup routes to restore basic service rapidly." },
      { step: "03", title: "Permanent Engineering Repair", desc: "Replacing damaged cable spans, re-terminating drops, or swapping hardware." },
      { step: "04", title: "Report & Prevention Strategy", desc: "Handing over audit logs and preventative steps to prevent recurrences." }
    ],
    divisions: ["sironic", "siroved", "sirosoft", "sirovill"]
  },
  korszerusites: {
    slug: "korszerusites",
    title_hu: "Elavult rendszerek korszerűsítése",
    title_en: "Legacy System Modernisation",
    hero_hu: "Elavult rendszerek megújítása a meglévő értékek megőrzésével.",
    hero_en: "Upgrading legacy infrastructure while preserving existing assets.",
    sub_hu: "Régi analog kamerák IP-re cseréje, 100Mbit-es hálózat Gigabitre emelése, és elavult villamos elosztók felújítása.",
    sub_en: "Migrating analog CCTV to IP, 100Mbit to Gigabit/10G, and replacing hazardous legacy fuse boxes.",
    situations_hu: [
      { title: "Analóg / BNC kamerák lecserélése", desc: "Homályos kép, éjszakai látás hiánya és elavult rögzítők." },
      { title: "100 Mbit-es UTP hálózat korlátai", desc: "Gigabites és 10G-s adatátviteli igények a nagy fájlok miatt." },
      { title: "Nem támogatott Microsoft / Szerver rendszerek", desc: "Biztonsági kockázatot jelentő elavult operációs rendszerek." },
      { title: "Alumínium vezetékes villamos elosztók", desc: "Tűzveszélyes, elavult olvadóbiztosítékos kapcsolódobozok." }
    ],
    situations_en: [
      { title: "Replacing Analog BNC CCTV", desc: "Blurry images, poor night vision, and obsolete DVR recorders." },
      { title: "Outdated 100Mbps Ethernet Limits", desc: "Demand for Gigabit / 10G speeds for modern file transfers." },
      { title: "Unsupported Windows & Server OS", desc: "Security vulnerabilities in legacy unpatched operating systems." },
      { title: "Aluminum Electrical Wiring", desc: "Fire risks from ancient fuse boxes and degrading wiring." }
    ],
    matrix_hu: [
      { title: "Hálózati Modernizáció", items: ["Cat5e -> Cat6A kábelcsere", "Gigabit / 10G PoE+ switch-ek", "Wi-Fi 6 / 6E AP átállás", "Bérelhető felhős vezérlők"] },
      { title: "Kamera & Biztonság Megújítás", items: ["Analóg -> IP HD kamerák", "Koax -> UTP/PoE jelátalakítók", "NVR rögzítő modernizáció", "Mobilappos riasztóközpont"] },
      { title: "Villamos Modernizáció", items: ["Automatizált kismegszakítók", "FI-relé (Áram-védőkapcsoló) beépítés", "LED világítási átállás", "Túlfeszültség védelmi fokozatok"] },
      { title: "Szoftver Modernizáció", items: ["Legacy szoftver felhőbe költöztetése", "Adatbázis migráció", "Webes felület áttervezése", "Automatikus biztonsági mentések"] }
    ],
    matrix_en: [
      { title: "Network Modernisation", items: ["Cat5e -> Cat6A cable refresh", "Gigabit / 10G PoE+ switches", "Wi-Fi 6 / 6E AP upgrades", "Cloud managed controller setup"] },
      { title: "Security Modernisation", items: ["Analog -> IP HD CCTV upgrade", "Coax -> UTP PoE converters", "NVR recorder replacement", "Mobile app alarm telemetry"] },
      { title: "Electrical Modernisation", items: ["Modern breaker panels", "RCD / GFCI safety switches", "LED lighting retrofits", "Multi-stage surge protection"] },
      { title: "Software Modernisation", items: ["Migrating legacy apps to Cloud", "Database refactoring", "Modern web UI redesign", "Automated backup pipelines"] }
    ],
    process_hu: [
      { step: "01", title: "Műszaki állapotfelmérés", desc: "Kiszűrjük, hogy a meglévő nyomvonalakból és kábelekből mi az, ami megőrizhető." },
      { step: "02", title: "Fázisolt korszerűsítési terv", desc: "Olyan ütemezést készítünk, amely mellett az üzletmenet a migráció alatt is folytonos marad." },
      { step: "03", title: "Párhuzamos átállás (Side-by-side)", desc: "Az új rendszert felépítjük a meglévő mellett, majd átkapcsoljuk a működést." },
      { step: "04", title: "Régi elemek elbontása & dokumentálás", desc: "Elbontjuk a veszélyes/felesleges kábelszakaszokat és frissítjük a rendszerrajzokat." }
    ],
    process_en: [
      { step: "01", title: "Asset Assessment", desc: "Identifying reusable cable trays, conduits, and valid hardware." },
      { step: "02", title: "Phased Migration Blueprint", desc: "Designing a migration roadmap that keeps business running during cutovers." },
      { step: "03", title: "Side-by-Side Cutover", desc: "Building the modern infrastructure alongside legacy before final switchover." },
      { step: "04", title: "Decommissioning & Schematics", desc: "Removing legacy cabling and updating physical layout documentation." }
    ],
    divisions: ["sironic", "siroved", "sirosoft", "sirovill"]
  },
  uzemeltetes: {
    slug: "uzemeltetes",
    title_hu: "Hosszú távú IT és rendszerüzemeltetés",
    title_en: "Long-Term IT & Facility System Operation",
    hero_hu: "Megelőző karbantartás, felügyelet és garantált SLA.",
    hero_en: "Preventive maintenance, monitoring, and guaranteed SLA response.",
    sub_hu: "Nem hagyjuk magára a rendszert: folyamatos felügyelet, megelőző felülvizsgálat és gyors hibaelhárítás egyetlen kézből.",
    sub_en: "We don't abandon your infrastructure: continuous monitoring, preventive checks, and rapid response from one team.",
    situations_hu: [
      { title: "Nincs belső IT / Műszaki csapat", desc: "Kis- és középvállalatok, ahol kiszervezett szakértői háttérre van szükség." },
      { title: "Garanciális & Üzembiztonsági félelmek", desc: "Kritikus rendszerek, ahol a leállás azonnali bevételkiesést jelent." },
      { title: "Rendszeres kötelező karbantartás", desc: "Biztonságtechnikai és villamos rendszerek jogszabályi felülvizsgálata." },
      { title: "Tervezhető havi üzemeltetési költség", desc: "Kiszámítható flat-rate havidíj váratlan szervizszámlák helyett." }
    ],
    situations_en: [
      { title: "No In-House Tech Team", desc: "SMEs requiring dedicated outsourced engineering support." },
      { title: "Uptime & Operational Risk Concerns", desc: "Mission-critical setups where halts mean immediate revenue losses." },
      { title: "Mandatory Compliance Maintenance", desc: "Statutory inspections for security and electrical installations." },
      { title: "Predictable Monthly Operating Costs", desc: "Fixed flat-rate fees replacing surprise repair invoices." }
    ],
    matrix_hu: [
      { title: "IT Üzemeltetés & Felügyelet", items: ["7/24 hálózati monitoring", "Microsoft 365 & felhasználói helpdesk", "Szerver biztonsági frissítések", "Automatikus adatmentés ellenőrzés"] },
      { title: "Biztonságtechnikai Üzemeltetés", items: ["Kamera optikák tisztítása & beállítása", "Riasztói akkumulátor cserék", "Beléptető kártyák és jogosultságok", "Távfelügyeleti tesztcsatlakozások"] },
      { title: "Villamos Karbantartás", items: ["Elosztó hőkamerás vizsgálata", "Szigetelési ellenállás mérés", "Szünetmentes tápok akkutestje", "Vészvilágítási próba"] },
      { title: "Szoftver Karbantartás", items: ["Szoftveres biztonsági javítások", "Adatbázis karbantartás", "API verziókövetés", "Teljesítmény-optimalizálás"] }
    ],
    matrix_en: [
      { title: "Managed IT & Monitoring", items: ["24/7 network uptime telemetry", "Microsoft 365 & user helpdesk", "Server security patch management", "Automated backup verification"] },
      { title: "Security Maintenance", items: ["CCTV lens cleaning & alignment", "Alarm battery replacements", "Access card privilege audits", "Monitoring station ping tests"] },
      { title: "Electrical Maintenance", items: ["Thermal camera panel scans", "Insulation resistance re-tests", "UPS battery load testing", "Emergency light checks"] },
      { title: "Software Maintenance", items: ["Software security patching", "Database optimization", "API versioning upgrades", "Performance tuning"] }
    ],
    process_hu: [
      { step: "01", title: "Rendszerfelvétel & Állapot-audit", desc: "Átvételkor pontos készlet- és állapotleltárt készítünk a felelősségi határokról." },
      { step: "02", title: "SLA szint és reakcióidő megállapodás", desc: "Írásban rögzítjük a hibaelhárítási reakcióidőket (pl. 4 órás vagy következő munkanapi reakció)." },
      { step: "03", title: "Proaktív monitoring & Karbantartás", desc: "Szenzorokkal figyeljük a hálózatot, és időszakosan megelőző karbantartást végzünk." },
      { step: "04", title: "Rendszeres riporting & Fejlesztési javaslat", desc: "Negyedéves riportban összefoglaljuk az üzemeltetési tapasztalatokat és a javasolt fejlesztéseket." }
    ],
    process_en: [
      { step: "01", title: "Onboarding & System Audit", desc: "Auditing assets and defining clear SLA responsibility boundaries." },
      { step: "02", title: "SLA Response Time Agreement", desc: "Establishing guaranteed response windows (e.g. 4-hour or next-business-day)." },
      { step: "03", title: "Proactive Telemetry & Visits", desc: "Deploying automated uptime sensors and scheduled site maintenance visits." },
      { step: "04", title: "Quarterly Reporting", desc: "Providing executive reports on system health and improvement roadmaps." }
    ],
    divisions: ["sironic", "siroved", "sirosoft", "sirovill"]
  }
};
