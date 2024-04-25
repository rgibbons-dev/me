---
title: Home
description: An optional, short, and accurate summary of the content of the page.
layout: base.njk
templateEngineOverride: njk, md
---

# Welcome to my blog!

There will be content here soon! In the meantime, checkout my GitHub (click on my 
name at the bottom), and if you're interested, take a look at my C.V. on the tab
of the same name.

{# By default, Eleventy pre-processes Markdown files as Liquid templates. Setting `templateEngineOverride` (https://www.11ty.dev/docs/languages/) in the front matter above tells Eleventy to pre-process as Nunjucks instead so we can use our `postlist` macro. #}
{% from 'postlist.njk' import postlist %}
{{ postlist(
	posts = collections.blogPosts,
	recentPostsCutoff = 3,
	more = '/archive/'
) }}
