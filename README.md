# Sito di Luisa Donati

Sito statico (HTML + CSS), pronto per essere pubblicato gratuitamente con **GitHub Pages**.

## Struttura

```
luisadonati-site/
├── index.html         Home
├── travel.html        Travel with me (viaggi di gruppo, su misura, giornate con Luisa)
├── day-plans.html     Day Plans (programmi giornalieri da vendere)
├── abbondanza.html    Abbondanza & the Garden (B2B: retreat, corsi, residenze)
├── journal.html       Journal (blog)
├── about.html         About Luisa + contatti
├── css/style.css      Stili comuni (colori, font, versione mobile)
├── js/main.js         Piccoli comportamenti (form non ancora collegati, filtri Journal)
├── images/            Qui vanno le foto
├── sitemap.xml        Elenco delle pagine per Google
└── robots.txt         Istruzioni per i motori di ricerca
```

## 1. Pubblicare su GitHub Pages

1. Su github.com clicca **New repository**. Nome consigliato: `luisadonati-site`, visibilità **Public**.
2. Nella pagina del repository: **Add file → Upload files**, trascina tutto il contenuto di questa cartella (non la cartella stessa) e clicca **Commit changes**.
3. Vai in **Settings → Pages**. In *Build and deployment* scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`, poi **Save**.
4. Dopo 1–2 minuti il sito è online su `https://TUO-UTENTE.github.io/luisadonati-site/`.

## 2. Collegare il dominio luisadonati.com (solo al lancio)

Oggi il dominio punta al vecchio sito su Google Sites: cambiarlo **spegne il vecchio sito**, quindi fallo solo quando il nuovo è pronto.

1. In **Settings → Pages → Custom domain** scrivi `www.luisadonati.com` e salva (GitHub crea un file `CNAME`).
2. Dal pannello di chi gestisce il dominio (registrar), imposta i record DNS:
   - `www` → record **CNAME** verso `TUO-UTENTE.github.io`
   - dominio nudo `luisadonati.com` → record **A** verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Quando GitHub conferma il dominio, spunta **Enforce HTTPS**.

Verifica i valori aggiornati nella guida ufficiale: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## 3. Cosa completare prima del lancio

### Testi tra parentesi quadre
Cerca `[` in tutti i file: prezzi, date, capienza di Abbondanza, risposte alle FAQ, policy, handle Instagram. Vanno sostituiti con i dati veri di Luisa.

### Foto
Ogni foto è oggi un riquadro colorato con una descrizione, per esempio:
```html
<div style="aspect-ratio: 4 / 3; background: #C7B9A2; ...">[Small group walking in Urbino]</div>
```
Metti la foto in `images/` e sostituisci l'intero `<div>` con:
```html
<img class="photo" src="images/urbino-group.jpg" alt="Small group walking in Urbino" style="aspect-ratio: 4 / 3">
```

### Newsletter
GitHub Pages ospita solo file statici, quindi i form vanno collegati a un servizio esterno.
- Crea il form di iscrizione nella piattaforma scelta (Mailchimp, Kit, Flodesk…).
- Copia l'indirizzo `action` del loro form embed nel `<form>` della sezione `id="letter"` di `index.html` e nel form di `journal.html`, e rinomina i campi come richiesto dalla piattaforma (es. `name="EMAIL"` per Mailchimp).

### Form di richiesta viaggio, brochure Abbondanza e contatti
Usa un servizio di form per siti statici (es. Formspree, Basin, Getform): ti dà un indirizzo da mettere in `action="..."` con `method="POST"`, e aggiungi `name="..."` a ogni campo. Le risposte arrivano via email a Luisa.

### Vendita dei Day Plans
Il sito non può gestire pagamenti da solo. Crea i prodotti digitali su una piattaforma come Lemon Squeezy, Gumroad, Payhip o Shopify (consegna automatica del PDF) e sostituisci i link "Add to bag" in `day-plans.html` con i link di acquisto.

### Widget Instagram
Crea un feed con un servizio come Behold, Elfsight o SnapWidget (serve l'account Instagram professionale di Luisa). Nella sezione "My Italy, day by day" di `index.html` sostituisci la griglia di riquadri `[Post]` con il codice embed che ti danno.

### Statistiche
Aggiungi Google Analytics 4 (o Plausible) incollando il loro snippet prima di `</head>` in ogni pagina.

## 4. Modifiche future

- **Colori e font comuni:** `css/style.css`.
- **Testi:** direttamente nei file `.html` (puoi modificarli anche dal browser su GitHub, con l'icona della matita, e poi *Commit changes*).
- Ogni modifica salvata su GitHub va online da sola in 1–2 minuti.

Se un giorno Luisa vorrà aggiornare il sito da sola senza toccare il codice, si potrà passare a una piattaforma con editor visuale riusando gli stessi testi e lo stesso design.
