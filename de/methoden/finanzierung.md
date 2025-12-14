---
title: Finanzierung & Parteienaufbau
lang: de
permalink: /de/methoden/finanzierung/
---

# Finanzierung & Parteienaufbau

Diese Methode umfasst verdeckte und offene finanzielle Unterstützung,
den gezielten Aufbau politischer Organisationen sowie die Lenkung
bestehender Parteien und Bewegungen. Sie dient häufig der langfristigen
Beeinflussung politischer Prozesse ohne unmittelbare Gewaltanwendung.

## Typische Ausprägungen
- Wahlkampfhilfen und verdeckte Geldflüsse
- Aufbau neuer Parteien oder Bewegungen
- Finanzierung von Gewerkschaften, NGOs oder Medien
- Langfristige Bindung politischer Eliten

## Betroffene Kapitel

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Italien"
       or p.title contains "Japan"
       or p.title contains "Philippinen"
       or p.title contains "Polen"
       or p.title contains "Serbien"
       or p.title contains "Ukraine"
       or p.title contains "Venezuela" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Einordnung
Finanzierung und Parteienaufbau wirken oft unsichtbar, entfalten ihre
Wirkung jedoch über Jahre oder Jahrzehnte. Sie bilden die infrastrukturelle
Basis vieler späterer Eskalationen.
