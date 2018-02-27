// use strict;
// code draft:
// grab all items with micro data attribute
// add to array collect
// function to determine attribute value
// functions for each value type

var $ = require('jquery');

console.log("............ workspace interactions:");

var allDataElementsItems = $(".column--list-elements-data .feature--draggable_items li"),
    allDataConceptsItems = $(".column--list-concepts-data .feature--draggable_items li"),
    allDataConceptsBookmarks = $(".column--list-concepts-data .feature--draggable_items li.-is-bookmarked "),
    allDataElementsBookmarks = $(".column--list-elements-data .feature--draggable_items li.-is-bookmarked "),
    allSelectedDataConceptsBookmarks = $(".column--list-elements-data .feature--draggable_items li.-is-selected "),
    allSelectedDataElementsBookmarks = $(".column--list-elements-data .feature--draggable_items li.-is-selected "),
    totalDataElementsItems = allDataElementsItems.length,
    totalDataConceptsItems = allDataConceptsItems.length,
    totalDataConceptsBookmarks = allDataConceptsBookmarks.length,
    totalDataElementsBookmarks = allDataConceptsBookmarks.length,
    counterDataConceptsItems = $(".column--list-concepts-counter .total"),
    counterDataElementsItems = $(".column--list-elements-counter .total"),
    counterSelectedDataElementsItems = $(".column--list-elements-counter .total-selected");


function updateCounter(elements, concepts, dbookmarks, ebookmarks) {
    counterDataElementsItems.text(totalDataElementsItems - totalDataElementsBookmarks + "/" + totalDataElementsItems);
    counterDataConceptsItems.text((totalDataConceptsItems - totalDataConceptsBookmarks) + "/" + totalDataConceptsItems);
    counterSelectedDataElementsItems.text(allSelectedDataElementsBookmarks.length);
    console.log(`number of bookmarks: ${totalDataConceptsBookmarks}`);
}

updateCounter(totalDataElementsItems, totalDataConceptsItems, totalDataConceptsBookmarks, totalDataElementsBookmarks);

console.log(`selected element: ${allSelectedDataElementsBookmarks.length}`);
console.log(`selected concepts: ${allSelectedDataConceptsBookmarks.length}`);

// console.log(allDataConceptsItems.text());

// var matchText = allDataConceptsItems.find("This");

// console.log(`matching ${allDataConceptsItems}`)