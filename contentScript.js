/*
Classes:
red/triangle: sc-xyEjG dxGcjY sc-eUWgFQ ktBGGk
blue/rhombus: sc-xyEjG eXkPcG sc-eUWgFQ ktBGGk
yellow/circle: sc-xyEjG DFakQ sc-eUWgFQ ktBGGk
green/square: sc-xyEjG cmcjVO sc-eUWgFQ ktBGGk
*/

var toggled = false;
var done = false;
var init = false;
var disalerted = false;
var querycount = 0;
var querycounttemp = 0;

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
            createAlert("<strong>KahootGPT Initialized!</strong> ContentScript initialized connection to PopupScript.", "#2eb886");
            querycounttemp = querycount;
            break;
        case "autotap":
            console.log("Auto-tap-" + val.toString());
            sendResponse({ value: "autotap-" + val.toString(), success: true });
            toggled = val.toString() === 'true';
            if (init) {
                createAlert("<strong>KahootGPT Info!</strong> Auto-tap set to <i>" + toggled.toString() + "</i>", "#46a8f5");
            }
            init = true;
            break;
        case "ping":
            console.log("Got pinged");
            sendResponse({ value: toggled.toString(), success: true });
            createAlert("<strong>KahootGPT Connected!</strong> ContentScript connected to PopupScript.", "#2eb886");
            querycounttemp = querycount;
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
            createAlert("<strong>KahootGPT Info!</strong> Clicked best answer according to OpenAI.", "#46a8f5");
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
            createAlert("<strong>KahootGPT Warn!</strong> Highlighted best answer according to OpenAI: Buy Auto-tap in popup!", "#ffa92b");
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
            querycount++;
            break;
        case "error":
            console.log("Error sent: " + val.toString());
            //alert("KahootGPT error: " + val.toString());
            sendResponse({ value: toggled.toString(), success: true });
            createAlert("<strong>KahootGPT Error!</strong> " + val.toString() + ".", "#2eb886");
            break;
    }
});

async function createAlert(text, color) {
    var id = Date.now().toString();
    var alert = document.createElement('kgpt-alert-' + id);

    alert.innerHTML = `
<div id="alert-${id}">
    ${text}
</div>
<style>
kgpt-alert-${id} {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 100;
  animation: fadeinout 3s;
  opacity: 0;
}

#alert-${id} {
  border-radius: 15px;
  padding: 10px 20px;
  background-color: ${color};
  color: white;
  transition: 300ms;
  border: solid 1px #fff;
  box-shadow: #959da52e 0px 8px 24px;
}

@keyframes fadeinout {
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
`
    document.body.appendChild(alert);

    await sleep(3000);

    document.body.removeChild(alert);
}

var checkForNewQuestion = setInterval(function () {
    if (querycounttemp > querycount + 10) {
        if (!disalerted) {
            if (done) {
                createAlert("<strong>KahootGPT Warn!</strong> Popup terminated connection.", "#ffa92b");
            }
            done = true;
        }
        disalerted = true;
    } else {
        querycounttemp++;
        disalerted = false;
    }

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

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
