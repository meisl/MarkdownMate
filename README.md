### Purpose

Create/edit (rather simple & static) html pages with minimal effort, e.g. for github-pages.
#### Prime use-case:
* "contact-sheet" for a bunch of images; i.e. clickable thumbnails with additional information, both for individual images and general notes

### Goals

* make it *totally **easy for n00bs*** (aka: non-experts)
* make it (possible to optionally) work *in-browser only*, ie. only from local .html file(s) - no server involved.
* have the user enter Markdown, github-flavour (GFM)
* plus: via drag-n-drop whereever reasonable (most importantly: images and links)
* provide option to generate completely stand-alone html-output, ie.:
  - **images embedded via data-url**, *including favicon*
  - **NO** javascript in result
  - **NO** css *dependency* in result
* have the page's `<title>` editable


### Links/Inspiration

https://github.com/jbranchaud/js-play/blob/master/Markdown/grammar.md

https://daringfireball.net/projects/markdown/syntax

https://github.com/jgm/peg-markdown/blob/master/markdown_parser.leg

https://pegjs.org/documentation

https://pegjs.org/online

https://github.com/showdownjs/showdown

https://github.com/oscarmorrison/md-page
