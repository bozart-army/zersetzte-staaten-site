---
title: Methoden
lang: de
permalink: /de/methoden/
---

# Methoden

Diese Übersicht gruppiert Kapitel nach wiederkehrenden Eingriffsmustern.
Sie dient ausschließlich der Navigation und Mustererkennung –  
nicht der zusätzlichen Interpretation.

---

{% assign chapters = site.pages
  | where_exp: "p", "p.path contains 'de/kapitel/'"
  | sort: "path" %}

## [Propaganda](/de/methoden/propaganda/)
- Psychologische Operationen
- Medienkampagnen
- Gerüchte, Narrative, Desinformation

<ul>
{% for p in chapters %}
  {% if p.methoden contains 'Propaganda' %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

---

## [Putsch-Logistik](/de/methoden/putsch/)
- Kontakte zu Militär- und Elitenetzwerken
- Finanzierung, Ausrüstung, Koordination
- Unterstützung nach der Machtübernahme

<ul>
{% for p in chapters %}
  {% if p.methoden contains 'Putsch-Logistik' %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

---

## [Finanzierung & Parteienaufbau](/de/methoden/finanzierung/)
- Wahlhilfe, verdeckte Geldflüsse
- Aufbau und Lenkung politischer Kräfte

<ul>
{% for p in chapters %}
  {% if p.methoden contains 'Finanzierung & Parteienaufbau' %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

---

## [Sanktionen & wirtschaftlicher Druck](/de/methoden/sanktionen/)
- Blockaden, Kreditpolitik, Handelsdruck

<ul>
{% for p in chapters %}
  {% if p.methoden contains 'Sanktionen & wirtschaftlicher Druck' %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

---

## [Paramilitärische Operationen](/de/methoden/paramilitaerisch/)
- Ausbildung, Bewaffnung, Stellvertreterkräfte

<ul>
{% for p in chapters %}
  {% if p.methoden contains 'Paramilitärische Operationen' %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

---

## [Geheimdienstnetzwerke](/de/methoden/geheimdienstnetzwerke/)
- Informanten
- Frontorganisationen
- Verdeckte Infrastruktur

<ul>
{% for p in chapters %}
  {% if p.methoden contains 'Geheimdienstnetzwerke' %}
    <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
