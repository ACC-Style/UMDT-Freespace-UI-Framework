console.groupCollapsed(`// Micro-Interactions: Quick Filter`);

let all_inputs = $('.feature--filter-input'),
    all_input_clear_btns = $(".panel--center-column-features .icon-clear"),
    all_icons = $(".panel--center-column-features .icon");

console.log(`# of inputs: ${all_inputs.length}`)
console.log(`# of icons: ${all_icons.length}`);
console.log(`# of clears: ${all_input_clear_btns.length}`);

function valueDetector() {
    let element = $(this),
        val = element.val();

    if (val === "") {
        console.log(`empty`);
        $(element).parent("div").find("i").removeClass("-is-green");

    } else {
        console.log(`not-empty`);
        $(element).parent("div").find("i").addClass("-is-green");
    }
    console.log(`css: ${element.attr('class')} | val: ${val}`);

}

function clearInput() {
    let btn = $(this),
        input = $(btn).next();
    $(btn).parent("div").find("i").removeClass("-is-green");
    input.val("");

    console.log(`btn: ${btn.attr('class')} | input: ${input.attr('class')}`);

}

all_inputs.blur(valueDetector);
all_input_clear_btns.click(clearInput);

console.groupEnd();