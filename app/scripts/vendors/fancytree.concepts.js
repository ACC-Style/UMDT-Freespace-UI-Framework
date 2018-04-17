console.group(`//Vendor: FancyTree - Concepts`);

// Import LESS or CSS:
// import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';

const $ = require('jquery');
// const tree = require('../models/tree');

const fancytree = require('jquery.fancytree');
require('jquery.fancytree/dist/modules/jquery.fancytree.edit');
require('jquery.fancytree/dist/modules/jquery.fancytree.filter');
require('jquery.fancytree/dist/modules/jquery.fancytree.wide.js');
require('jquery.fancytree/dist/modules/jquery.fancytree.table.js');
require('jquery.fancytree/dist/modules/jquery.fancytree.glyph.js');


console.log(fancytree.version);
// console.log(`list data: ${tree[0].title}`);

$("#data-list-concepts").fancytree({
    extensions: ["glyph", "wide", ],
    debugLevel: 4,
    checkbox: true,
    selectMode: 3,
    tooltip: function (event, data) {
        var node = data.node,
            data = node.data;

        if (data.author) {
            return node.title + ", " + data.author + ", " + data.year;
        }
    },
    glyph: {
        preset: "material",
        map: {
            _addClass: "material-icons",
            checkbox: {
                text: "check_box_outline_blank"
            },
            checkboxSelected: {
                text: "check_box"
            },
            checkboxUnknown: {
                text: "indeterminate_check_box"
            },
            dragHelper: {
                text: "play_arrow"
            },
            dropMarker: {
                text: "arrow-forward"
            },
            error: {
                text: "warning"
            },
            expanderClosed: {
                text: "chevron_right"
            },
            expanderLazy: {
                text: "last_page"
            },
            expanderOpen: {
                text: "expand_more"
            },
            loading: {
                text: "autorenew",
                addClass: "fancytree-helper-spin"
            },
            nodata: {
                text: "info"
            },
            noExpander: {
                text: ""
            },
            radio: {
                text: "radio_button_unchecked"
            },
            radioSelected: {
                text: "radio_button_checked"
            },
            // Default node icons.
            // (Use tree.options.icon callback to define custom icons based on node data)
            doc: {
                text: "change_history"
            },
            docOpen: {
                text: "web_asset"
                // text: "web_asset"
            },
            folder: {
                text: "folder"
            },
            folderOpen: {
                text: "folder_open"
            }
        }
    },
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

$.contextMenu({
    selector: "#data-list-concepts span.fancytree-title",
    items: {
        // "cut": {
        //     name: "Cut",
        //     icon: "cut",
        //     callback: function (key, opt) {
        //         var node = $.ui.fancytree.getNode(opt.$trigger);
        //         alert("Clicked on " + key + " on " + node);
        //     }
        // },
        // "copy": {
        //     name: "Copy",
        //     icon: "copy"
        // },
        // "paste": {
        //     name: "Paste",
        //     icon: "paste",
        //     // disabled: false
        // },
        // "sep1": "----",
        edit: {
            name: "Edit",
            icon: "fa-edit",
            callback: function (e, key, currentMenuData) {
                alert("Foo!");
            }
        },
        clone: {
            name: "Clone",
            icon: "fa-copy",
            callback: function (e, key, currentMenuData) {
                alert("Bar!")
            }
        },
        view: {
            name: "view",
            icon: "fa-edit",
            callback: function (e, key, currentMenuData) {
                // alert("View udpates!");
                console.log("tree")
            }
        },
        "more": {
            name: "More",
            items: {
                "sub1": {
                    name: "Sub 1"
                },
                "sub1": {
                    name: "Sub 2"
                }
            }
        }
    },
    callback: function (itemKey, opt) {
        var node = $.ui.fancytree.getNode(opt.$trigger);
        alert("select " + itemKey + " on " + node);
    }
});
$(".option-collapse").click(function () {
    $.ui.fancytree.getTree(1).visit(function (node) {
        node.setExpanded(false);
    });
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