# Static Site Boilerplate  &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Static%20Site%20Boilerplate%3A%20A%20better%20workflow%20for%20building%20modern%20static%20websites&url=http://staticsiteboilerplate.com/&via=ericalli&hashtags=html,css,javascript,webdev)
[![Build Status](https://travis-ci.org/ericalli/static-site-boilerplate.svg?branch=master)](https://travis-ci.org/ericalli/static-site-boilerplate)
[![devDependency Status](https://david-dm.org/ericalli/static-site-boilerplate/dev-status.svg)](https://david-dm.org/ericalli/static-site-boilerplate?type=dev)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Support on Open Collective](https://img.shields.io/badge/support-on%20open%20collective-3285FF.svg?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAwIDQwIDQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+U2xpY2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIC0xLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iOjotaWNvbiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzIuNzc4ODkxNywyMC45MjExMjMgQzMyLjc3ODg5MTcsMjMuNDQ0MTIzMiAzMi4wNDYxNDI0LDI1Ljg2MTk5ODUgMzAuNzkwMDAwOSwyNy44NTkzNzM3IEwzNS45MTkyNDU0LDMzLjAxMDQ5OTIgQzM4LjQzMTUyODUsMjkuNjQ2NDk4OSA0MC4wMDE3MDU0LDI1LjQ0MTQ5ODQgNDAuMDAxNzA1NCwyMC45MjExMjMgQzQwLjAwMTcwNTQsMTYuNDAwNzQ3NSAzOC40MzE1Mjg1LDEyLjE5NTc0NzEgMzUuOTE5MjQ1NCw4LjgzMTc0Njc1IEwzMC43OTAwMDA5LDEzLjk4Mjg3MjMgQzMyLjA0NjE0MjQsMTUuOTgwMjQ3NSAzMi43Nzg4OTE3LDE4LjI5Mjk5NzcgMzIuNzc4ODkxNywyMC45MjExMjMgTDMyLjc3ODg5MTcsMjAuOTIxMTIzIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0I4RDNGNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjAxMzU4NTgsMzMuNzQ2Mzc0MyBDMTMuMDAwMTI5LDMzLjc0NjM3NDMgNy4yNDI4MTM3LDI3Ljk2NDQ5ODcgNy4yNDI4MTM3LDIwLjkyMTEyMyBDNy4yNDI4MTM3LDEzLjg3Nzc0NzMgMTMuMDAwMTI5LDguMDk1ODcxNjggMjAuMDEzNTg1OCw4LjA5NTg3MTY4IEMyMi42MzA1NDczLDguMDk1ODcxNjggMjQuOTMzNDczNCw4LjgzMTc0Njc1IDI2LjkyMjM2NDEsMTAuMTk4MzcxOSBMMzIuMDUxNjA4Nyw1LjA0NzI0NjM3IEMyOC43MDE4OTc5LDIuNTI0MjQ2MTEgMjQuNTE0NzU5NiwwLjk0NzM3MDk1NiAyMC4wMTM1ODU4LDAuOTQ3MzcwOTU2IEM5LjAyMjM0NzUyLDAuOTQ3MzcwOTU2IDAuMDE5OTk5OTgwOSw5Ljg4Mjk5Njg2IDAuMDE5OTk5OTgwOSwyMS4wMjYyNDggQzAuMDE5OTk5OTgwOSwzMi4xNjk0OTkxIDkuMDIyMzQ3NTIsNDEgMjAuMDEzNTg1OCw0MSBDMjQuNjE5NDM4LDQxIDI4LjgwNjU3NjQsMzkuNDIzMTI0OCAzMi4xNTYyODcxLDM2LjkwMDEyNDYgTDI3LjAyNzA0MjYsMzEuNzQ4OTk5MSBDMjUuMDM4MTUxOSwzMy4wMTA0OTkyIDIyLjYzMDU0NzMsMzMuNzQ2Mzc0MyAyMC4wMTM1ODU4LDMzLjc0NjM3NDMgTDIwLjAxMzU4NTgsMzMuNzQ2Mzc0MyBaIiBpZD0iU2hhcGUiIGZpbGw9IiMzMzg1RkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)](https://opencollective.com/static-site-boilerplate)
[![Join the chat at https://gitter.im/ericalli/static-site-boilerplate](https://badges.gitter.im/ericalli/static-site-boilerplate.svg)](https://gitter.im/ericalli/static-site-boilerplate?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


**Discuss it on [Product Hunt](https://www.producthunt.com/posts/static-site-boilerplate) 🦄**

[![Static Site Boilerplate](http://staticsiteboilerplate.com/externals/github.png)](https://github.com/ericalli/static-site-boilerplate/releases/latest)

* Homepage: [http://staticsiteboilerplate.com/](http://staticsiteboilerplate.com//)
* Documentation: [https://docs.staticsiteboilerplate.com/](https://docs.staticsiteboilerplate.com/)

## Installation

```bash
git clone https://github.com/ericalli/static-site-boilerplate
 ```
 
 ```bash
cd static-site-boilerplate
 ```
 
 ```bash
rm -rf .git && git init
 ```
 
 ## Features

* **Modern Technologies:** Full support for HTML5, JavaScript (Vanilla and ES6) and CSS (Sass and PostCSS)
* **Built-in Server:** Local development server with hot reloading
* **Performance Tuning:** CSS and JavaScript transpilation, bundling, autoprefixing, and minification
* **Image Optimization:** Optimizes images for loading speed
* **Favicon Generation:** Automatically generates all favicons for Web, Apple and Android devices from one image file
* **Code Linting:** Full support for JavaScript (ESLint) and CSS (StyleLint) linting
* **Sitemap & Robots.txt Generation:** Automatically generates a sitemap.xml and robots.txt files
* **Setup Wizard:** Optionally install helpful libraries and snippets including:
  * CSS Resets: `normalize.css` `reset.css` or `sanitize.css`
  * jQuery
  * Google Analytics
* **Cutting Edge:** Uses Webpack for processing and bundling your code 
* **Deployment:** Built-in support for deployment via FTP or Netlify 

## Browser Support

* Chrome _\(latest 2\)_
* Edge _\(latest 2\)_
* Firefox _\(latest 2\)_
* Internet Explorer 9+
* Opera _\(latest 2\)_
* Safari _\(latest 2\)_

_This  is fully dependent on your code and doesn't mean that Static Site Boilerplate won't work in older browsers, just that we'll ensure compatibility with the ones mentioned above._

## Support & Contributing

For general questions about Static Site Boilerplate, tweet at [@ericalli](https://twitter.com/ericalli).

Anyone is welcome to contribute. If you decide to get involved, please take a moment and check out the following:

* [Bug reports](.github/ISSUE_TEMPLATE/bug_report.md)
* [Feature requests](.github/ISSUE_TEMPLATE/feature_request.md)


## Sponsors

[**Become a sponsor**](https://opencollective.com/static-site-boilerplate) and get your company in front of thousands of engaged front end developers and support this project!

[![Become a sponsor](https://opencollective.com/static-site-boilerplate/tiers/backer.svg?avatarHeight=64)](https://opencollective.com/static-site-boilerplate)

## Author

**Eric Alli**

-   Website: <http://www.ericalli.com/>
-   Github: <https://github.com/ericalli/>

## License

The code is available under the [MIT license](LICENSE).
