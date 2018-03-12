console.groupCollapsed(`// Micro-Interactions: Edit Mode`);

console.log("............ micro interactions: EDIT MODE");

var allElements = $('*[data-micro-interaction-type="edit-mode"]'),
    allInputs = $("input[disabled]"),
    allTogglesElement = $("*[data-micro-interaction='toggle']"),
    enableBoolen = false,
    target = $("*[data-micro-interaction-target]");


function init() {
    // allTogglesElement.addClass("-is-hidden");
    target.addClass("-edit-mode-off");
}


console.log(allElements)
console.log(enableBoolen);

allElements.click(toggleEditMode);

function toggleEditMode(element) {

    var $this = $(this);

    console.log(target);

    if (enableBoolen === false) {
        enableBoolen = true;
        console.log(enableBoolen);
        target.removeClass("-edit-mode-off");
        target.addClass("-edit-mode-on");
        allTogglesElement.removeClass("-is-hidden");
    } else {
        enableBoolen = false;
        target.addClass("-edit-mode-off");
        target.removeClass("-edit-mode-on");
        allTogglesElement.addClass("-is-hidden");
        console.log(enableBoolen);
    }
}

console.groupEnd();

init();