/* Jasmine tests for classic cryto utils */

var utils = require('../utils.js');

describe("Keyed Alphabet Test", function () {
    
    //MakeKeyedAlphabet
    it("must make keyed alphabet", function(done) {
        var key = "Four. Score! And Seven Days Ago?";
        var expectedAlpha = "FOURSCEANDVYGBHIJKLMPQTWXZ";
        var alpha = utils.MakeKeyedAlphabet(key);
        expect(alpha).toEqual(expectedAlpha);
        done();
    });
    
});