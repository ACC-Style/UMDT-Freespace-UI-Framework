// use strict;

var $ = require('jquery');
console.group(`// Vendor: Jquery UI - draggable`);

console.log(`verison ${$.ui.version}`);


var allElements = $(".content--tab .card--element-node"),
    allTargets = $(".composer--grid-cell");




function dragElements(elements) {
    console.log(`number of draggable elements: ${allElements.length} | number of target elements: ${allTargets.length}`);
    // make elements draggable
    $(allElements).draggable({
        // axis: "x",
        // handle: ".button-option-drag",
        // revert: true,
    });

    $(allTargets).droppable({
        accept: allElements,
        hoverClass: "-is-selected",
        // tolerance: "fit",
        // containment: ".composer--grid",
        // cursor: "crosshair",
        // cursorAt: {
        // top: -5,
        // left: -5
        // },

        activate: function (evt, ui) {
            $(this).find(".card--element-node").addClass("success");
            // $(this).find(".card--element-node").css("position", "relative");

        },
        deactivate: function (evt, ui) {
            $(this).find(".card--element-node").removeClass("success");
            // $(this).find(".card--element-node").addClass("success");

        },
        drop: function (evt, ui) {
            // $(this).append(ui.draggable);
            // $(this).find(".card--element-node").css("position", "inherit");
            // $(this).find(".card--element-node").removeAttr("style");
            // $(this).find(".card--element-node").addClass("success");
            // ui.draggable.find("h2").text("Dropped");
        }
    });

}

$("document").ready(function () {
    dragElements(allElements);
});



console.groupEnd();