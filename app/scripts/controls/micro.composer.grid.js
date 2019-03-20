// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');


console.groupCollapsed(`// Micro-Interactions: COmposer Grid`);

var allCards = $(".composer--grid .card--element-node"),
    activeTab = $(".tabs-panel.is-active .content--tab");

console.log("tab wid", activeTab)

function checkWidth(array) {
    // check width of each
    array.each(function (index) {
        let element = $(this),
            elementWidth = element.width(),
            elementTitleWidthContainer = element.find(".card-title").width(),
            elementTitleWidth = element.find(".card-title .text").width() + element.find(".card-title .icon").width();


        if (elementTitleWidthContainer < elementTitleWidth) {
            console.log('text is shorter', elementTitleWidthContainer, elementTitleWidth);
            element.removeClass("-is-comfortable");
            element.addClass("-is-squeezed");
        } else {
            console.log('text is longer', elementTitleWidthContainer, elementTitleWidth)
            element.removeClass("-is-squeezed");
            element.addClass("-is-comfortable");

        }

        // switch (elementWidth) {
        //     case 200:
        //         console.log(`elementWidth (old):${element.width()}`);

        //         // element.find(".card-title").width(newWidth + "%").addClass('mod');
        //         element.removeClass("-is-comfortable");
        //         element.addClass("-is-squeezed");

        //         console.log(`elementWidth (new): ${newWidth}`);
        //         break;
        //     case 150:
        //         console.log(`elementWidth (new): ${newWidth}`);

        //         break;
        //     case 75:
        //         console.log(`elementWidth (new): ${newWidth}`);

        //         break;
        //         // default:
        // }

        // if (elementWidth < 200) {
        //     console.log(`elementWidth:${element.width()}`);

        //     // element.find(".card-title").width(newWidth + "%").addClass('mod');
        //     element.removeClass("-is-comfortable");
        //     element.addClass("-is-squeezed");

        // } else if (elementWidth < 80) {
        //     console.log(`elementWidth:${element.width()}`);
        //     element.find(".card-title").width("23px").addClass('mod');
        //     element.removeClass("-is-comfortable");
        //     element.addClass("-is-squeezed");
        //     console.log(element.find(".card-title").width())
        // } else {
        //     console.log(`elementWidth - :${element.width()}`);
        //     element.removeClass("-is-squeezed");
        //     element.addClass("-is-comfortable");

        // }
    });
}
checkWidth(allCards);

$(window).resize(function () {
    checkWidth(allCards);

});
console.groupEnd();