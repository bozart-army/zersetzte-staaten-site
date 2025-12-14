---
title: Paramilitärische Operationen
lang: de
permalink: /de/methoden/paramilitaerisch/
---

# Paramilitärische Operationen

Paramilitärische Operationen umfassen den Einsatz, die Ausbildung oder
Unterstützung bewaffneter Gruppen außerhalb regulärer staatlicher Armeen.
Sie dienen der Einflussnahme bei gleichzeitiger formaler Distanzierung
staatlicher Auftraggeber.

## Typische Ausprägungen
- Ausbildung und Bewaffnung lokaler Milizen
- Einsatz von Stellvertreterkräften
- Geheimdienstlich koordinierte Kampfhandlungen
- Destabilisierung durch anhaltende Gewalt

## Betroffene Kapitel

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Laos"
       or p.title contains "Vietnam"
       or p.title contains "Angola"
       or p.title contains "Afghanistan"
       or p.title contains "Nicaragua"
       or p.title contains "El Salvador"
       or p.title contains "Sahel" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Einordnung
Paramilitärische Operationen ermöglichen anhaltende Einflussnahme
bei begrenzter politischer Verantwortlichkeit. Die Folgen treffen
überwiegend zivile Bevölkerungen und prägen Konflikte über Generationen.
