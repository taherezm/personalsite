# Personal site — Taher Ezmerli

A small static site built with [Jekyll](https://jekyllrb.com) and published by GitHub Pages. Every page is a plain text file in this repository. Editing a file on github.com and committing it updates the site within a minute or two.

## Where things are

| To change | Edit |
| --- | --- |
| Name, profile links, email, menu, section groups | `_config.yml` |
| Biography and photograph | `index.md` |
| Writing | one file per piece in `_writing/` |
| Projects | one file per project in `_projects/` |
| Books | one file per book in `_books/` |
| Etc. (music, films, photographs, media) | one file per item in `_etc/` |
| Images | `assets/images/` |
| Design | `assets/css/site.css` |

The files named `sample-…` show the format for each section. Delete them once real content is in place.

## Adding an entry

Create a new file in the section's folder, named in lowercase with hyphens, ending in `.md` (for example `_writing/on-moral-luck.md`). The file name becomes the address: `/writing/on-moral-luck/`.

Each file starts with a short header between two `---` lines, followed by the text in [Markdown](https://www.markdownguide.org/basic-syntax/):

```
---
title: On moral luck
kind: essay
date: 2026-11-16
---

The text begins here.
```

Header fields:

| Field | Used in | Meaning |
| --- | --- | --- |
| `title` | all | Required. |
| `date` | all | Required, as `YYYY-MM-DD`. Sets the order, newest first. Writing shows the full date; Projects and Books show the year; Etc. does not show it. |
| `kind` | Writing, Etc. | Which group the entry appears under. Writing: `research`, `in-progress`, `essay`, `note`. Etc.: `music`, `film`, `photograph`, `media`, `other`. Groups are defined in `_config.yml`; an empty group is not shown. |
| `status` | all | Optional short label, such as `Draft`, `Ongoing` or `Reading`. |
| `author` | Books | The book's author. |
| `by` | Etc. | Director, artist, and so on. |
| `link` | all | Optional web address. |
| `link_label` | all | Optional text for that link on the entry's page. |
| `images` | all | Optional list of images shown as a grid (see below). |

How an entry appears in its section's list depends on what the file contains:

- With text below the header, the title links to the entry's own page.
- With no text but a `link`, the title links straight to that address.
- With neither, it is a plain line. This suits a list of films or albums.

## Images

Upload the image to `assets/images/`, then place it in the text with:

```
{% include figure.html src="/assets/images/file.jpg" alt="What it shows" caption="Optional caption" %}
```

For a grid of photographs, list them in the header instead:

```
---
title: Bloomington, autumn
kind: photograph
date: 2026-10-01
images:
  - src: /assets/images/one.jpg
    alt: What it shows
    caption: Optional caption
  - src: /assets/images/two.jpg
    alt: What it shows
---
```

Resize photographs to about 1600 pixels on the long side before uploading so pages stay fast.

The portrait on the first page is set with `photo:` in `index.md`.

## Typeface

The design is specified for Die Grotesk by Klim Type Foundry, which requires a licence. Until licensed files are added, **the site is set in a temporary fallback: Schibsted Grotesk** (SIL Open Font License, files in `assets/fonts/`).

To switch to Die Grotesk:

1. Buy a web-font licence from Klim and put the `.woff2` files in `assets/fonts/`.
2. Make the file names in `assets/css/die-grotesk.css` match yours.
3. Set `die_grotesk: true` in `_config.yml`.

Check the licence terms before committing the font files to a public repository; foundry licences commonly forbid that, in which case this repository should be private.

## Publishing

In the repository on github.com: Settings → Pages → Build and deployment → Source: "Deploy from a branch", then choose the `main` branch and `/ (root)`. The site appears at `https://taherezm.github.io/personalsite/`.

For a custom domain, add it under Settings → Pages, then in `_config.yml` set `url` to the domain and `baseurl` to `""`.

## Previewing on your own computer (optional)

With Ruby installed:

```
bundle install
bundle exec jekyll serve --baseurl ""
```

Then open `http://localhost:4000`.
