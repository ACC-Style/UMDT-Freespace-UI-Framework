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
    allCollapseButtons = $('button[data-micro-interaction="collapse"]'),
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

allCollapseButtons.click(columnCollpaser);

//default column collapse css
allCollapseButtons.closest(".column--list.cell.medium-2").addClass("-is-expanded-column");

function columnCollpaser(event) {
    let targetColumn = $(this).closest(".column--list.cell.medium-2"),
        initialWidth = targetColumn.width() + "px";
    console.log(`initial width: ${initialWidth}`);
    // console.log(`closest parent: ${targetColumn.attr("class")}`);

    if (targetColumn.hasClass("-is-collapsed-column")) {
        targetColumn.removeClass("-is-collapsed-column");
        targetColumn.removeClass("-is-expanded-column");
        targetColumn.addClass("-is-expanded-column");
        // targetColumn.css("width", initialWidth);
        //     // hide options
        targetColumn.find("button[data-micro-interaction='clone']").show();
        targetColumn.find("button[data-micro-interaction='copy']").show();
        targetColumn.find("button[data-micro-interaction='expand']").show();

        //     // show some section in colmun
        targetColumn.find(".panel--center-column-features").show();
        targetColumn.find(".column--list-concepts-data").show();
        targetColumn.find(".column--list-elements-data").show();
        targetColumn.find(".column--list-elements-counter").show();
        targetColumn.find(".column--list-concepts-counter").show();
        //     // change icon
        $(this).find('.material-icons').text('skip_previous');
        $(this).attr("title", "expand column");

        // console.log(`${targetColumn.attr("class")} | expanded`);


    } else if (targetColumn.hasClass("-is-expanded-column")) {
        targetColumn.addClass("-is-collapsed-column");
        targetColumn.removeClass("-is-expanded-column");

        //     // hide options
        targetColumn.find("button[data-micro-interaction='clone']").hide();
        targetColumn.find("button[data-micro-interaction='copy']").hide();
        targetColumn.find("button[data-micro-interaction='expand']").hide();

        //     // hide some section in colmun
        targetColumn.find(".panel--center-column-features").hide();
        targetColumn.find(".column--list-concepts-data").hide();
        targetColumn.find(".column--list-elements-data").hide();
        targetColumn.find(".column--list-elements-counter").hide();
        targetColumn.find(".column--list-concepts-counter").hide();
        //     // change icon
        $(this).find('.material-icons').text('skip_next');
        $(this).attr("title", "collapse column");
        // console.log(`${targetColumn.attr("class")} | collapsed`);

    }
    FreespaceApp.fix.tabs();
    console.log(`${targetColumn.attr("class")}`);

}
console.groupEnd();

init();