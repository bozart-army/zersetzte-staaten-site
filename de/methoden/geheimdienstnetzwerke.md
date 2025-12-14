---
title: Geheimdienstnetzwerke
lang: de
permalink: /de/methoden/geheimdienstnetzwerke/
---

# Geheimdienstnetzwerke

Diese Methode beschreibt den Aufbau, die Pflege und Nutzung verdeckter
Netzwerke aus Informanten, Frontorganisationen und operativen Knotenpunkten.
Sie bildet das infrastrukturelle Rückgrat langfristiger Einflussnahme.

## Typische Ausprägungen
- Rekrutierung von Informanten und Agenten
- Nutzung von Frontorganisationen und Tarnfirmen
- Kooperation mit lokalen Sicherheitsdiensten
- Langfristige Infiltration politischer, militärischer und medialer Strukturen

## Betroffene Kapitel

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Griechenland"
       or p.title contains "Iran"
       or p.title contains "Guatemala"
       or p.title contains "Kongo"
       or p.title contains "Italien"
       or p.title contains "Syrien"
       or p.title contains "Chile"
       or p.title contains "Ukraine" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Einordnung
Geheimdienstnetzwerke wirken meist unsichtbar, sind jedoch entscheidend
für die Umsetzung nahezu aller anderen Methoden. Sie ermöglichen Kontrolle,
Informationsvorsprung und operative Flexibilität über lange Zeiträume.
