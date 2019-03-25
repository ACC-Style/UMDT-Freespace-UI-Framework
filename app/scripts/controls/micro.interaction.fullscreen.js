var $ = require("jquery");

console.group(`// Micro-Interactions: Fullscreen Mode`);

var allButtons = $("button[data-micro-interaction='fullscreen']"),
  allButtonCollpase = $(".panel--center-column-options button[data-micro-interaction='collapse']"),
  screen = $("body"),
  fullscreenMode = false;

function changeScreenMode() {
  // console.log($(this));

  var button = $(this);
  console.log("here");

  if (screen.hasClass("-is-not-fullscreen")) {
    screen.removeClass("-is-not-fullscreen");
    screen.addClass("-is-fullscreen");
    button.removeClass("-is-off");
    button.addClass("-is-on");
    button.find(".icon i").text("fullscreen_exit");
    button.attr("title", "exit fullscreen mode");
    allButtonCollpase.click();
    console.log(`fullscreenMode = ${fullscreenMode}`);
  } else if (screen.hasClass("-is-fullscreen")) {
    screen.removeClass("-is-fullscreen");
    screen.addClass("-is-not-fullscreen");
    button.removeClass("-is-on");
    button.addClass("-is-off");
    button.attr("title", "enter fullscreen mode");
    button.find(".icon i").text("fullscreen");
    console.log(`fullscreenMode = ${fullscreenMode}`);
  }
}

// console.log(`fullscreenMode *= ${fullscreenMode}`)
screen.addClass("-is-not-fullscreen");
allButtons.click(changeScreenMode);

// init(fullscreen);
console.groupEnd();