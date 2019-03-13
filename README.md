# Freespace UI Framework

**verison 1.1**

## The Philosophy

#### What it is?

_spacious, intuitive, clean, clear, informative, concise, welcoming, valuable_

#### What it is _not_?

_noisy, chaotic, confusing, harsh, insensitive, elitist, ambiguous, boring, formal, bulky._

## The Ontology

**color pallete**

![](https://via.placeholder.com/50/F5F6FA/000000/?text=F5F6FA)
![](https://via.placeholder.com/50/CA0A1D/FFFFFF/?text=CA0A1D)
![](https://via.placeholder.com/50/002B59/FFFFFF/?text=002B59)
![](https://via.placeholder.com/50/F0F3F8/000000/?text=F0F3F8)

![](https://via.placeholder.com/50/627BBE/FFFFFF/?text=627BBE)
![](https://via.placeholder.com/50/40c872/FFFFFF/?text=40c872)
![](https://via.placeholder.com/50/ffa200/FFFFFF/?text=ffa200)

**typography**

Heading: [Maven Pro](https://fonts.google.com/specimen/Maven%20Pro)

Body: [Lato](https://fonts.google.com/specimen/Lato)

Links: [Lato](https://fonts.google.com/specimen/Lato)

animation
border
box shadow
layout

#### IxD Pattrens

micro-interactions
states
buttons
form elements
grid
links
lists
modals
popovers

## Physiology

### Integrated Development Environment (IDE)

This is a modern JS skeleton for [Brunch.io](http://brunch.io).

- How to Install (if you don't have them):

  - [Node.js](http://nodejs.org): `brew install node` on OS X
  - [Brunch](http://brunch.io): `npm install -g brunch`
  - Brunch plugins and app dependencies: `npm install`
    - issues please use "sass-brunch": "2.10.0" since there is other verison not compatible with newer node (https://github.com/brunch/sass-brunch/issues/128)
    - issue please use "jquery": "2.2.4" for Zurb foundationt to work well
    - this issuse of jquery is no longer requery. verison 3.1.1 is installed and usable.

- How to Run:

  - `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
  - `brunch build --production` — builds minified project for production

- Learn:
  _ `builds/dev` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
  _ Place static files you want to be copied from `app/assets/` to `builds/dev/`. \* [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)

### Thrid Party Resouces

- [Datatables JS](https://datatables.net)
- [Material Icons](https://material.io/icons/)
- [Zurb Foundation 6](https://foundation.zurb.com/sites/docs/)
- [Instructional Overlays - Chardins.js](https://github.com/heelhook/chardin.js)

### Application Architecture

1. MODEL - data
2. VIEW - layout, pages
3. CONTROLLER - affordances, interactions, micro-interactions

### Template Architecture

The template architecture if built upon [Pug](https://pugjs.org/api/getting-started.html)

1. MODULES - affordances, interactions,
2. LAYOUT - page/view sections (made of includes and must be name after HTML overarching HTML syntax-semantics element for example 'footer', 'head', aside)
3. VARIABLES - Contains only variables, mixins, or functions that don't to get render/output in HTML.
4. MASTER - clustering of components, modules, layout, variables, etc.
5. 'index.pug' - individual page (finalize consolidated page with custom content to that page)

### CSS Structural Naming Convention: Axiomatic

**sample structure: _'.menu--option--dropdown-link.-is-selected'_**

The application CSS methodlogy and architect is based on a simply system of called Aximoatic ('Self Evident Method').

1. self-evident name (after html syntaics and component)
2. self-evidence what the aspect does
3. self-evident what stae or affordance it attributes.

All elements MUST answer the following within its name:

#### Why

> Why does it exist? - describes the intentional noun of the element itself. This is the meaning of the element
>
> > _ex: '.menu'_

#### What

> What is it? - '--surfix' that describes the nature of the element in the application. This is the true identity of the elemnt
>
> > _ex: '-dropdown'_

#### How

> How does its fulfill it's 'why'? - '-surfix' that describes the manner of the element in the application. This is the way the elemnt fulfil its 'why'
>
> > _ex: '.-option'
> > \_ex: '.menu--dropdown-link'_

#### When

> When does it do what it do? - '-is-state' describes the circumstances of the element. For example 'is-selected'
>
> > \_ex: '-is-selected'

### HTML DOM Structure: Zurb's XY-Grid

**sample structure: _grid > styler > elements_**

.grid
.medium-6.cell

        .form--input-radio

          fieldset
            legend Check these out
            input#checkbox1(type='checkbox')
            label(for='checkbox1') Checkbox 1
            input#checkbox2(type='checkbox', required='')
            label(for='checkbox2') Checkbox 2
            input#checkbox3(type='checkbox')
            label(for='checkbox3') Checkbox 3

### Git Notes

**commit messsaging best practice**
purpose: [file type(s)] - explicit and descriptive present tense wording of changes (problem/solution).

example:

bugfix: [html,css] - add 'h2' padding which fixes footer misalignment
