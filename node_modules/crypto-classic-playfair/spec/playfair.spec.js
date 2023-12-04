/* Jasmine tests for classic cryto playfair */

var playfair = require('../playfair.js');

describe("Playfair Test", function () {

	//encrypt
	it("Should encrypt", function(done) {
		var ct = playfair.encipher('hellooneandall','thisisthesecretkey');
		expect(ct).toEqual('it gz fq po al vn lq qe');
		done();
	});

	//decrypt
	it("Should decrypt", function(done) {
		var pt = playfair.decipher('it gz fq po al vn lq qe','thisisthesecretkey');
		expect(pt).toEqual('he lx lo on ea nd al lz');
		done();
	});	
});