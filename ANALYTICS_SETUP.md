# SIROTECH GA4 Analytics Setup Guide

Ezt a dokumentumot a Google Analytics 4 (GA4) Adminisztrációs felületén kell használni a frissített weboldal méréseinek véglegesítéséhez.

## 1. Custom Dimensions (Egyéni Dimenziók) beállítása

A weboldal eseményei új, egyéni paramétereket küldenek a GA4-nek. Ezeket regisztrálni kell a GA4-ben ahhoz, hogy a jelentésekben láthatóak legyenek.

**Lépések:**
1. Nyissa meg a GA4 Admin felületét (fogaskerék ikon bal oldalt lent).
2. A Data display (Adatmegjelenítés) alatt kattintson a **Custom definitions** (Egyéni definíciók) menüpontra.
3. Kattintson a **Create custom dimensions** gombra, és hozza létre az alábbiakat (mindegyik Event / Esemény szintű legyen):

| Dimension name | Event parameter | Leírás |
| --- | --- | --- |
| Customer Type | `customer_type` | B2B vagy B2C választás (Vállalkozás / Magánszemély) |
| Request Type | `request_type` | Új kivitelezés, Bővítés, stb. |
| Project Type | `project_type` | A projekt jellege (ha alkalmazható) |
| Service | `service` | Szakág (IT, SEC, ELEC, DEV) |
| Region | `region` | Kiválasztott helyszín vagy lokáció oldal |
| CTA Location | `cta_location` | Melyik URL-ről indították az eseményt |
| Source Site | `source_site` | `sirotech` fix érték |
| Form Type | `form_type` | Melyik űrlap (`contact_form`) |

## 2. Key Events (Konverziók / Fő események) beállítása

Az űrlap sikeres beküldésekor a rendszer egy `generate_lead` eseményt küld.

**Lépések:**
1. Admin > Data display > **Events** (Események).
2. Keresse meg a `generate_lead` eseményt a listában (ehhez kellhet 24 óra az első éles teszt után).
3. Kapcsolja be a mellette lévő **Mark as key event** (Megjelölés fő eseményként) kapcsolót.
4. Ha nem akar várni 24 órát: Admin > Data display > **Key events** > New key event, és írja be pontosan: `generate_lead`.

## 3. Attribution Storage (First Touch / Last Touch)

A frontend `localStorage`-ben tárolja a kampányadatokat (utm_source, gclid, stb.), és a kapcsolatfelvételi űrlap kitöltésekor rejtett mezőként továbbítja a backendnek. Ezek az adatok bekerülnek az e-mail értesítőbe.
**GA4 oldalról nincs extra teendő ezzel kapcsolatban**, az adatokat a Nodemailer API juttatja el az Önök postaládájába a pontosabb offline attribúció érdekében.
