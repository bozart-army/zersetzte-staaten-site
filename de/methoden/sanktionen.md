---
title: Sanktionen & wirtschaftlicher Druck
lang: de
permalink: /de/methoden/sanktionen/
---

# Sanktionen & wirtschaftlicher Druck

Diese Methode umfasst den gezielten Einsatz wirtschaftlicher Maßnahmen,
um politischen Druck auf Staaten, Regierungen oder Bevölkerungen auszuüben.
Sie wirkt häufig schleichend, mit langfristigen sozialen und politischen Folgen.

## Typische Ausprägungen
- Wirtschaftssanktionen und Handelsbeschränkungen
- Kredit- und Finanzblockaden
- Einflussnahme über internationale Institutionen
- Destabilisierung durch wirtschaftliche Verknappung

## Betroffene Kapitel

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Iran"
       or p.title contains "Kuba"
       or p.title contains "Irak"
       or p.title contains "Venezuela"
       or p.title contains "Syrien"
       or p.title contains "Libyen" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Einordnung
Wirtschaftlicher Druck wird oft als „friedliche“ Maßnahme dargestellt,
kann jedoch tiefgreifende humanitäre und politische Auswirkungen haben.
Er fungiert häufig als vorbereitendes oder flankierendes Instrument
weiterer Interventionen.
