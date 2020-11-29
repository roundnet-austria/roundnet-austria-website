master: [![Netlify Status](https://api.netlify.com/api/v1/badges/78a068f7-ef79-453b-aa08-bf2a2956c1f6/deploy-status)](https://app.netlify.com/sites/roundnetaustria/deploys)

develop: [![Netlify Status](https://api.netlify.com/api/v1/badges/94757cb0-1004-462b-b1f5-7ac3ab8b80f9/deploy-status)](https://app.netlify.com/sites/roundnetaustria-dev/deploys)

# static-roundnet-austria
Sources/Repository der Webseite von Roundnet Austria

![Sample](/static/features/new-website.png)

# Mitmachen

Es gibt zwei Arten, wie diese Webseite bearbeitet werden kann:
* Beiträge / Content
* Gestaltung und Funktionen / Layout

Generell funktioniert diese Webseite mit hugo. Mehr dazu gibt es [hier](https://gohugo.io/about/)

## Content

siehe [/content/README.md](content/)

## Gestaltung und Funktionen

siehe [/layouts/README.md](layouts/)


### Mehrsprachigkeit

Ist zur Zeit deaktiviert, wenn sich jemand findet, die Struktur und entsprechenden Content-Files (`*.en.md`) sind teilweise schon vorbereitet.
Aktivieren geht im [`config.json`](/config.json) durch löschen der Zeile: `disableLanguages": ["en"]`.
