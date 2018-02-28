// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');
console.groupCollapsed(`// Micro-Interactions: Tabs`);
// collect elements
var allTabs = $(".feature--tabs-list .tabs li"),
    numberTabs = $(".feature--tabs-list .tabs li").length,
    maxWidth = $(".feature--tabs-list").width(),
    tabWidth = (maxWidth / numberTabs) - 0.95;
// calculate percentage not pixcel

// log tabs width
allTabs.each(function (index) {
    let element = $(this),
        width = element.width();
    element.width(tabWidth);
    console.log(width);
});

console.log(numberTabs.length);
console.log(maxWidth, "/", tabWidth);

console.groupEnd();