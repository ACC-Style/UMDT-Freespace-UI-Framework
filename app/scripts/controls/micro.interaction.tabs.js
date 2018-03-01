// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');
console.groupCollapsed(`// Micro-Interactions: Tabs`);
// collect elements
var allTabs = $(".feature--tabs-list > .tabs li"),
    numberTabs = allTabs.length,
    maxWidth = $(".column--list-workspace").width(),
    tabWidth = (maxWidth / numberTabs);
// calculate percentage not pixcel
console.log(`test-${allTabs[1].outerHTML}`)
// log tabs width
allTabs.each(function (index) {
    let element = $(this);
    element.css("width", tabWidth);
    console.log(`name - ${element.text()} / width: ${element.width()} / ${element.outerHTML}`);
});

console.groupEnd();