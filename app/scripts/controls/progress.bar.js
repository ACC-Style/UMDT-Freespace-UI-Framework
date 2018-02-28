// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');

console.groupCollapsed(`// Progress Bar`);



// on page load...
moveProgressBar();
// on browser resize...
// $(window).resize(function () {
//     moveProgressBar();
// });
$(".banner--logo-acc").click(moveProgressBar);
$("a.quib-link").click(moveProgressBar);



// SIGNATURE PROGRESS
function moveProgressBar() {
    let currentProgress = $('.content--progress').data('progress-percent'),
        calculatedProgress = (currentProgress / 100),
        pageWidth = $('.content--progress').width();
    // console.log("progress bar: width=" + pageWidth);

    let progressTotal = calculatedProgress * pageWidth;
    let animationLength = 2500;

    $(".progress-bar-number").text(currentProgress + "%");
    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}

// $(".banner--logo-acc").click(moveProgressBar);

// function moveProgressBar() {
//     var elem = $('.content--progress');
//     var width = 1;
//     var id = setInterval(frame, 10);

//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             $('.progress-bar').width = width + '%';
//         }
//     }
// }

console.groupEnd();