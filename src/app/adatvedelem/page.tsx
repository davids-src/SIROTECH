import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Adatkezelési Tájékoztató | SIROTECH",
  description:
    "A SIROTECH Kft. hivatalos adatkezelési tájékoztatója – tudjon meg többet személyes adatai kezeléséről és biztonságáról.",
  robots: { index: false, follow: true },
};

export default function AdatvedelemPage() {
  return (
    <div className="min-h-screen bg-bg text-ink py-16 px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} /> Vissza a főoldalra
          </Link>
        </div>

        {/* Header Title */}
        <div className="flex items-center gap-4 border-b border-line pb-8 mb-12">
          <span className="flex h-12 w-12 items-center justify-center rounded border border-line bg-surface text-silver">
            <Shield size={22} strokeWidth={1.5} />
          </span>
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Adatkezelési Tájékoztató
            </h1>
            <p className="mt-2 text-sm text-muted font-mono">
              Hatályos: 2026. 07. 11. napjától | Elérhető: sirotech.hu/adatvedelem
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-8 text-sm leading-relaxed text-muted/90">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              1. Bevezetés, az Adatkezelő adatai
            </h2>
            <p>
              Jelen Adatkezelési Tájékoztató (a továbbiakban: Tájékoztató) célja, hogy a{" "}
              <strong>sirotech.hu</strong> weboldal (és aldomainjei, szolgáltatási márkáinak weboldalai,
              mint a <em>sironic.hu</em>, <em>siroved.hu</em>, <em>sirosoft.hu</em>, <em>sirovill.hu</em>,
              a továbbiakban: Weboldal) látogatói és a Weboldalon keresztül kapcsolatba lépő
              érdeklődők (a továbbiakban: Érintett) számára átlátható, közérthető tájékoztatást nyújtson
              a személyes adataik kezeléséről, az Európai Parlament és a Tanács (EU) 2016/679 rendelete
              (a továbbiakban: GDPR), valamint az információs önrendelkezési jogról és az
              információszabadságról szóló 2011. évi CXII. törvény (a továbbiakban: Infotv.)
              rendelkezéseivel összhangban.
            </p>

            <div className="overflow-x-auto mt-6 rounded border border-line bg-surface/50">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-line bg-surface text-muted uppercase tracking-wider">
                    <th className="p-3">Adat megnevezése</th>
                    <th className="p-3">Érték</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr>
                    <td className="p-3 text-ink/70">Cégnév / Üzemeltető</td>
                    <td className="p-3 text-ink font-semibold">SIROTECH Kft.</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Székhely</td>
                    <td className="p-3 text-ink">8000 Székesfehérvár, Lövölde utca 24 4/15</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Adószám</td>
                    <td className="p-3 text-ink">33056151-2-07</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Cégjegyzékszám</td>
                    <td className="p-3 text-ink">07-09-037603</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Képviselő</td>
                    <td className="p-3 text-ink">Skoda Dávid András</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">E-mail cím</td>
                    <td className="p-3 text-ink">
                      <a href="mailto:hello@sironic.hu" className="text-silver hover:underline">
                        hello@sironic.hu
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Telefonszám</td>
                    <td className="p-3 text-ink">
                      <a href="tel:+36702735532" className="text-silver hover:underline">
                        +36 70 273 5532
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Weboldal</td>
                    <td className="p-3 text-ink">sirotech.hu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted/65 italic">
              Az Adatkezelő fenntartja a jogot jelen Tájékoztató egyoldalú módosítására, amelyről a
              Weboldalon történő közzététel útján tájékoztatja az Érintetteket. A módosítás nem érinti
              a már megadott adatok kezelésének jogszerűségét.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              2. Fogalommeghatározások
            </h2>
            <p>
              A Tájékoztatóban használt fogalmak a GDPR 4. cikkében meghatározottakkal egyeznek meg:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Személyes adat:</strong> azonosított vagy azonosítható természetes személyre
                („Érintett”) vonatkozó bármely információ.
              </li>
              <li>
                <strong>Adatkezelés:</strong> a személyes adatokon végzett bármely művelet (gyűjtés,
                rögzítés, tárolás, továbbítás, törlés stb.).
              </li>
              <li>
                <strong>Adatkezelő:</strong> aki az adatkezelés céljait és eszközeit meghatározza.
              </li>
              <li>
                <strong>Adatfeldolgozó:</strong> aki az Adatkezelő nevében, annak megbízásából kezel
                személyes adatokat (pl. tárhelyszolgáltató).
              </li>
              <li>
                <strong>Hozzájárulás:</strong> az Érintett önkéntes, konkrét, tájékozott és egyértelmű
                akaratnyilatkozata.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              3. Az adatkezelés alapelvei
            </h2>
            <p>
              Az Adatkezelő a személyes adatokat jogszerűen, tisztességesen és átlátható módon, célhoz
              kötötten, az adattakarékosság elvét szem előtt tartva, pontosan, korlátozott ideig,
              valamint megfelelő biztonsági intézkedések mellett kezeli, a GDPR 5. cikkében foglalt
              alapelveknek megfelelően.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-6">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              4. Az adatkezelés egyes esetei
            </h2>

            {/* 4.1 */}
            <div className="space-y-3 pl-4 border-l border-line">
              <h3 className="font-display text-base font-semibold text-ink">
                4.1. Ajánlatkérő űrlapok és kalkulátorok használata
              </h3>
              <p>
                A Weboldalon elérhető kapcsolatfelvételi vagy árajánlat-kalkulátor felületek
                segítségével az Érintett tájékoztató jellegű árajánlatot vagy visszahívást kérhet,
                amelynek során megadja a következő paramétereket:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Név / Kapcsolattartó neve</li>
                <li>Cégnév (vállalkozások esetén)</li>
                <li>E-mail cím</li>
                <li>Telefonszám</li>
                <li>Kiválasztott szolgáltatási márkák / Érdeklődési körök</li>
                <li>Az üzenet szöveges tartalma és esetleges projekt-paraméterek</li>
              </ul>
              <div className="mt-3 rounded border border-line bg-surface/30 p-4 text-xs space-y-2">
                <p>
                  <strong>Az adatkezelés célja:</strong> Egyedi árajánlat összeállítása és megküldése,
                  kapcsolatfelvétel, a szolgáltatások igénybevételének előkészítése.
                </p>
                <p>
                  <strong>Az adatkezelés jogalapja:</strong> A GDPR 6. cikk (1) bekezdés b) pontja –
                  szerződés megkötését megelőző lépések megtétele. Másodlagosan az Érintett önkéntes
                  hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).
                </p>
                <p>
                  <strong>Adattovábbítás:</strong> Az űrlapon megadott adatokat a rendszer automatikusan,
                  titkosított kapcsolaton át továbbítja az Adatkezelő levelező rendszerébe.
                </p>
                <p>
                  <strong>Időtartam:</strong> Szerződéskötés hiányában az ajánlatkéréstől számított legfeljebb
                  90 napig, ezt követően törlésre kerül. Szerződéskötés esetén a jogviszony megszűnéséig
                  és az elévülési idő végéig.
                </p>
              </div>
            </div>

            {/* 4.2 */}
            <div className="space-y-3 pl-4 border-l border-line">
              <h3 className="font-display text-base font-semibold text-ink">
                4.2. Kapcsolatfelvétel (telefon, e-mail, űrlapok)
              </h3>
              <p>
                Amennyiben az Érintett közvetlenül, telefonon, e-mailben vagy egyéb általános
                kapcsolatfelvételi űrlapon keresztül lép kapcsolatba az Adatkezelővel:
              </p>
              <div className="mt-3 rounded border border-line bg-surface/30 p-4 text-xs space-y-2">
                <p>
                  <strong>Az adatkezelés célja:</strong> A megkeresés megválaszolása, ügyfélszolgálati
                  kapcsolattartás.
                </p>
                <p>
                  <strong>Az adatkezelés jogalapja:</strong> GDPR 6. cikk (1) bekezdés a) pontja – az
                  Érintett önkéntes hozzájárulása.
                </p>
                <p>
                  <strong>Időtartam:</strong> A megkeresés megválaszolásáig, illetve az azt követő 30 napig,
                  amennyiben nem jön létre további üzleti kapcsolat.
                </p>
              </div>
            </div>

            {/* 4.3 */}
            <div className="space-y-3 pl-4 border-l border-line">
              <h3 className="font-display text-base font-semibold text-ink">
                4.3. Szerződéskötés, számlázás (szolgáltatás megrendelése esetén)
              </h3>
              <div className="mt-3 rounded border border-line bg-surface/30 p-4 text-xs space-y-2">
                <p>
                  <strong>Az adatkezelés célja:</strong> Szerződés teljesítése, számlázás, garanciális
                  és törvényi kötelezettségek végrehajtása.
                </p>
                <p>
                  <strong>Az adatkezelés jogalapja:</strong> GDPR 6. cikk (1) bekezdés b) pontja
                  (szerződés teljesítése), valamint c) pontja (számviteli/jogi kötelezettség teljesítése).
                </p>
                <p>
                  <strong>Időtartam:</strong> Számviteli bizonylatok (számlák) esetében a számvitelről
                  szóló 2000. évi C. törvény 169. § (2) bekezdése alapján 8 év. Egyéb szerződéses
                  dokumentumok esetében a szerződésből eredő igények elévüléséig (általános esetben 5 év).
                </p>
              </div>
            </div>

            {/* 4.4 */}
            <div className="space-y-3 pl-4 border-l border-line">
              <h3 className="font-display text-base font-semibold text-ink">
                4.4. Sütik (cookie-k) kezelése
              </h3>
              <p>
                A Weboldal működése során ún. sütiket (cookie-kat) alkalmaz a felhasználói élmény
                optimalizálása és statisztikai elemzések céljából.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>
                  <strong>Feltétlenül szükséges sütik:</strong> Elengedhetetlenek a Weboldal alapvető
                  működéséhez (pl. munkamenet-azonosítók). Jogalap: jogos érdek (GDPR 6. cikk (1) bek. f) pont).
                </li>
                <li>
                  <strong>Elemző/Statisztikai sütik (Google Analytics):</strong> Anonimizált adatgyűjtést
                  végeznek a látogatottság elemzésére. Elhelyezésük kizárólag az Érintett önkéntes
                  hozzájárulása esetén történik (GDPR 6. cikk (1) bek. a) pont).
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              5. Adatfeldolgozók és adattovábbítás
            </h2>
            <p>
              Az Adatkezelő a zökkenőmentes üzemeltetés érdekében az alábbi adatfeldolgozókat veszi
              igénybe:
            </p>
            <div className="overflow-x-auto rounded border border-line bg-surface/50">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-line bg-surface text-muted uppercase tracking-wider">
                    <th className="p-3">Tevékenység</th>
                    <th className="p-3">Név</th>
                    <th className="p-3">Székhely</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr>
                    <td className="p-3 text-ink/70">Tárhelyszolgáltatás, weboldal-üzemeltetés</td>
                    <td className="p-3 text-ink font-semibold">SIROTECH Kft.</td>
                    <td className="p-3 text-ink">8000 Székesfehérvár, Lövölde utca 24 4/15</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Látogatottsági statisztika (Analytics)</td>
                    <td className="p-3 text-ink font-semibold">Google Ireland Limited</td>
                    <td className="p-3 text-ink">Gordon House, Barrow Street, Dublin 4, Írország</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-ink/70">Könyvelés, számlázás</td>
                    <td className="p-3 text-ink font-semibold">Kinevezett könyvelő partner</td>
                    <td className="p-3 text-ink">Magyarország</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted/70">
              EGT-n kívüli adattovábbítás kizárólag a Google Analytics rendszerén keresztül történik,
              a Google adatvédelmi elvei és a standard szerződéses kikötések (SCC) betartása mellett.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              6. Az Érintettek jogai
            </h2>
            <p>
              Az Érintett az Adatkezelő elérhetőségein (hello@sironic.hu) keresztül az alábbi jogokat
              gyakorolhatja:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Tájékoztatáshoz és hozzáféréshez való jog:</strong> részletes információkat kaphat adatai kezeléséről.</li>
              <li><strong>Helyesbítéshez való jog:</strong> kérheti pontatlan adatai azonnali javítását.</li>
              <li><strong>Törléshez való jog:</strong> kérheti adatai törlését, ha az adatkezelés célja megszűnt vagy visszavonta hozzájárulását.</li>
              <li><strong>Az adatkezelés korlátozásához való jog.</strong></li>
              <li><strong>Adathordozhatósághoz való jog:</strong> kérheti adatainak átadását géppel olvasható formátumban.</li>
              <li><strong>Tiltakozáshoz való jog:</strong> jogos érdeken alapuló adatkezelés ellen tiltakozhat.</li>
              <li><strong>Hozzájárulás visszavonásának joga:</strong> bármikor ingyenesen visszavonhatja hozzájárulását.</li>
            </ul>
            <p>
              Az Adatkezelő a kérelmeket indokolatlan késedelem nélkül, de legkésőbb a beérkezéstől
              számított <strong>egy hónapon belül</strong> megválaszolja és teljesíti.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              7. Jogorvoslati lehetőségek
            </h2>
            <p>
              Amennyiben az Érintett úgy véli, hogy személyes adatai kezelése során megsértették a GDPR
              vagy az Infotv. előírásait, az alábbi helyeken kereshet jogorvoslatot:
            </p>
            <div className="grid gap-6 sm:grid-cols-2 mt-4 text-xs font-mono bg-surface/30 p-5 rounded border border-line">
              <div className="space-y-2">
                <p className="font-bold text-ink uppercase tracking-wider">Hatósági panasz:</p>
                <p className="text-ink">Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</p>
                <p className="text-muted/80">Székhely: 1055 Budapest, Falk Miksa utca 9–11.</p>
                <p className="text-muted/80">Postacím: 1363 Budapest, Pf. 9.</p>
                <p className="text-muted/80">Telefon: +36 (1) 391-1400</p>
                <p className="text-muted/80">E-mail: ugyfelszolgalat@naih.hu</p>
                <p className="text-muted/80">Web: www.naih.hu</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-ink uppercase tracking-wider">Bírósági jogorvoslat:</p>
                <p className="text-muted/90">
                  Az Érintett jogosult a jogainak megsértése esetén bírósághoz fordulni. A per a
                  törvényszék hatáskörébe tartozik.
                </p>
                <p className="text-muted/90 font-semibold text-silver">
                  A per – az Érintett választása szerint – a lakóhelye vagy tartózkodási helye
                  szerinti törvényszék előtt is megindítható.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display text-lg font-semibold text-ink tracking-tight uppercase border-l-2 border-silver pl-3">
              8. Adatbiztonsági intézkedések
            </h2>
            <p>
              Az Adatkezelő megfelelő technikai és szervezési intézkedésekkel gondoskodik a kezelt
              személyes adatok biztonságáról. Védi azokat a jogosulatlan hozzáférés, megváltoztatás,
              továbbítás, nyilvánosságra hozatal, törlés, megsemmisítés, valamint a véletlen
              megsemmisülés és sérülés ellen. Az Adatkezelő rendszereit és a Weboldalt üzemeltető
              tárhelyszolgáltató infrastruktúráját megfelelő fizikai, logikai és adminisztratív védelmi
              intézkedésekkel látja el.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-t border-line pt-8 mt-12">
            <h2 className="font-display text-sm font-semibold text-muted uppercase tracking-wider">
              9. Záró rendelkezések
            </h2>
            <p className="text-xs text-muted/70">
              Jelen Tájékoztatóra a magyar jog, elsősorban a GDPR és az Infotv. rendelkezései az
              irányadóak. Az Adatkezelő fenntartja a jogot, hogy jelen Tájékoztatót egyoldalúan, a
              Weboldalon történő közzététellel módosítsa.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
