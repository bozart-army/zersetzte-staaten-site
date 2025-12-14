---
title: Propaganda
lang: de
permalink: /de/methoden/propaganda/
---

# Propaganda

Propaganda bezeichnet gezielte psychologische Einflussnahme auf öffentliche
Wahrnehmung, Medien und politische Narrative. In den Akten dieses Archivs
erscheint sie wiederkehrend als vorbereitendes, begleitendes oder
nachträglich legitimierendes Instrument.

## Typische Ausprägungen
- Medienkampagnen (offen oder verdeckt)
- Diskreditierung politischer Akteure
- Erzeugung von Bedrohungsnarrativen
- Steuerung internationaler Berichterstattung

## Betroffene Kapitel

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Iran" 
       or p.title contains "Guatemala"
       or p.title contains "Chile"
       or p.title contains "Griechenland"
       or p.title contains "Jugoslawien"
       or p.title contains "Ukraine" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Einordnung
Propaganda wirkt selten isoliert. Sie ist eingebettet in breitere
Interventionsstrategien und dient häufig dazu, andere Maßnahmen
– etwa Sanktionen oder Putsche – gesellschaftlich anschlussfähig zu machen.
