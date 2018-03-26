console.group(`//Vendor: FancyTree`);

// Import LESS or CSS:
// import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';

const $ = require('jquery');
// const tree = require('../models/tree');

const fancytree = require('jquery.fancytree');
require('jquery.fancytree/dist/modules/jquery.fancytree.edit');
require('jquery.fancytree/dist/modules/jquery.fancytree.filter');


console.log(fancytree.version);
// console.log(`list data: ${tree[0].title}`);

$("#data-list-elements").fancytree({
    checkbox: true,
    selectMode: 3,
    source: {
        url: "../data/tree.json"
    },
    // lazyLoad: function (event, data) {
    //     data.result = {
    //         url: "https://cdn.rawgit.com/mar10/fancytree/72e03685/demo/ajax-sub2.json"
    //     };
    // },
    activate: function (event, data) {
        $("#statusLine").text(event.type + ": " + data.node);
    },
    select: function (event, data) {
        $("#statusLine").text(
            event.type + ": " + data.node.isSelected() + " " + data.node
        );
    },
    // extensions: ["glyph"],
    // icon: function (event, data) {
    //     // (Optional dynamic icon definition...)
    // },
    // glyph: {
    //     // The preset defines defaults for all supported icon types.
    //     // It also defines a common class name that is prepended (in this case 'fa ')
    //     preset: "awesome4",
    //     map: {
    //         // Override distinct default icons here
    //         folder: "fa-folder",
    //         folderOpen: "fa-folder-open"
    //     }
    // },
});

// Select a node on click
// $("#button1").click(function () {
//     var tree = $.ui.fancytree.getTree(),
//         node = tree.findFirst(function (n) {
//             return n.title === "The Hobbit";
//         });

//     node.toggleSelected();
// });
console.groupEnd();