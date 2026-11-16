---
title: Sample essay
kind: essay            # research | in-progress | essay | note
date: 2026-11-16
# status: Draft        # Optional. Shown beside the date.
---

This is a sample entry. Delete this file once real writing is in place. It shows what running text looks like and how to write each element in Markdown.

## A subheading

A paragraph with *emphasis*, **strong emphasis**, a [link](https://example.com), and a footnote.[^1]

> A quotation is set off with a rule on the left.

- An unordered list item
- Another item

1. A numbered item
2. Another item

### A smaller subheading

To place an image with a caption, put the file in `assets/images/` and write:

    {% raw %}{% include figure.html src="/assets/images/file.jpg" alt="What it shows" caption="A brief caption" %}{% endraw %}

[^1]: Footnotes are collected at the end of the entry.
