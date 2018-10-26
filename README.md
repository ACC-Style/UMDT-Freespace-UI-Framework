# Brunch + FreeSpace Foundation6

## Philosophy

_FreeSpace is:_
spacious, intuitive, clean, modern, informative, concise, welcoming, valuable

_FreeSpace is not_
noisy, chaotic, confusing, harsh, insensitive, elitist, ambiguous, boring, formal, bulky.

## Methodical Implementation System

Design:
Color Scheme
Typography
Animation
Border Radius
Box Shadow
Layout
Componenets:
Avatars
Buttons
Form elements
Grid
Links
Lists
Modals
Popovers
states
micro-interaction

## Getting started

This is a modern JS skeleton for [Brunch](http://brunch.io).

- Install (if you don't have them):
  - [Node.js](http://nodejs.org): `brew install node` on OS X
  - [Brunch](http://brunch.io): `npm install -g brunch`
  - Brunch plugins and app dependencies: `npm install`
    - issues please use "sass-brunch": "2.10.0" since there is other verison not compatible with newer node (https://github.com/brunch/sass-brunch/issues/128)
    - issue please use "jquery": "2.2.4" for Zurb foundationt to work well
    - this issuse of jquery is no longer requery. verison 3.1.1 is installed and usable.
- Run:
  - `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
  - `brunch build --production` — builds minified project for production
- Learn:
  _ `builds/dev` dir is fully auto-generated and served by HTTP server. Write your code in `app/` dir.
  _ Place static files you want to be copied from `app/assets/` to `builds/dev/`. \* [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
  ##Thrid Party Resouces

* https://datatables.net
* https://material.io/icons/
* https://foundation.zurb.com/sites/docs/

## Application Architecture

MVC

1. MODEL - data
2. VIEW - layout, pages
3. CONTROLLER - affordances, interactions, micro-interactions

## Template Architecture

The template architecture if built upon Pug (https://pugjs.org/api/getting-started.html)

1. MODULES - affordances, interactions,
2. LAYOUT - page/view sections (made of includes and must be name after HTML overarching HTML syntax-semantics element for example 'footer', 'head', aside)
3. VARIABLES - Contains only variables, mixins, or functions that don't to get render/output in HTML.
4. MASTER - clustering of components, modules, layout, variables, etc.
5. 'index.pug' - individual page (finalize consolidated page with custom content to that page)

## Style Architecture

The CSS follows the SMACSS guidelines (https://smacss.com/book/) modified as (BLAMV Approach) and follows the below rules strictly (module name | rule | prefix). All class or ids names must be explicitly stated ('#layout-banner' versus 'l-banner.'

1. BASE - (no classes nor ids) - rules are the defaults. They are almost exclusively single element selectors
1. LAYOUT - (ids only, prefix by 'layout-') - rules divide the page into sections. Layouts hold one or more modules together.
1. AFFORDANCES - (classes only suffix by state, for example, "is-selected) rules are ways to describe how our modules or layouts will look when in a particular state or base on interaction with the user(s).
1. MODULES - (classes only, component name) - Are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on. Naming convention follows the name of component/module, then For example '.comparemode-
1. VARIABLES - (no classes, id, or rules) Contains only variables, mixins, or functions that don't to get render/output in HTML.

##CSS Methodlogy: "Self Evident CSS"
The application CSS methodlogy and architect is based on a simply system of called 'Self Evident Method'. All elements are It MUST be self-evident (obvious by name alone) within the name itself including:

**WHY** Why does it exist? - describes the intentional noun of the element itself. This is the meaning of the element (for example '.menu')
**WHAT** What is it? - '--surfix' that describes the nature of the element in the application. This is the true identity of the elemnt (for example, '-dropdown')
**HOW** How does its fulfill it's 'why'? - '-surfix' that describes the manner of the element in the application. This is the way the elemnt fulfil its 'why' (for example, '.-option', '.menu--dropdown-link')
**WHEN** When does it do what it do? - '-is-state' describes the circumstances of the element. For example 'is-selected' (ex. .menu--dropdown-link:is-selected )

(1) self-evident name (after html syntaics and component)
(2) self-evidence what the aspect does
(3) self-evident what stae or affordance it attributes.

##HTML DOM Structure

grid > styler > elements

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

##Instructional Overaly
https://github.com/heelhook/chardin.js
