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

exports.write=function(data,destpath="."){
	console.log(destpath);
	
	let keys = Object.keys(data);
	console.log(keys.length);

	keys.forEach(key=>{
		let value = JSON.stringify(data[key]);
        console.log((value))
        console.log(typeof(value));
        fs.appendFile(destpath+'/'+key+".json",value);
	});

	return "status with filename"
};
