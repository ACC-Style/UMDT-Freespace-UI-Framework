// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');


console.group(`// Micro-Interactions: COmposer Grid`);

var allCards = $(".composer--grid .card--element-node"),
    activeTab = $(".tabs-panel.is-active .content--tab");

console.log("tab wid", activeTab)

function checkWidth(array) {
    // check width of each
    array.each(function (index) {
        let element = $(this),
            elementWidth = element.width();
        // elementTextWidth = element.find(".card-title .text").width(),
        // actveTabWidth = activeTab.width();

        console.log(`name - ${element.find(".card-title .text").text()}, width: ${elementWidth}`);
        // console.log(`elementTextWidth:${elementTextWidth} vs elementWidth:${elementWidth}`);

        if (elementWidth < 200) {
            element.removeClass("-is-comfortable");
            element.addClass("-is-squeezed");

        } else {
            element.removeClass("-is-squeezed");
            element.addClass("-is-comfortable");

        }
    });
}
checkWidth(allCards);

$(window).resize(function () {
    checkWidth(allCards);

});
console.groupEnd();