/*
Classes:
red/triangle: sc-xyEjG dxGcjY sc-eUWgFQ ktBGGk
blue/rhombus: sc-xyEjG eXkPcG sc-eUWgFQ ktBGGk
yellow/circle: sc-xyEjG DFakQ sc-eUWgFQ ktBGGk
green/square: sc-xyEjG cmcjVO sc-eUWgFQ ktBGGk
*/

let toggled = false;

let ques = "";
let red = "";
let blue = "";
let yellow = "";
let green = "";
let sent = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var type = request.type || {};
    var val = request.value || {};

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
            console.log("Ans:" + val);
            switch (val) {
                case "a":
                    console.log("triangle");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-0"]')[0].click();
                    }
                    document.querySelectorAll('[data-functional-selector="answer-0"]')[0].style.border = "4px solid gold";
                    break;
                case "b":
                    console.log("rhombus");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-1"]')[0].click();
                    }
                    document.querySelectorAll('[data-functional-selector="answer-1"]')[0].style.border = "4px solid gold";
                    break;
                case "c":
                    console.log("circle");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-2"]')[0].click();
                    }
                    document.querySelectorAll('[data-functional-selector="answer-2"]')[0].style.border = "4px solid gold";
                    break;
                case "d":
                    console.log("square");
                    if (toggled) {
                        document.querySelectorAll('[data-functional-selector="answer-3"]')[0].click();
                    }
                    document.querySelectorAll('[data-functional-selector="answer-3"]')[0].style.border = "4px solid gold";
                    break;
            }
            sendResponse({ value: toggled.toString(), success: true });
            break;
        case "highlight":
            console.log("Ans:" + val);
            switch (val) {
                case "a":
                    console.log("triangle");
                    document.querySelectorAll('[data-functional-selector="answer-0"]')[0].style.border = "4px solid gold";
                    break;
                case "b":
                    console.log("rhombus");
                    document.querySelectorAll('[data-functional-selector="answer-1"]')[0].style.border = "4px solid gold";
                    break;
                case "c":
                    console.log("circle");
                    document.querySelectorAll('[data-functional-selector="answer-2"]')[0].style.border = "4px solid gold";
                    break;
                case "d":
                    console.log("square");
                    document.querySelectorAll('[data-functional-selector="answer-3"]')[0].style.border = "4px solid gold";
                    break;
            }
            sendResponse({ value: toggled.toString(), success: true });
            break;
        case "query":
            console.log("Queried");

            if (ques === "") {
                sendResponse({ success: false });
            } else {
                if (!sent) {
                    sent = true;
                    sendResponse({ q: ques, r: red, b: blue, y: yellow, g: green, success: true });
                } else {
                    sendResponse({ success: false });
                }
            }
            break;
        case "error":
            console.log("Error sent: " + val.toString());
            alert("KahootGPT error: " + val.toString());
            sendResponse({ value: toggled.toString(), success: true });
            break;
    }
});


var checkForNewQuestion = setInterval(function () {

}, 100);

var fadeEffect = setInterval(function () {
    var question = "";

    try {
        question = document.querySelectorAll('[data-functional-selector="block-title"]')[0].innerHTML;
    } catch (err) {
        question = "";
    }

    if (question === ques) {
        return;
    }

    ques = question;
    try {
        red = document.querySelectorAll('[data-functional-selector="question-choice-text-0"]')[0].querySelectorAll("span")[0].innerHTML;
    } catch (err) {
        red = "";
    }
    try {
        blue = document.querySelectorAll('[data-functional-selector="question-choice-text-1"]')[0].querySelectorAll("span")[0].innerHTML;
    } catch (err) {
        blue = "";
    }
    try {
        yellow = document.querySelectorAll('[data-functional-selector="question-choice-text-2"]')[0].querySelectorAll("span")[0].innerHTML;
    } catch (err) {
        yellow = "";
    }
    try {
        green = document.querySelectorAll('[data-functional-selector="question-choice-text-3"]')[0].querySelectorAll("span")[0].innerHTML;
    } catch (err) {
        green = "";
    }
    console.log(ques);
    console.log(red);
    console.log(blue);
    console.log(yellow);
    console.log(green);
    sent = false;
}, 25);
