(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) {
        define(factory)
    } else {
        root.fuckIE = factory()
    }
})(this, function() {
    var IE = (function () {
        'use strict'
        var ret
        var isTheBrowser
        var actualVersion
        var jscriptMap
        var jscriptVersion
        isTheBrowser = false;
        jscriptMap = {
            '5.5': '5.5',
            '5.6': '6',
            '5.7': '7',
            '5.8': '8',
            '9': '9',
            '10': '10'
        };
        jscriptVersion = new Function('/*@cc_on return @_jscript_version; @*/')()
        if (jscriptVersion !== undefined) {
            isTheBrowser = true
            actualVersion = jscriptMap[jscriptVersion]
        } else if (!!window.ActiveXObject){
            isTheBrowser = true
            actualVersion = '11'
        }
        ret = {
            isTheBrowser: isTheBrowser,
            actualVersion: actualVersion
        }
        return ret
    }())

    return function isIE(version) {
        var args = [].slice.call(arguments)
        switch (args.length) {
            case 0:
                return IE.isTheBrowser
            case 1:
                return +version === +IE.actualVersion
            default:
                for (var i = 0; i < args.length; i++) {
                    if (isIE(args[i])) {
                        return true
                    }
                }
                return false
        }
    }
})
