---
title: Putsch-Logistik
lang: de
permalink: /de/methoden/putsch/
---

# Putsch-Logistik

Putsch-Logistik bezeichnet die operative Vorbereitung, Durchführung und
Absicherung von Machtübernahmen außerhalb demokratischer Prozesse.
In den Akten dieses Archivs erscheint sie als wiederkehrendes Kerninstrument
verdeckter Einflussnahme.

## Typische Ausprägungen
- Kontakte zu Militär- und Sicherheitsapparaten
- Finanzierung und materielle Unterstützung
- Koordination lokaler Eliten und Fraktionen
- Absicherung der Machtübernahme (Anerkennung, Stabilisierung)

## Betroffene Kapitel

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Griechenland"
       or p.title contains "Iran"
       or p.title contains "Guatemala"
       or p.title contains "Chile"
       or p.title contains "Brasilien"
       or p.title contains "Indonesien"
       or p.title contains "Bolivien"
       or p.title contains "Serbien" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Einordnung
Putsch-Logistik ist selten ein isolierter Akt. Sie setzt auf bereits
vorbereitete politische, wirtschaftliche und mediale Bedingungen und
bildet häufig den Kulminationspunkt längerfristiger Interventionen.
