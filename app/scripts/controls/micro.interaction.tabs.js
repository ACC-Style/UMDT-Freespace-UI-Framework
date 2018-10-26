// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');
console.groupCollapsed(`// Micro-Interactions: Tabs`);

var FreespaceApp = window.FreespaceApp = {};

FreespaceApp.fix = {
    tabs() {
        let allTabs = $(".feature--tabs-list > .tabs li"),
            numberTabs = allTabs.length,
            maxWidth = $(".column--list-workspace").width(),
            tabWidth = (maxWidth / numberTabs);

        if (allTabs.length == 0) {
            console.log("no tabs")
            return
        }
        // calculate percentage not pixcel
        console.log(`test-${allTabs[1].outerHTML}`)

        // log tabs width
        allTabs.each(function (index) {
            let element = $(this);
            element.css("width", tabWidth);
            console.log(`name - ${element.text()} / width: ${element.width()} / ${element.outerHTML}`);
        });

    }
}
// init
FreespaceApp.fix.tabs();


console.groupEnd();