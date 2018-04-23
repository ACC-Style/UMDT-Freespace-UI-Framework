var $ = require('jquery');


console.groupCollapsed(`//Vendor: Context Menu`);
// console.log(tree);

$.contextMenu({
    // define which elements trigger this menu
    selector: ".quib",
    // define the elements of the menu
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
            icon: "fa-edit",
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
        }
    }
    // there's more, have a look at the demos and docs...
});

$.contextMenu({
    selector: '.abba',
    callback: function (key, options) {
        var m = "clicked: " + key;
        window.console && console.log(m) || alert(m);
    },
    items: {
        "edit": {
            name: "Edit",
            icon: "fa-edit"
        },
        "cut": {
            name: "Delete",
            icon: "fa-trash"
        },
        copy: {
            name: "Cloud download",
            icon: "fa-cloud-download"
        },
        "paste": {
            name: "Certificate",
            icon: "fa-certificate"
        }
    }
});


$.contextMenu({
    selector: '.tabs-title',
    callback: function (key, options) {
        var m = "clicked: " + key;
        window.console && console.log(m) || alert(m);
    },
    items: {
        "save": {
            name: "Save",
            icon: "fa-save"
        },
        "close": {
            name: "Close",
            icon: "fa-times"
        }
    }
});
$('.abba').click(itemShower);
console.log($('.abba'));

function itemShower(e) {
    console.log('clicked', this);
}
console.groupEnd();