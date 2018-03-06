var $ = require('jquery');
var tree = require('../models/tree');


console.groupCollapsed(`//Vendor: Context Menu`);
// console.log(fancytree.version);

$.contextMenu({
    // define which elements trigger this menu
    selector: ".quib",
    // define the elements of the menu
    items: {
        foo: {
            name: "Foo",
            callback: function (e, key, currentMenuData) {
                alert("Foo!");
            }
        },
        bar: {
            name: "Bar",
            callback: function (e, key, currentMenuData) {
                alert("Bar!")
            }
        }
    }
    // there's more, have a look at the demos and docs...
});

console.groupEnd();