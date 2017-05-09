'use strict';


var jsonflatten = {
    flatten: function(data, path, depth = 0, maxdepth = 5) {
        // body...
        if (depth > maxdepth)
            return;

        let localpath = path;
        for (let key in data) {

            let type = typeof(data[key]);

            if (type === 'object') {
                this.flatten(data[key], (localpath ? localpath + '_' + key : 'top'), depth + 1);
            } else {
                let resultstring = (localpath || 'top') + '--' + key + '--' + data[key];
                console.log(resultstring);
                this.constructJSON((localpath || 'top'), key, data[key]);
            }
        }
    },
    results: [],
    constructJSON: function(path, key, value) {
        // body...
        let existingObj = this.results[path] || new Object();
        existingObj[key] = value;
        this.results[path] = existingObj;


    }

};


/**
   fallten the given data
   @param {json} data
*/
exports.flatten = function(data) {

    return data;
};
/**
   megers the given json data
   @param {json} data1
   @param {json} data2
*/

exports.unflatten = function(data1, data2) {
    return "finalpath"
};