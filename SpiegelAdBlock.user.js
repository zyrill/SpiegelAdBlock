// ==UserScript==
// @name        Spiegel Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/SpiegelAdBlock
// @description Blocks those annoying anti-adblock notices left on Spiegel when using an adblocker
// @author      zyrill
// @include     https://www.spiegel.de/*
// @include     http://www.spiegel.de/*
// @encoding    utf-8
// @description Remove Spiegel Anti-Adblock-Banner
// @run-at      document-idle
// @grant       none
// @license     MIT
// @version     0.0.2
// ==/UserScript==

// select the target node
var target = document.getElementsByTagName("BODY")[0];

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
//      console.log("Detected mutation: " + mutation.type);
        if (mutation.addedNodes !== null) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
//              console.log("Removing mutation: " + mutation.addedNodes[i]);
                mutation.addedNodes[i].remove();
            }
        }
    });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
if (target !== null && typeof target === 'object') {
    observer.observe(target, config);
}

// later, you can stop observing
//observer.disconnect();
