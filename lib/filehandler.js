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

/**
* write () writes the filecontents (synchronously) to file styotem
*  @param {JSON} filecontets
*  @param {String} destpath  
*/

exports.write=function(data,destpath="."){
	
	let keys = Object.keys(data);
	keys.forEach(key=>{
		let value = JSON.stringify(data[key]);
        fs.appendFile(destpath+'/'+key+".json",value);
	});

};
