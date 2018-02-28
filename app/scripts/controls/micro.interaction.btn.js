// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');


console.groupCollapsed(`// Micro-Interactions`);




var allDataElementsItems = $("#list--concepts .feature--draggable_items-item"),
    allDataConceptsItems = $("#list--elements .feature--draggable_items-item"),
    totalEelement = allDataElementsItems.length,
    counterText = $(".panel--center-column-footer .counter"),
    allMicroInteractions = $('a[data-micro-interaction]'),
    allSideButtonLeft = $(".panel--left .panel--side-button");

counterText.text(totalEelement + "/" + totalEelement);
console.log("............:", totalEelement);


function init() {
    allSideButtonLeft.addClass("-is-not-selected");
}


// toogle button selections
console.log("............:", allSideButtonLeft.length);
console.log("............:", allMicroInteractions.length);

// allSideButtonLeft.forEach(toggleSelection);
$.each(allSideButtonLeft, toggleSelection);
allSideButtonLeft.click(toggleSelection);

function toggleSelection(button) {
    console.log(button);
    // if (button.hasClass()) {
    // console.log(enableBoolen);0
    // button.removeClass("-is-not-selected");
    // button.addClass("is-selected");
    // } else {
    // button.addClass("-is-not-selected");
    // button.removeClass("is-selected");
    // }
}
console.groupEnd();

init();