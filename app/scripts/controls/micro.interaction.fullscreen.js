var $ = require("jquery");

console.group(`// Micro-Interactions: Fullscreen Mode`);

var button = $('button[data-micro-interaction="fullscreen"]'),
    screen = $("body"),
    fullscreen = false;

console.log(`number for fullscreen buttons: ${button.length}`);

function changeScreenMode(event, boolen) {
    console.log($(this));

    let button = $(this);

    if (boolen == false) {
        fullscreen = true;
        screen.removeClass("-is-not-fullscreen");
        screen.addClass("-is-fullscreen");
        button.removeClass("-is-off");
        button.addClass("-is-on");
        button.find(".icon i").text("fullscreen_exit");
    } else {
        fullscreen = false;
        screen.removeClass("-is-fullscreen");
        screen.addClass("-is-not-fullscreen");
        button.removeClass("-is-on");
        button.addClass("-is-off");
        button.find(".icon i").text("fullscreen");
    }
    console.log(`fullscreen = ${boolen}`);
}
button.click(changeScreenMode(event, fullscreen));

console.groupEnd();