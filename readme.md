# fuck-ie

Check whether your browser is a specified version of IE.

## Install
```
$ npm i fuck-ie
```

## Usage
```javascript
var fuckIE = require('fuck-ie')

// If your browser is IE6, the returned value will be true.
var isIE_6 = fuckIE(6)

// If your browser is IE6 or IE7 or IE8, the returned value will be true.
var isIE_6_7_8 = fuckIE(6, 7, 8)

// If your browser is any version of IE, the returned value will be true.
var isAnyVersionOfIE = fuckIE()
```
