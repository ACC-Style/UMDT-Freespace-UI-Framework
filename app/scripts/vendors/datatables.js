var $ = require('jquery');
console.groupCollapsed(`//Vendor: Datatable`);

console.log($.fn.dataTable.version);

$('#data--table-search').DataTable({
    fixedHeader: true,
    "oLanguage": {
        "sSearch": "Quick filter:",
        // "sInfo": "Showing _TOTAL_ entries to show (_START_ to _END_)"
    },
    dom: 'l<"#datatable--select-custom">frtip'
});

$('#data--table-projects').DataTable({
    fixedHeader: false,
    "searching": false,
    "paging": false,
    "oLanguage": {
        "sSearch": "Quick search:",
        // "sInfo": "Showing _TOTAL_ entries to show (_START_ to _END_)"
    }
    //dom: 'l<"#datatable--select-custom">frtip'
});

$('#data--table-users').DataTable({
    fixedHeader: true,
    "searching": true,
    "oLanguage": {
        "sSearch": "Search:",
        // "sInfo": "Showing _TOTAL_ entries to show (_START_ to _END_)"
    },
});


$('#data--table-users-participants').DataTable({
    fixedHeader: false,
    "searching": false,
    "paging": false,
});

// TODO: refractor this
// select for 'all/mine' view
$('<label/>').appendTo('#datatable--select-custom');
$('#datatable--select-custom').addClass("form--input-select");
$('.dataTables_length').addClass("form--input-select");
var $select = $('<select/>').appendTo('#datatable--select-custom')
$('<option/>').val('1').text('All').appendTo($select);
$('<option/>').val('2').text('Mine Only').appendTo($select);
$('#datatable--select-custom').appendTo('#data--table-example_length');

console.groupEnd();