Mariusz Zalewski interview task

Minimalny, estetyczny formularz (Tailwind + shadcn/ui + Zod)
Pole

Walidacja (Zod)

Imię, nazwisko

2–40 znaków, litery PL/EN

Data urodzenia

format YYYY-MM-DD, ≥ 18 lat

Address line 1

5–60 znaków

Address line 2

opcjonalne, ≤ 60 znaków

Zip code

2-10 znaków, litery/cyfry

Region / województwo

wymagane DE, PL- string, US-select

City

wymagane

Country

wymagane (lista select dla uproszczenia DE, PL, US)

Zdjęcie 1 & 2

typ jpg/png/webp, min 512×512 px, max 1024×1024 px, ≤ 2 MB

Użyj komponentów formularza z shadcn/ui + Tailwind. Po pozytywnej walidacji wystarczy console.log() payloadu – bez backendu, zapakowane jako formdata.

Wymagania techniczne
Stack: TypeScript + React / Next.js (dowolna wersja), Tailwind CSS 3+, shadcn/ui, Zod.

Prześlij spakowany folder (.zip), struktura /src jak w typowym projekcie Next.

Brak dodatkowych bibliotek UI- keep it simple.

Komentarze w kodzie tylko tam, gdzie naprawdę coś wyjaśniają.
