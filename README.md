master: [![Netlify Status](https://api.netlify.com/api/v1/badges/78a068f7-ef79-453b-aa08-bf2a2956c1f6/deploy-status)](https://app.netlify.com/sites/roundnetaustria/deploys)

develop: [![Netlify Status](https://api.netlify.com/api/v1/badges/94757cb0-1004-462b-b1f5-7ac3ab8b80f9/deploy-status)](https://app.netlify.com/sites/roundnetaustria-dev/deploys)

# static-roundnet-austria
Sources/Repository der Webseite von Roundnet Austria

![Sample](/static/features/new-website.png)

# Mitmachen

Es gibt zwei Arten, wie diese Webseite bearbeitet werden kann:
* Beiträge / Seiten / Content: [/content/README.md](content/)
* Gestaltung und Funktionen / Layout [/layouts/README.md](layouts/)

Generell funktioniert diese Webseite mit hugo. Mehr dazu gibt es [hier](https://gohugo.io/about/)

## Änderungen durchführen

Die folgenden Informationen über "Standard Funktionen" sollen einen Einblick geben, wie an der Webseite mitgearbeitet werden kann.


  
# Sonstige Punkte


## Mehrsprachigkeit

Ist zur Zeit deaktiviert.
Wenn sich jemand findet um die Beiträge zu übersetzen ..  die Struktur und entsprechenden Content-Files (`*.en.md`) sind teilweise schon vorbereitet.
Aktivieren geht im [`config.json`](/config.json) durch löschen der Zeile: `disableLanguages": ["en"]`.
Sonst "muss" für jedes Content-File ein übersetztes File mit der neuen Endung: `*.en.md` angelegt werden.
