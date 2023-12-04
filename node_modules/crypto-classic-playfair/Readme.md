crypto-classic-playfair
==================

Classic Playfair cipher

Install
-------

```
npm install crypto-classic-playfair
```

Usage
-----

```
var playfair = require('crypto-classic-playfair');
    
//encrypt  
var ciperText = playfair.encipher('hellooneandall','thisisthesecretkey');
    
//decrypt
var plainText = playfair.decipher('it gz fq po al vn lq qe','thisisthesecretkey');
```
