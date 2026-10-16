# Bocciofila Madonna del Pilone — ricerca e piano

> Documento della prima bozza, mantenuto come storico della ricerca. Per lo stato aggiornato di fotografie e richieste WhatsApp vedere [direzione fotografica](direzione-fotografica.md), [prenotazioni](prenotazioni.md) e README. Le parti sotto che descrivono solo l’illustrazione CSS e prenotazioni non attivate sono superate dall’intervento successivo.

Ricerca del 17 ottobre 2026. Le informazioni pubbliche non sostituiscono la conferma della gestione. Non è una verifica esaustiva dei social: Facebook non è risultato accessibile e non è stato identificato con certezza un profilo Instagram ufficiale.

## Identità e fonti

| Informazione                                               | Evidenza                                                                     | Uso consigliato                                                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Gruppo Bocciofilo Madonna del Pilone, costituito nel 1922  | Comune, Circoscrizione 7 [1]                                                 | Storia del circolo                                                                                   |
| Viale Michelotti 102/A, Torino                             | Comune [1], bando [2]                                                        | Indirizzo; nome completo della strada: viale Suor Giovanna Francesca Michelotti                      |
| Cucina tipica piemontese                                   | Comune [1]                                                                   | Posizionamento del sito                                                                              |
| Mostre, concerti, serate a tema e incontri culturali       | Comune [1]                                                                   | Descrizione generale, senza calendario inventato                                                     |
| Circolo ASD / Bocciofila Madonna del Pilone                | Organizzatore ALI, evento 18 giugno 2026 [3]                                 | Indizio recente; chiedere ragione sociale e dati fiscali esatti                                      |
| Nome L’Osteria Madonna del Pilone                          | Restaurant Guru [4]                                                          | Denominazione commerciale da confermare                                                              |
| Telefono 011 899 9205                                      | Restaurant Guru [4], Sluurpy [5], organizzatori eventi storici [8]           | Inserito nella bozza, da verificare prima di pubblicare                                              |
| Dehors, parcheggio, accessibilità                          | Directory [4,5], Comune storico [6]                                          | Verificare caratteristiche effettive e dettagli prima di prometterli                                 |
| 18 campi all’aperto, bar/ristorante e sala riunioni/giochi | Pagina storica del Comune [6]                                                | Dato storico, non pubblicato come dotazione attuale                                                  |
| Iscrizione richiesta                                       | Sluurpy [5]; pagina storica Comune [6] parla di associarsi per usare i campi | Chiedere regole per ristorante, ospiti e tesseramento; non estendere automaticamente a ogni servizio |

## Informazioni discordanti o mancanti

- Orari: alcune directory riportano lunedì 11–18, martedì–sabato 11–23 e domenica 11–17. Altre riportano apertura alle 9, lunedì fino alle 19 o sabato dalle 12. Non equivalgono agli orari della cucina. Non inseriti nella bozza.
- Il vecchio Comune riporta 011 8980358, diverso dal numero ricorrente nelle fonti più recenti. Verificare con i gestori.
- Contatti mobili storici: 3317293939 (articolo 2021) e 3757327392 (evento 2022). Non usarli per WhatsApp senza verifica: potrebbero appartenere a vecchie gestioni.
- Menù: recensioni citano vitello tonnato, insalata russa, battuta e tajarin; sono testimonianze, non un menù attuale. Nessun piatto né prezzo presentato come disponibile.
- Notte Rossa Barbera indicizza il locale e un risotto al Barbera con crema di tomino e aneto [7]. La pagina non si apre nella ricerca: proposta di un evento, non menù corrente.
- Prezzi delle directory incoerenti: esclusi. Nessuna valutazione o recensione copiata sul sito.
- Storia della sede: alcune fonti indicano la sede attuale dal 1922, altre parlano di trasferimento nel 1946. Usare soltanto l’anno di fondazione del gruppo.
- Colore rosso: preferenza del committente, non identità visiva verificata. Bozza bordeaux e crema da validare con logo originale.
- Email, dominio esistente, gestori attuali, dati fiscali e affiliazione sportiva: non confermati.

## Social e materiali

Restaurant Guru collega Facebook tramite un redirect non accessibile [4]. Le ricerche mirate su Facebook e Instagram non hanno restituito un account ufficiale verificabile. Chiedere gli URL ai gestori prima di aggiungere collegamenti. Non usare foto o loghi delle recensioni come materiale autorizzato. La bozza usa un’illustrazione CSS originale; servono foto reali di ingresso, sala, dehors e 4–6 piatti, con permesso d’uso, oltre al logo.

## Prenotazioni: cosa significa frontend puro

Una pagina statica può mostrare un modulo e aprire un collegamento esterno. Da sola non può condividere disponibilità, salvare prenotazioni fra dispositivi, inviare email in modo affidabile o impedire doppie prenotazioni. LocalStorage non è un registro condiviso e le credenziali non devono essere inserite nel JavaScript pubblico.

