# Bocciofila Madonna del Pilone

Sito Angular con Tailwind CSS 4, stile editoriale bordeaux/crema, fotografie locali ottimizzate e pagina di richiesta prenotazione. Progetto in anteprima, non pubblicato.

## Avvio

Esegui `npm start` da questa cartella. Home: `/`. Prenotazioni: `/prenotazioni` (anche `/prenota` reindirizza alla pagina).

Non sono stati avviati server, build, test o commit durante questo intervento. I controlli statici non sostituiscono la verifica nel browser.

Gli script usano la cache SQLite di Angular per evitare il problema LMDB già riscontrato su questo Mac. Tailwind è caricato da `src/tailwind.css`; gli stili editoriali restano in SCSS. Non sono necessarie nuove dipendenze.

## Prenotazioni

La pagina raccoglie giorno, persone, orario, nome e note facoltative, mostra un riepilogo e apre WhatsApp con il messaggio compilato. L’utente deve premere Invio in WhatsApp. Non vengono salvate prenotazioni nel browser o in un database; nessun messaggio viene spedito automaticamente. Il tavolo non è confermato finché la gestione non risponde.

**Attualmente è una prova sul numero di Ben: +39 351 253 0016.** Avvisi e prefisso del messaggio impediscono di confonderla con una prenotazione reale. Prima di pubblicare cambiare `whatsapp` e `bookingPreview` in `src/app/core/restaurant.config.ts`. Non modificare il numero dell’osteria per le telefonate senza conferma della gestione.

Per il calendario condiviso e i conteggi giornalieri vedi [piano gestionale](docs/prenotazioni.md). Il pannello e il backend non sono implementati: richiedono scelta del servizio, accessi e regole del locale.

## Fotografie e contenuti

Cinque immagini selezionate, otto file WebP incluse le taglie responsive. Gli originali di riferimento sono conservati in `docs/photo-sources/`, fuori dagli asset pubblici. Fonti, trattamento AI e prompt sono in [direzione fotografica](docs/direzione-fotografica.md). Non sono foto scaricate direttamente dalla scheda Google o da Facebook: quelle fonti non erano accessibili; sono state trovate su pagine pubbliche associate al ristorante.

Prima della pubblicazione far approvare fotografie e relativi diritti d’uso, corrispondenza con gli spazi e piatti attuali, nome legale, contatti, orari cucina, menù, tesseramento e informazioni privacy. La visibilità pubblica di una fotografia non dimostra il diritto di riutilizzarla. Per il risultato fotografico definitivo richiedere gli originali alla gestione.

Nessun menù/prezzo, disponibilità tavoli o orario di servizio è inventato. Nessun analytics, cookie di profilazione o mappa incorporata aggiunti. WhatsApp, Facebook e Maps sono collegamenti esterni.

La configurazione Angular resta statica/prerenderizzata. Il futuro deploy deve servire correttamente anche l’accesso diretto a `/prenotazioni`; caricare solo `dist/bocciofila/browser/`, non i bundle server. Deploy non eseguito.
