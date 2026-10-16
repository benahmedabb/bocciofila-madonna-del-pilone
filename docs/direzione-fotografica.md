# Fotografie: fonti, trattamento e approvazione

## Stato

Selezione per l’anteprima locale del sito, 17 ottobre 2026. Le pagine pubbliche Google/Facebook non hanno fornito una galleria direttamente accessibile. Sono stati usati scatti associati a questo ristorante su Restaurant Guru e due immagini di archivio di Torino Oggi, non fotografie di altri locali né stock presentato come ristorante.

La selezione di Sluurpy aveva watermark ed è stata esclusa; nessuna sua immagine è negli asset del sito. Il trattamento non autorizza la pubblicazione commerciale degli scatti: verificare diritti, attualità e consenso della gestione prima del deploy. Le immagini di archivio hanno data e provenienza nelle didascalie. Il credito non sostituisce l’autorizzazione.

## Asset finali

| File in `public/images/ristorante/`               | Origine e trattamento                                                                                                                    |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `dehors-640.webp`, `dehors-1200.webp`             | Foto superiore del collage Restaurant Guru, ritaglio dell’area dei tavoli; rielaborazione generativa di esposizione, colore e nitidezza. |
| `ravioli-640.webp`, `ravioli-1200.webp`           | Foto inferiore destra dello stesso collage; rielaborazione generativa.                                                                   |
| `carne-patate-640.webp`, `carne-patate-1200.webp` | Foto inferiore sinistra dello stesso collage; rielaborazione generativa.                                                                 |
| `ingresso.webp`                                   | Foto d’archivio Torino Oggi 2020; solo conversione WebP.                                                                                 |
| `centenario.webp`                                 | Foto d’archivio Torino Oggi 2022; ridimensionamento e conversione WebP.                                                                  |

Le varianti 640/1200 servono a `srcset` per non scaricare immagini grandi su mobile: non sono doppioni accidentali. Tutti gli asset pubblici sono locali, non dipendono da hotlink. La copertina ha priorità alta; le immagini successive caricamento lazy, dimensioni e testo alternativo. I piatti non sono presentati come menù aggiornato.

Gli originali di riferimento restano in `docs/photo-sources/`, fuori dalla cartella pubblica:

- `osteria-original.jpg`: [pagina Restaurant Guru](https://restaurantguru.it/Bocciofila-Madonna-Del-Pilone-Turin), [immagine pubblica](https://img02.restaurantguru.com/c660-Club-LOsteria-Madonna-del-Pilone-meals.jpg).
- `ingresso-original.jpg`: [Torino Oggi, 31 luglio 2020](https://www.torinoggi.it/2020/07/31/leggi-notizia/argomenti/attualita-31/articolo/bocciofila-madonna-del-pilone-pronta-lapertura-della-nuova-area-giochi-con-orto-didattico.html), [immagine](https://www.torinoggi.it/fileadmin/archivio/torinoggi/bocciofila_madonna_pilone.jpg).
- `centenario-original.jpg`: [Torino Oggi, 26 febbraio 2022](https://www.torinoggi.it/2022/02/26/leggi-notizia/argomenti/attualita-31/articolo/per-i-suoi-100-anni-la-bocciofila-madonna-del-pilone-si-rifa-il-look-per-accogliere-giovani-adulti.html), [immagine](https://www.torinoggi.it/fileadmin/archivio/torinoggi/bocciofila_Madonna_del_Pilone.jpeg).

## Limite del ritocco AI

Le tre elaborazioni sono state prodotte con lo strumento integrato imagegen, non con CLI/API esterne. Sono ricavate da un collage a bassa risoluzione: il modello ricostruisce dettagli, non recupera informazioni fotografiche certe. Pur avendo richiesto fedeltà a piatti e ambienti, **non sono equivalenti agli originali pixel per pixel**. La gestione deve approvare impiattamento, porzioni e ambienti; per il materiale definitivo sono preferibili gli originali ad alta risoluzione. Il sito le identifica come fotografie rielaborate. Nessun menù, prezzo, recensione o disponibilità è derivato automaticamente dalle immagini.

## Prompt effettivi (strumento integrato)

Input di tutti e tre: `docs/photo-sources/osteria-original.jpg`. Sfondo non trasparente.

### Ravioli

Use case: lighting-weather. Edit target: the bottom-right individual photograph of square ravioli in the supplied collage, not the other two photographs. Extract only that existing photograph as a single standalone restaurant food photograph, keeping the same camera angle, same white plate, same pasta pieces and sauce, same actual table setting. Perform conservative photographic retouching: correct dim exposure and white balance, soften harsh glare, reduce JPEG noise and improve clarity, warm natural editorial food photography. Preserve the original food arrangement, quantities, textures, plate shape and visible background exactly; no new ingredients, garnishes, tableware, hands or objects. No invented restaurant decor. Do not change watermarks or credit marks if any are present in the selected photograph. Output just the retouched individual ravioli photograph, not a collage, no added lettering, portrait crop.

### Carne e patate

Use case: lighting-weather. Edit target: the bottom-left individual photograph of sliced beef with potatoes in the supplied collage, not the other two photographs. Extract only that existing photograph as a single standalone restaurant food photograph, maintaining the original camera angle, the same actual white plate, beef, potatoes and fork arrangement. Conservative photographic retouch only: improve exposure and natural warm white balance, control white-plate highlights, reduce JPEG compression noise, recover natural texture. Professional editorial food photograph, photorealistic, without changing the dish. Preserve all actual food portions, ingredient identity, proportions and plating. No new garnish, herbs, hands, utensils or decorations; no new background. Do not change watermarks or credits if present in this selected photograph. Output only the retouched beef and potatoes photograph, not a collage, no added lettering, portrait crop.

### Dehors

Use case: lighting-weather. Input image is a collage; edit target is ONLY the top photograph, and specifically its RIGHT-HAND TWO THIRDS (the area with the wooden tables, seated diners, white umbrellas, hedge and terrace). Create a single photographic crop of that existing right-hand portion, leaving out the separate lower food photos and the left-hand sticker area by framing, not by reconstructing anything. Conservative professional photographic correction: reduce digital noise, recover highlight detail in white umbrellas, balance yellow light toward natural warm evening light, subtle clarity. Keep all visible tables, chairs, terrace paving, hedge, umbrellas, people and their identity/poses exactly as in the source. Do not add lights, flowers, plates, people, furniture or vegetation. Do not reimagine or upgrade the restaurant architecture. Photorealistic documentary image, naturally warm restaurant editorial finish. Output one landscape photograph of only that selected terrace crop, no collage, no added text. Preserve any genuine credit mark in the selected crop.
