---
title: Europa
lang: de
permalink: /de/regionen/europa/
---

# Europa

Kapitel mit Schwerpunkt Europa.

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Griechenland" or p.title contains "Italien" or p.title contains "Albanien" or p.title contains "Polen" or p.title contains "Jugoslawien" or p.title contains "Ukraine" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
