/* Play Fair Cipher */

var PlayFair = require("./lib/playfair.js");

module.exports = {
  encipher: function (pt,key) {

    //thisisatest
    //form digraphs
    var digraphs = [];
    for (var i = 0; i < pt.length; i += 2) {

      var digraph = pt.slice(i, i+2);

      //check for non pair at end and add 'Z'
      //check for double letter and replace with first letter and X
      if (digraph.charAt(1) === '') {
        digraph = digraph.charAt(0) + 'z';
      } else if(digraph.charAt(0) == digraph.charAt(1)) {
        digraph = digraph.charAt(0) + 'x';
        i -= 1;
      }

      digraphs.push(digraph);
    }
    
    if(digraphs.length > 0) {
        return PlayFair(1,digraphs.join(' '),"J","I",key);
    }

  },

  decipher: function (ct,key) {
    return PlayFair(-1,ct,"J","I",key);
  }
}