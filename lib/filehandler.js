'use strict';
var fs = require('fs');

/**
* read () filecontents (synchronously) after reading it from file styotem
*  @param {string} path
*  @param {string} encoding  
*/
exports.read = function(path,encoding){
	let contents = fs.readFileSync(path,encoding);
    return contents;  
};

exports.write=function(data){
	return "status with filename"
};