/*
Classes:
red/triangle: sc-xyEjG dxGcjY sc-eUWgFQ ktBGGk
blue/rhombus: sc-xyEjG eXkPcG sc-eUWgFQ ktBGGk
yellow/circle: sc-xyEjG DFakQ sc-eUWgFQ ktBGGk
green/square: sc-xyEjG cmcjVO sc-eUWgFQ ktBGGk
*/

let toggled = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var type = request.type || {};
    var val = request.value || {};

    console.log(type)

    switch (type) {
        case "initialize":
            console.log("Connected to popup script");
            sendResponse({ value: "initialized", success: true });
            break;
        case "autotap":
            console.log("Auto-tap-" + val.toString());
            sendResponse({ value: "autotap-" + val.toString(), success: true });
            toggled = val.toString() === 'true';
            break;
        case "ping":
            console.log("Got pinged");
            sendResponse({ value: toggled.toString(), success: true });
            break;
        case "tap":
            switch (val) {
                case "a":
                    console.log("triangle");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-0"]')[0].click();
                    }
                    break;
                case "b":
                    console.log("rhombus");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-1"]')[0].click();
                    }
                    break;
                case "c":
                    console.log("circle");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-2"]')[0].click();
                    }
                    break;
                case "d":
                    console.log("square");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-3"]')[0].click();
                    }
                    break;
            }
            sendResponse({ value: toggled.toString(), success: true });
            break;
        case "query":
            console.log("queried");
            break;
        case "error":
            console.log("Error sent");
            alert("KahootGPT error: " + error);
            sendResponse({ value: toggled.toString(), success: true });
            break;
    }
});
