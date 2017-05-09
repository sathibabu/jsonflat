'use strict';

var expect = require('chai').expect;




describe('flatentest',function(){
    it('sample to check test inegrity for flatten',function(){
            var flatten = require('../lib/flatten.js');
            expect(flatten.flatten()).to.equal('flatten data super awesome');
    });
});


describe('filetest',function(){
    it('sample to check test inegrity for filetest',function(){
           var filehandler = require('../lib/filehandler.js')
           expect(filehandler.read()).to.equal('JSON DATA');
    });
});