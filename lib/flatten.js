'use strict';


/**
*  jsonflatten - Namespace to hold the utility functions
*/

var jsonflatten = {
    /**
    * flatten() takes the json data and contructs the flatten data. 
    * @param {JSON} data
    * @param {string} path
    * @param {number} depth
    * @param {number} maxdepth
    */
    flatten: function(data, path, depth = 0, maxdepth = 5) {
        if (depth > maxdepth)
            return;

        let localpath = path;
        for (let key in data) {

            let type = typeof(data[key]);

            if (type === 'object') {
                this.flatten(data[key], (localpath ? localpath + '_' + key : 'top'), depth + 1);
            } else {
                let resultstring = (localpath || 'top') + '--' + key + '--' + data[key];
               // console.log(resultstring);
                this.constructJSON((localpath || 'top'), key, data[key]);
            }
        }
    },
    
    /**
    * holds the results in a Object
    */
    results: {},
    
    /**
    * constructJSON() constructs the JSON - Stub for holding the data at runtime
    * @param {string} path
    * @param {string} key
    * @param {string} value
    */

    constructJSON: function(path, key, value) {
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
   
    jsonflatten.flatten(JSON.parse(data));
    return jsonflatten.results;
};

/**
   megers the given json data
   @param {json} data1
   @param {json} data2
*/
exports.unflatten = function(data1, data2) {
    // this feature not yet implemeted
    return "finalpath"
};