# Richieste tavolo e futuro calendario della sala

## Funzionamento attuale

- Pagina `/prenotazioni`, utilizzabile anche da mobile e da tastiera.
- Giorno, persone (1–50, limite del modulo, non capienza dichiarata), orario desiderato, nome, note facoltative.
- Controllo dei campi obbligatori e di date/orari passati nel fuso Europe/Rome, anche prima dell’apertura di WhatsApp.
- Riepilogo modificabile prima dell’apertura dell’app esterna.
- Messaggio URL-encoded, nessun invio automatico e nessuna registrazione persistente.
- Numero di prova indicato dall’utente: 393512530016. Avviso visibile e messaggio marcato come prova.
- Nessun orario proposto come disponibile: il locale deve confermare orario, apertura e tavolo.
- Non si possono contare automaticamente le prenotazioni dai clic su WhatsApp: apertura, invio e conferma sono eventi diversi.

## Interfaccia condivisa proposta (non ancora implementata)

Un calendario riservato, accessibile dal telefono della gestione, con:

1. Vista giornaliera: richieste, confermati, coperti attesi e cancellati, distinti per pranzo/cena.
2. Elenco con orario, nome, persone, note e stato; filtri per giorno e servizio.
3. Azioni conferma, rifiuta, modifica e annulla con cronologia.
4. Inserimento manuale per richieste ricevute al telefono o su WhatsApp.
5. Orari, giorni di chiusura, capienza e durata tavolo configurabili.

Per renderlo reale servono database condiviso e API protette, autenticazione della gestione, autorizzazioni lato server, controllo transazionale della capienza, protezione anti-spam, backup e retention dei dati. Le credenziali amministrative non vanno mai inserite nel frontend. LocalStorage non è un registro condiviso e non sarà usato come tale.

Da decidere con la gestione: fornitore/backend e relativo account, numero definitivo, orari e turni, capienza, conferma manuale o automatica, eventuali notifiche e indicazioni privacy. Non è stato attivato alcun servizio a pagamento, account esterno o archivio clienti.

Prima di pubblicare: sostituire il numero di prova nel file di configurazione, disattivare `bookingPreview` solo dopo conferma del destinatario, verificare il flusso completo sui telefoni effettivamente usati dalla gestione e completare le informazioni privacy.