Percorso suggerito:

1. Definire con la sala capienza per servizio, turni, durata dei tavoli, chiusure, limite gruppi, orario limite, responsabile delle richieste e modalità di cancellazione.
2. Per partire con costi minimi: form ospitato esterno con registro condiviso, richiesta soggetta a conferma manuale. Valutare piani gratuiti e condizioni effettive al momento della scelta. Nessun servizio è stato ancora selezionato o attivato. Il cliente deve leggere chiaramente «richiesta inviata, attende conferma».
3. Se c’è un numero WhatsApp operativo, un form frontend può preparare un messaggio con giorno, servizio, persone e nome. Il cliente deve inviarlo e lo staff confermare. Riduce telefonate ma lascia lavoro manuale; non attivato perché il numero non è verificato.
4. Per prenotazioni confermate subito: servizio esterno dedicato con disponibilità centralizzata. Il sito resta statico e non gestisci un server, ma il fornitore ha un backend e può avere costi o limiti.
5. Una sola agenda per richieste online, telefono e accessi in sala. Prova con pochi tavoli per servizio, poi estendi. Senza aggiornare l’agenda anche per le chiamate, resta il rischio di sovraprenotazione.

Nella bozza attuale il tasto chiama il telefono; nessun dato viene raccolto e nessuna prenotazione viene simulata. Il flusso online è lavoro successivo, dopo aver definito regole e canale con la gestione.

## Domande per l’incontro con la gestione

- Quali nome pubblico, ragione sociale, CF/P.IVA, sede e contatti devono apparire?
- Il ristorante è riservato ai soci? Come si ottiene la tessera, quanto costa, quali ospiti sono ammessi?
- Quali orari reali di cucina, chiusure e aperture festive?
- Menù aggiornato con prezzi, disponibilità e informazioni alimentari approvate?
- Quanti coperti a pranzo/cena e dentro/fuori? Quali turni? Come gestiscono pioggia e gruppi?
- Chi controlla le richieste e in quanto tempo? Quale recapito riceve le notifiche?
- Quali foto, logo e profili social sono ufficiali e utilizzabili?
- Chi approva i testi e fornisce l’informativa privacy per il flusso scelto?

## Pubblicazione

Progetto Angular esistente mantenuto. Output statico con prerender: `npm run build`; caricare il contenuto di `dist/bocciofila/browser/` nella cartella web del dominio su Hostinger (normalmente `public_html`). Non serve avviare Node sul server. Confermare con il pannello del piano acquistato percorso e dominio, poi provare HTTPS, pagina iniziale, ancore e collegamenti da telefono. Nessun deploy effettuato.

Prima di pubblicare: validare i dati, sostituire la dicitura di bozza, completare dati del titolare e informativa pertinente all’effettivo trattamento. La bozza non incorpora mappe, analytics, font remoti o widget di terzi; la mappa è un semplice link. I log dell’hosting e futuri moduli/widget vanno considerati nella configurazione privacy finale.

## Fonti

1. Comune di Torino, Bocciofile e S.O.M.S.: https://decentramento.comune.torino.it/circoscrizione7/vivere-circoscrizione/risorse-territorio/bocciofile-soms
2. Comune, bando impianto Michelotti 102/A (2018): https://servizi.comune.torino.it/consiglio/prg/documenti1/atti/allegati/201800571_1.pdf
3. ALI Intesa Sanpaolo, evento 18 giugno 2026: https://www.alintesasanpaolo.com/ALI/Home/ViewObj/79351
4. Restaurant Guru: https://restaurantguru.it/Bocciofila-Madonna-Del-Pilone-Turin
5. Sluurpy: https://www.sluurpy.it/torino/ristorante/214794/bocciofila-madonna-del-pilone
6. Comune, impianti sportivi (pagina storica): https://www.comune.torino.it/circ7/cm/pages/ServeBLOB.php/L/IT/IDPagina/820
7. Notte Rossa Barbera, risultato indicizzato, pagina non accessibile: https://www.notterossabarbera.it/piola/osteria-bocciofila-madonna-del-pilone
8. Evento Raspelli 2022: https://mincioedintorni.com/2022/12/16/raspelli-gastrocantante-tra-panettoni-artigianali-e-vini-monferrini-per-il-raspelli-day-torino-osteria-bocciofila-madonna-del-pilone-1922/
9. Città Metropolitana, pranzo su prenotazione febbraio 2026: https://www.cittametropolitana.torino.it/comunicazione/domenica-22-febbraio-si-cammina-sulle-orme-di-salgari-con-lassociazione-camminare

## Verifica tecnica della bozza

Build di produzione riuscita con home prerenderizzata e due test passati. Resta un avviso non bloccante sul CSS del componente (5,34 kB contro soglia di avviso 4 kB; sotto il limite di errore 8 kB). Verifica visuale in browser non eseguita. Cache Angular impostata a SQLite negli script per aggirare un crash LMDB locale.
