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

$("#data-table-concepts").fancytree({
    extensions: ["glyph", "wide", "table", "filter"],
    debugLevel: 4,
    checkbox: true,
    table: {
        indentation: 20, // indent 20px per node level
        nodeColumnIdx: 2, // render the node title into the 2nd column
        checkboxColumnIdx: 0 // render the checkboxes into the 1st column
    },
    renderColumns: function (event, data) {
        var node = data.node,
            $tdList = $(node.tr).find(">td");
        // (index #0 is rendered by fancytree by adding the checkbox)
        $tdList.eq(1).text(node.getIndexHier()).addClass("alignRight");
        // (index #2 is rendered by fancytree)
        $tdList.eq(3).text(node.key);
        $tdList.eq(4).html("<input type='checkbox' name='like' value='" + node.key + "'>");
    },
    filter: {
        autoApply: true, // Re-apply last filter if lazy data is loaded
        autoExpand: false, // Expand all branches that contain matches while filtered
        counter: true, // Show a badge with number of matching child nodes near parent icons
        fuzzy: true, // Match single characters in order, e.g. 'fb' will match 'FooBar'
        hideExpandedCounter: false, // Hide counter badge if parent is expanded
        hideExpanders: false, // Hide expanders if all child nodes are hidden by filter
        highlight: true, // Highlight matches by wrapping inside <mark> tags
        leavesOnly: false, // Match end nodes only
        nodata: true, // Display a 'no data' status node if result is empty
        mode: "hide" // Grayout unmatched nodes (pass "hide" to remove unmatched node instead)
    },
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
            doc: {
                text: "change_history"
            },
            docOpen: {
                text: "web_asset"
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
        url: "https://stage.tools.acc.org/UMDT/Templates/data/tree.json"
    },
    activate: function (event, data) {
        $("#statusLine").text(event.type + ": " + data.node);
    },
    select: function (event, data) {
        $("#statusLine").text(
            event.type + ": " + data.node.isSelected() + " " + data.node
        );
    },
});


$("#data-list-concepts").fancytree({
    extensions: ["glyph", "wide"],
    debugLevel: 4,
    checkbox: true,
    table: {
        indentation: 20, // indent 20px per node level
        nodeColumnIdx: 2, // render the node title into the 2nd column
        checkboxColumnIdx: 0 // render the checkboxes into the 1st column
    },
    renderColumns: function (event, data) {
        var node = data.node,
            $tdList = $(node.tr).find(">td");
        // (index #0 is rendered by fancytree by adding the checkbox)
        $tdList.eq(1).text(node.getIndexHier()).addClass("alignRight");
        // (index #2 is rendered by fancytree)
        $tdList.eq(3).text(node.key);
        $tdList.eq(4).html("<input type='checkbox' name='like' value='" + node.key + "'>");
    },
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
            doc: {
                text: "change_history"
            },
            docOpen: {
                text: "web_asset"
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
    activate: function (event, data) {
        $("#statusLine").text(event.type + ": " + data.node);
    },
    select: function (event, data) {
        $("#statusLine").text(
            event.type + ": " + data.node.isSelected() + " " + data.node
        );
    }
});

$.contextMenu({
    selector: "#data-list-concepts span.fancytree-title",
    items: {
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
$("input#filter-input").keyup(function (e) {
    console.log('...here');

    var n,
        tree = $.ui.fancytree.getTree(),
        args = "autoApply autoExpand fuzzy hideExpanders highlight leavesOnly nodata".split(" "),
        opts = {},
        filterFunc = $("#branchMode").is(":checked") ? tree.filterBranches : tree.filterNodes,
        match = $(this).val();
    console.log(tree)
    $.each(args, function (i, o) {
        opts[o] = $("#" + o).is(":checked");
    });

    // opts.mode = $("#hideMode").is(":checked") ? "hide" : "dimm";

    if (e && e.which === $.ui.keyCode.ESCAPE || $.trim(match) === "") {
        $(".icon-clear").click();
        return;
    }
    if ($("#regex").is(":checked")) {
        // Pass function to perform match
        n = filterFunc.call(tree, function (node) {
            return new RegExp(match, "i").test(node.title);
        }, opts);
    } else {
        // Pass a string to perform case insensitive matching
        n = filterFunc.call(tree, match, opts);
    }
    $(".icon-clear").attr("disabled", false);
    $(".total").text(`${n}/${args.length}`);
    // $(".total").text("(" + n + " matches)");
}).focus();

console.groupEnd();