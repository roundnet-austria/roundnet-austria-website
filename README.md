master: [![Netlify Status](https://api.netlify.com/api/v1/badges/823b9c3d-624b-46e9-a7a1-d9e81ba3fd6b/deploy-status)](https://app.netlify.com/sites/roundnetaustria/deploys)

# roundnet-austria-website
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
