"use strict";

// purpose - to determine which input fields has a value and remove the border-bottom style below it.
console.groupCollapsed(`// Micro-Interactions: Card Options`);

var $ = require('jquery');


// collect elements
var allInputsItems = $('button[data-micro-interaction="option"]');

allInputsItems.click(optionCollpaser);

function optionCollpaser(event) {
    let optionbutton = $(this),
        cardSection = optionbutton.closest(".card-divider").next(".card-section");


    console.log("optionbutton", optionbutton);

    if (cardSection.hasClass("-is-expanded")) {

        cardSection.removeClass("-is-expanded");
        cardSection.addClass("-is-collapsed");

        optionbutton.removeClass("-is-expanded");
        optionbutton.addClass("-is-collapsed");


    } else if (cardSection.hasClass("-is-collapsed")) {

        cardSection.removeClass("-is-collapsed");
        cardSection.addClass("-is-expanded");

        optionbutton.addClass("-is-expanded");
        optionbutton.removeClass("-is-collapsed");
    }
}

console.groupEnd();