var flatten = require('../lib/flatten.js');
var filehandler = require('../lib/filehandler.js')

/**
   operations supported 
   		flat
   		unflat 
*/

const opr = process.argv[2] || undefined;
const srcpath = process.argv[3] || undefined;
const destpath = process.argv[4] || undefined;
const destpath2 = process.argv[5] || undefined;

if(opr==='flat'){
	let data = filehandler.read(srcpath,'utf-8');
    let flattendata = flatten.flatten(data);
    filehandler.write(flattendata,destpath);
    

}else if(opr==='unflat'){
     // feature not yet implemented
}else{
	console.log('Unsupported operation, kindly check the operations');
}