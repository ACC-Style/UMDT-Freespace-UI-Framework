"use strict";

// purpose - to determine which input fields has a value and remove the border-bottom style below it.
console.groupCollapsed(`// Micro-Interactions: Edit Mode 2`);

var $ = require('jquery');


// collect elements
var allInputsItems = $("input, textarea"),
    allColors = ["red", "blue", "greens"];

// log allColors
allColors.forEach(function (color) {
    console.log(color);
}, this);

// log allInputsItems
allInputsItems.each(function (index) {
    let element = $(this),
        value = element.val();

    console.log(index + ": " + value);
    // TODO: had class added to parent
    if (value == "") {
        element.addClass('-is-empty');
        console.log("empty")
    } else {
        console.log("filled")
        element.addClass('-is-filled');
        // $(this).parents('div').addClass('is-filled');
    }
});

console.groupEnd();