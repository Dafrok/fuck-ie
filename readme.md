#is-ie

## Description

Check your browser is whether a specified version of IE or not.

## Install
```
$ npm i fuck-ie
```

## Usage
```javascript
var isIE = require('fuck-ie')

// If your browser is IE6, the returned value will be true.
var isIE_6 = isIE(6)

// If your browser is IE6 or IE7 or IE8, the returned value will be true.
var isIE_6_7_8 = isIE(6, 7, 8)

// If your browser is any version of IE, the returned value will be true.
var isAnyVersionOfIE = isIE()
```
