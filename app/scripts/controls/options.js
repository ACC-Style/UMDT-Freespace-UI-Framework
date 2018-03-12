var $ = require('jquery');
var info = require('../models/data');

console.groupCollapsed(`// About`);
console.log(`${info.application.project} developed by ${info.application.developer}`);
console.groupEnd();