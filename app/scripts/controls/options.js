var $ = require('jquery');
var info = require('../models/data');
var tree = require('../models/tree');

console.groupCollapsed(`// About`);
console.log(`${info.application.project} developed by ${info.application.developer}`);
console.log(`Tree testing: ${tree.tree.testing}`);
console.groupEnd();