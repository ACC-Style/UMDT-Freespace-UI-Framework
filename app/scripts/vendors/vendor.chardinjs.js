var $ = require('jquery');


console.groupCollapsed(`//Vendor: Coach Marks (chardin.js)`);
var allChardinBtns = $('.chardin-btn-help');

allChardinBtns.click(startChardinJs);

function startChardinJs() {
    console.log('start overlay');
    $('body').chardinJs('start');
}

console.groupEnd();