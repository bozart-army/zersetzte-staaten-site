---
title: Kapitel-Index
lang: de
permalink: /de/kapitel-index/
---

# Kapitel-Index

Dieses Verzeichnis bildet das zentrale Inhaltsverzeichnis des Archivs  
**„Zersetzte Staaten – Die Akten der Macht“**.

Alle Kapitel sind **chronologisch geordnet** und entsprechen exakt der Struktur des Buches.  
Jede Akte ist eigenständig lesbar, folgt aber einer gemeinsamen dokumentarischen Logik.

---

## Chronologische Übersicht

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    <li>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

---

## Hinweise zur Nutzung

- Die Kapitel erscheinen automatisch in dieser Liste, sobald eine neue Datei unter  
  `de/kapitel/` angelegt wird.
- Die Sortierung erfolgt nach Dateiname (z. B. `Kapitel-01-...`, `Kapitel-02-...`).
- Jedes Kapitel folgt der festen Struktur:
  Narrative Eröffnung → Geopolitik → Lokale Dynamik → Mittel → Folgen → Reflexion → Quellen.

Dieses Verzeichnis dient der **Orientierung**, nicht der Interpretation.  
Die Analyse erfolgt ausschließlich innerhalb der einzelnen Akten.
