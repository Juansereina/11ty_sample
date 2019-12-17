---
name: Name
title: Sample 11ty - Nested Components
lang: fr
permalink: "{{ lang }}/components.html"
layout: components.njk
pagination:
  data: components
  size: 2
  alias: component_list
components:
  - component:
    name: First component
    info: Data of the first component
  - component:
    name: Second component
    info: Data of the second component
---
