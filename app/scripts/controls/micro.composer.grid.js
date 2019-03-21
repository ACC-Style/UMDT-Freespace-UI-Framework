// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require("jquery");

console.groupCollapsed(`// Micro-Interactions: COmposer Grid`);

var allCards = $(".composer--grid .card--element-node"),
  activeTab = $(".tabs-panel.is-active .content--tab");

console.log("tab wid", activeTab);

function checkWidth(array) {
  // check width of each
  array.each(function(index) {
    let element = $(this),
      elementWidth = element.width(),
      elementTitleWidthContainer = element.find(".card-title").width(),
      elementTitleWidth =
        element.find(".card-title .text").width() +
        element.find(".card-title .icon").width();

    if (elementWidth < 300) {
      console.log(
        `${element.attr("id")} with "${element
          .find(".card-title .text")
          .text()}" width is ${elementWidth}`
      );
      element.removeClass("-is-comfortable");
      element.addClass("-is-squeezed");
    } else {
      console.log(
        `${element.attr("id")} with "${element
          .find(".card-title .text")
          .text()}" width is ${elementWidth}`
      );
      element.removeClass("-is-squeezed");
      element.addClass("-is-comfortable");
    }
  });
}
checkWidth(allCards);

$(window).resize(function() {
  checkWidth(allCards);
});
console.groupEnd();
