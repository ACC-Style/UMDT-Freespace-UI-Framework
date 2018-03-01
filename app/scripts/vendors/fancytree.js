console.groupCollapsed(`//Vendor: FancyTree`);

// Import LESS or CSS:
// import 'jquery.fancytree/dist/skin-lion/ui.fancytree.less';

const $ = require('jquery');
const tree = require('../models/tree');

const fancytree = require('jquery.fancytree');
require('jquery.fancytree/dist/modules/jquery.fancytree.edit');
require('jquery.fancytree/dist/modules/jquery.fancytree.filter');


console.log(fancytree.version);

$(function () {
    $('#tree').fancytree({
        extensions: ['edit', 'filter'],
        source: [{
            url: "..scripts/models/tree",
            cache: false
        }],
        // source: [{
        //         title: "Node 1",
        //         key: "1"
        //     },
        //     {
        //         title: "Folder 2",
        //         key: "2",
        //         folder: true,
        //         children: [{
        //                 title: "Node 2.1",
        //                 key: "3"
        //             },
        //             {
        //                 title: "Node 2.2",
        //                 key: "4"
        //             }
        //         ]
        //     }
        // ]
    });
    const tree = fancytree.getTree('#tree');
    // Note: Loading and initialization may be asynchronous, so the nodes may not be accessible yet.
})
console.groupEnd();