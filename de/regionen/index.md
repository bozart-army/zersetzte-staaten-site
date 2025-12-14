---
title: Regionen
lang: de
permalink: /de/regionen/
---

# Regionen

Diese Übersicht gruppiert die Kapitel des Archivs nach geografischen
Schwerpunkten.

Die Zuordnung erfolgt automatisch anhand der in den einzelnen Akten
hinterlegten Metadaten (`regionen:`).

---

{% assign chapters = site.pages
  | where_exp: "p", "p.path contains 'de/kapitel/'"
  | sort: "path" %}

{% assign all_regions = "" | split: "" %}
{% for p in chapters %}
  {% if p.regionen %}
    {% for r in p.regionen %}
      {% unless all_regions contains r %}
        {% assign all_regions = all_regions | push: r %}
      {% endunless %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% assign all_regions = all_regions | sort %}

{% for region in all_regions %}
## {{ region }}

<ul>
{% for p in chapters %}
  {% if p.regionen contains region %}
    <li>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

---
{% endfor %}
