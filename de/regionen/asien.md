---
title: Asien
lang: de
permalink: /de/regionen/asien/
---

# Asien

Kapitel mit Schwerpunkt Asien.

<ul>
{% assign chapters = site.pages | where_exp: "p", "p.path contains 'de/kapitel/'" | sort: "path" %}
{% for p in chapters %}
  {% if p.title %}
    {% if p.title contains "Iran" or p.title contains "Syrien" or p.title contains "Laos" or p.title contains "Tibet" or p.title contains "Kambodscha" or p.title contains "Japan" or p.title contains "Philippinen" or p.title contains "Afghanistan" or p.title contains "Südvietnam" %}
      <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>
