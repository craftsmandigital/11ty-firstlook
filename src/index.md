---
title: Dette er index.htm
layout: blogpost.njk
pagination:
  data: collections.blog
  size: 2
  alias: blog
---
# {{ title }}

Dette var jo flott og her er mer ekst.

Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.




<ul>
{%- for post in blog-%}
  <li>{{ post.data.title }}</li>
{%- endfor -%}
</ul>



{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}

 faan i helvete 
{%- for species in pokemon %}
 - [{{species.name}}]({{species.url}}) 
 {{species.language}}
{% endfor -%}
