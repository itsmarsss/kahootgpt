/*
Classes:
red/triangle: sc-xyEjG dxGcjY sc-eUWgFQ ktBGGk
blue/rhombus: sc-xyEjG eXkPcG sc-eUWgFQ ktBGGk
yellow/circle: sc-xyEjG DFakQ sc-eUWgFQ ktBGGk
green/square: sc-xyEjG cmcjVO sc-eUWgFQ ktBGGk
*/

var kahootgpt = (function () {
    var kgptmini = false;

    var paid = false;
    var toggled = false;

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
                initialize(val);

                var val1 = request.key || {};
                var val2 = request.hl || {};
                var val3 = request.im || {};
                var val4 = request.md || {};
                setAPIKey(val1);
                setHighlight(val2);
                setImport(val3);
                setModel(val4);

                sendResponse({ value: "initialized", success: true });
                break;
            case "autotap":
                autotap(val);
                sendResponse({ value: "autotap-" + val.toString(), success: true });
                break;
            case "ping":
                ping();

                var val1 = request.key || {};
                var val2 = request.hl || {};
                var val3 = request.im || {};
                var val4 = request.md || {};
                setAPIKey(val1);
                setHighlight(val2);
                setImport(val3);
                setModel(val4);

                createAlert("<strong>KahootGPT Settings!</strong> All settings updated <u><i>.", "#46a8f5");

                sendResponse({ value: toggled.toString(), success: true });
                break;
            case "query":
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
                error(val.toString(), "KahootGPT");
                sendResponse({ value: toggled.toString(), success: true });
                break;
            case "setapikey":
                setAPIKey(val);
                sendResponse({ value: toggled.toString(), success: true });
                break;
            case "sethighlight":
                setHighlight(val);
                sendResponse({ value: toggled.toString(), success: true });
                break;
            case "setimport":
                setImport(val);
                sendResponse({ value: toggled.toString(), success: true });
                break;
            case "setModel":
                setModel(val);
                sendResponse({ value: toggled.toString(), success: true });
                break;
            case "checkup":
                sendResponse({ value: toggled.toString(), success: true });
                break;
        }
    });

    function initialize(val) {
        console.log("Connected to popup script");
        console.log("Paid-feature: " + val.toString());
        paid = val.toString() === "true";

        container.style.display = "flex";

        autotapsetup();

        createAlert("<strong>KahootGPT Initialized!</strong> ContentScript initialized connection to PopupScript.", "#2eb886");
    }
    function autotap(val) {
        console.log("Auto-tap: " + val.toString());
        toggled = val.toString() === "true";
        createAlert("<strong>KahootGPT Info!</strong> Auto-tap set to <u><i>" + toggled.toString() + "</i></u>", "#46a8f5");
    }
    function ping() {
        console.log("Got pinged");
        createAlert("<strong>KahootGPT Connected!</strong> ContentScript connected to PopupScript.", "#2eb886");
    }
    function tap(val) {
        console.log("Click-ans:" + val);
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
        createAlert("<strong>KahootGPT Info!</strong> Clicked best answer according to OpenAI.", "#46a8f5");
    }
    function highlight(val) {
        console.log("Highlight-ans:" + val);
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
        if (!paid) {
            createAlert("<strong>KahootGPT Warn!</strong> Highlighted best answer according to OpenAI: Buy Auto-tap in popup!", "#ffa92b");
        }
    }
    function query() {
        if (ques === "") {
            return { success: false };
        } else {
            if (!sent) {
                sent = true;
                return { q: ques, r: red, b: blue, y: yellow, g: green, success: true };
            } else {
                return { success: false };
            }
        }
    }
    function error(val, source) {
        console.log("Error thrown: " + val.toString());
        createAlert("<strong>" + source.toString() + " Error!</strong> " + val.toString() + ".", "#f66358");
    }
    function setAPIKey(val) {
        console.log("OpenAI Key: [Redacted]");
        openAIKey = val.toString();
        createAlert("<strong>KahootGPT Settings!</strong> Your OpenAI key has been updated.", "#46a8f5");
    }
    function setHighlight(val) {
        console.log("Highlight: " + val.toString());
        autoHighlight = val.toString() === "true";
        createAlert("<strong>KahootGPT Settings!</strong> Highlight answer set to <u><i>" + val.toString() + "</i></u>.", "#46a8f5");
    }
    function setImport(val) {
        console.log("Import: " + val.toString());
        autoImport = val.toString() === "true";
        createAlert("<strong>KahootGPT Settings!</strong> Import answer set to <u><i>" + val.toString() + "</i></u>.", "#46a8f5");
    }
    function setModel(val) {
        console.log("Model: " + val.toString());
        model = val.toString();
        feeter.innerHTML = `Edit settings in PopUp - Model:&nbsp;<b>${model}</b>`;
        createAlert("<strong>KahootGPT Settings!</strong> Model set to <u><i>" + val.toString() + "</i></u>.", "#46a8f5");
    }

    async function createAlert(text, color) {
        const id = Date.now().toString();
        var alert = document.createElement("kgpt-alert-" + id);

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
        if (toggled != minikgpttoggled) {
            toggleAutoTap();
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

        sent = false;

        console.log(
            "Question: " + ques + "\n" +
            "Red: " + red + "\n" +
            "Blue: " + blue + "\n" +
            "Yellow: " + yellow + "\n" +
            "Green: " + green
        );

        runQuery();
    }, 25);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    var kgptmini = document.createElement("kahoot-gpt");
    kgptmini.innerHTML =
        `
<kahoot-gpt-in-site>
    <style id="insitecss">
        html {
            background: #1e1e1e;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            color: #b7b7b7;
            text-align: center;
        }

        body {
            font-family: "Segoe UI", Tahoma, sans-serif;
            font-size: 75%;
        }

        h1 {
            font-size: 2em;
            margin-block-start: 0.67em;
            margin-block-end: 0.67em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-weight: bold;
        }

        h3 {
            margin-top: 5px;
            margin-bottom: 15px;
            text-align: center;
        }

        h4 {
            font-size: 12px;
        }

        .chkbox {
            margin-top: 5px;
            display: block;
            cursor: pointer;
            width: 25px;
            height: 25px;
            border: 3px solid #ffffff00;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0px 0px 0px 2px #fff;
        }

        .chkbox div {
            width: 60px;
            height: 60px;
            background-color: #fff;
            top: -52px;
            left: -52px;
            position: relative;
            transform: rotateZ(45deg);
            z-index: 100;
        }

        .chkbox input[type=checkbox]:checked+div {
            left: -10px;
            top: -10px;
        }

        .chkbox input[type=checkbox] {
            position: absolute;
            left: 50px;
            visibility: hidden;
        }

        .transition {
            transition: 300ms ease;
        }

        .text>* {
            margin: 0;
        }

        #KahootGPT {
            position: relative;
            color: #b7b7b7;
            text-decoration: none;
            z-index: 2;
            font-size: 15px;
        }

        .container {
            position: fixed;
            border: solid 2px white;
            border-radius: 20px;
            padding: 5px;
            background: #1e1e1e;
            width: 300px;
            margin: none;
            padding: none;
            display: none;
            justify-content: center;
            animation: fadein 500ms;
            left: 10px;
            top: 10px;
        }

        @keyframes fadein {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .title {
            cursor: move;
            font-weight: bold;
            font-size: large;
            margin-bottom: 10px;
        }

        .main {
            display: block;
        }

        .autoclick {
            float: left;
            margin-top: 8px;
        }

        .toggle {
            display: grid;
            align-items: center;
            background-color: #525252;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            margin-left: 6px;
            transition: 300ms;
        }

        .checkbox {
            display: grid;
            align-items: center;
            border: none;
            margin: auto;
            padding: none;
            background-color: #525252;
            box-shadow: 0 4px 4px -2px #000;
            width: 90%;
            height: 90%;
            border-radius: 50%;
            cursor: pointer;
        }

        .checkbox:hover .power-icon {
            fill: #8871ad !important;
            filter: drop-shadow(0px 0px 3px #8871ade7);
        }

        .power-icon {
            width: 19px;
            height: 19px;
            align-items: center;
            margin: auto;
            fill: #b7b7b7;
            transition: 200ms;
        }

        #autoclick-status {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: x-small;
            font-weight: bold;
            width: 95px;
            transform: translateX(-4px);
        }

        .question-cont {
            float: left;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            width: 200px;
            height: 35px;
            background-color: white;
            margin: 0;
            box-shadow: 0 2px 10px -2px #fff;
            transition: 500ms;
            margin-bottom: 15px;
        }

        .question-cont:hover {
            box-shadow: none;
        }

        .question-kgpt {
            transform: translateY(-29%) !important;
            margin: 0 !important;
            outline: none !important;
            border: none !important;
            padding: 10px !important;
            width: 130px !important;
            height: 15px !important;
            background: transparent !important;
            font-size: 12px !important;
        }

        .question-kgpt::-webkit-scrollbar {
            width: 0px;
        }

        .search-icon {
            fill: #9d86c3;
            padding-top: 2px;
            cursor: pointer;
            transition: 200ms;
        }

        .search-icon:hover {
            scale: 1.15;
        }

        .options {
            margin-top: 10px;
            width: 102px;
            display: grid;
            grid-template-columns: 100px 100px;
            grid-template-rows: 50px 50;
        }

        .option {
            transition: 450ms;
        }

        .option:hover {
            box-shadow: none;
        }

        .triangle {
            border-top-left-radius: 10px;
            background-color: #ff3355;
            box-shadow: 0 -3px 10px 0px #ff3355;
        }

        .rhombus {
            border-top-right-radius: 10px;
            background-color: #45a3e5;
            box-shadow: 0 -3px 10px 0px #45a3e5;
        }

        .circle {
            border-bottom-left-radius: 10px;
            background-color: #eb670f;
            box-shadow: 0 3px 10px 0px #eb670f;
        }

        .square {
            border-bottom-right-radius: 10px;
            background-color: #66bf39;
            box-shadow: 0 3px 10px 0px #66bf39;
        }

        .answer {
            width: 80px !important;
            height: 31px !important;
            background-color: transparent !important;
            outline: none !important;
            border: none !important;
            resize: none !important;
            color: white !important;
            font-weight: bold !important;
            padding: 10px !important;
            transition: 200ms !important;
            scrollbar-width: none !important;
            font-size: 9px !important;
        }

        .answer::-webkit-scrollbar {
            width: 0px;
        }

        .answer::placeholder {
            color: #dbdbdb;
        }

        .answer:active {
            border: 5px white;
        }

        .clear {
            float: right;
            font-family: monospace, Geneva, Tahoma, sans-serif;
            cursor: pointer;
            font-size: medium;
            background: #381272;
            color: white;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border: none;
            outline: none;
            height: 35px;
            width: 94px;
            box-shadow: 0 2px 10px -2px #5b29a7;
            transition: 150ms;
            font-size: 12px;
        }

        .clear:hover {
            box-shadow: none;
        }

        .clear:active {
            background: #321066;
        }

        .feeter {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 12px;
            width: 100%;
            left: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        kahoot-gpt-in-site {
            z-index: 100;
            top: 0px;
            left: 0px;
            position: fixed;
        }
    </style>

    <meta charset="UTF-8">
    <div class="container" id="container">
        <div>
            <div class="title" id="containerheader"><span id="KahootGPT" "title=" KahootGPT">There is an error</span>
            </div>

            <div class="kahootinfo">
                <div class="question-cont">
                    <input class="question-kgpt" id="question-kgpt" type="text" placeholder="Type question here..."
                        title="Question">
                    <search title="Search">
                        <svg class="search-icon" id="search-icon" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23
                        17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031
                        25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971
                        18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C
                        8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                            </path>
                        </svg>
                    </search>
                </div>
                <button class="clear" id="clear" title="Clear">CLEAR ALL</button>
                <div class="main">
                    <div class="autoclick">
                        <div class="toggle" id="toggle">
                            <button class="checkbox" id="checkbox" title="Toggle Auto-tap">
                                <svg class="power-icon" id="power-icon">
                                    <path d="M 16.8886 5.1769 c -0.7324 -1.1361 -1.7323 -2.1051 -2.8909 -2.8023 c -0.2167 -0.1304
                                            -0.4868 -0.1341 -0.7071 -0.0096 c -0.2201 0.1245 -0.3564 0.3579 -0.3564 0.6108 v 1.4516 c 0
                                            0.2189 0.1023 0.4254 0.2765 0.5581 c 1.5547 1.1843 2.4827 3.051 2.4827 4.9933 c 0 3.4558
                                            -2.8115 6.2673 -6.2673 6.2673 c -3.4558 0 -6.2673 -2.8115 -6.2673 -6.2673 c 0 -1.9424 0.9281
                                            -3.8091 2.4827 -4.9933 c 0.1742 -0.1327 0.2765 -0.3392 0.2765 -0.5581 V 2.9759 c 0 -0.253
                                            -0.1362 -0.4863 -0.3563 -0.6108 c -0.2203 -0.1245 -0.4904 -0.1208 -0.7071 0.0096 c -1.1588
                                            0.6972 -2.1584 1.6662 -2.891 2.8023 c -0.923 1.4315 -1.4109 3.0919 -1.4109 4.8019 c 0 2.3701
                                            0.923 4.5984 2.599 6.2744 c 1.6761 1.676 3.9043 2.599 6.2744 2.599 c 2.3701 0 4.5984 -0.923
                                            6.2744 -2.599 c 1.6759 -1.676 2.599 -3.9043 2.599 -6.2744 C 18.2995 8.2688 17.8116 6.6084
                                            16.8886 5.1769 z M 8.6065 10.7767 h 1.6395 c 0.3629 0 0.658 -0.2953 0.658 -0.6581 V 0.6581 c
                                            0 -0.3629 -0.2951 -0.6581 -0.658 -0.6581 h -1.6395 c -0.3629 0 -0.6581 0.2952 -0.6581 0.6581
                                            v 9.4606 C 7.9484 10.4815 8.2437 10.7767 8.6065 10.7767 z">
                                    </path>
                                </svg>
                            </button>
                        </div>

                        <h3 id="autoclick-status">Auto-tap is OFF</h3>
                    </div>
                    <div class="options">
                        <div class="option triangle">
                            <textarea class="answer" id="answer-triangle" type="text" placeholder="Type answer here..."
                                title="Answer"></textarea>
                        </div>
                        <div class="option rhombus">
                            <textarea class="answer" id="answer-rhombus" type="text" placeholder="Type answer here..."
                                title="Answer"></textarea>
                        </div>
                        <div class="option circle">
                            <textarea put class="answer" id="answer-circle" type="text"
                                placeholder="Type answer here..." title="Answer"></textarea>
                        </div>
                        <div class="option square">
                            <textarea class="answer" id="answer-square" type="text" placeholder="Type answer here..."
                                title="Answer"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="feeter" id="feeter">Edit settings in PopUp
            </div>
        </div>
    </div>
</kahoot-gpt-in-site>
`;

    document.documentElement.appendChild(kgptmini);

    const container = document.getElementById("container");
    const checkbox = document.getElementById("checkbox");
    const toggle = document.getElementById("toggle");
    const powericon = document.getElementById("power-icon");
    const tapstatus = document.getElementById("autoclick-status");

    const question = document.getElementById("question-kgpt");
    const search = document.getElementById("search-icon");
    const clear = document.getElementById("clear");

    const triangle = document.getElementById("answer-triangle");
    const rhombus = document.getElementById("answer-rhombus");
    const circle = document.getElementById("answer-circle");
    const square = document.getElementById("answer-square");

    const triangle_cont = document.getElementsByClassName("triangle")[0];
    const rhombus_cont = document.getElementsByClassName("rhombus")[0];
    const circle_cont = document.getElementsByClassName("circle")[0];
    const square_cont = document.getElementsByClassName("square")[0];

    const feeter = document.getElementById("feeter");

    var minikgpttoggled = false;

    var openAIKey;
    var autoHighlight = false;
    var autoImport = false;
    var model = "gpt-3.5-turbo";

    function toggleAutoTap() {
        if (minikgpttoggled) {
            checkbox.style.boxShadow = "0 4px 4px -2px #000";
            toggle.style.background = "#525252";
            powericon.style.fill = "#b7b7b7";
            tapstatus.innerHTML = "Auto-tap OFF";
            tapstatus.style.color = "#b7b7b7";
        } else {
            checkbox.style.boxShadow = "none";
            toggle.style.background = "#9d86c3";
            powericon.style.fill = "#9d86c3";
            tapstatus.innerHTML = "Auto-tap ON";
            tapstatus.style.color = "#864cbf";
        }
        minikgpttoggled = !minikgpttoggled;
        toggled = minikgpttoggled;
        console.log("Auto-tap: " + toggled);
        createAlert("<strong>KahootGPT Info!</strong> Auto-tap set to <u><i>" + toggled.toString() + "</i></u>", "#46a8f5");
    }

    function queryGPT() {
        if (question.value === "") {
            return;
        }

        triangle_cont.style.border = "none";
        rhombus_cont.style.border = "none";
        circle_cont.style.border = "none";
        square_cont.style.border = "none";

        if (triangle.value === "" &&
            rhombus.value === "" &&
            circle.value === "" &&
            square.value === "") {
            getAnswerOnly(
                question.value
            );
        } else {
            getAnswerWithAnswer(
                question.value,
                triangle.value || "n/a",
                rhombus.value || "n/a",
                circle.value || "n/a",
                square.value || "n/a",
            );
        }
    }

    async function getAnswerOnly(query) {
        if (model === "text-davinci-003") {
            console.log("Calling GPT3")
            var url = "https://api.openai.com/v1/completions";
            var bearer = 'Bearer ' + openAIKey;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "text-davinci-003",
                    "prompt": 'Act as a professional; only respond with 4 concise answers (if there is a definite answer, only reply with one) in json format with "one", "two", "three", "four" or "one" as the key if only one answer (make sure the answers are in quotes) to the following question: ' + query + "\n",
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data.choices[0].text);

                    var replyLines = data.choices[0].text;

                    var GPTReply = JSON.parse(replyLines);

                    var one = GPTReply.one || GPTReply.answer || "";
                    var two = GPTReply.two || "";
                    var three = GPTReply.three || "";
                    var four = GPTReply.four || "";

                    triangle.value = one;
                    rhombus.value = two;
                    circle.value = three;
                    square.value = four;
                })
                .catch(err => {
                    console.log("OpenAI error: " + err.message.toString());
                    error(err.message.toString(), "OpenAI");
                });
        } else {
            console.log("Calling ChatGPT")
            var url = "https://api.openai.com/v1/chat/completions";
            var bearer = 'Bearer ' + openAIKey;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        { "role": "system", "content": 'Act as a professional; only respond with 4 concise answers (if there is a definite answer, only reply with one) in json format with "one", "two", "three", "four" or "one" as the key if only one answer to the following question, be concise:' },
                        { "role": "user", "content": query }
                    ],
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data.choices[0].message.content);

                    var replyLines = data.choices[0].message.content;

                    var GPTReply = JSON.parse(replyLines);

                    var one = GPTReply.one || GPTReply.answer || "";
                    var two = GPTReply.two || "";
                    var three = GPTReply.three || "";
                    var four = GPTReply.four || "";

                    triangle.value = one;
                    rhombus.value = two;
                    circle.value = three;
                    square.value = four;
                })
                .catch(err => {
                    console.log("OpenAI error: " + err.message.toString());
                    error(err.message.toString(), "OpenAI");
                });
        }
    }

    async function getAnswerWithAnswer(query, triangle, rhombus, circle, square) {
        if (model === "text-davinci-003") {
            console.log("Calling GPT3")
            var url = "https://api.openai.com/v1/completions";
            var bearer = 'Bearer ' + openAIKey;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "text-davinci-003",
                    "prompt": 'Act as a professional;  the question will be after "question: " and there are 4 possible answers "a", "b", "c", or "d", reply with a SINGLE letter ONLY:\nquestion: ' + query + "\n" + "a: " + triangle + "\n" + "b: " + rhombus + "\n" + "c: " + circle + "\n" + "d: " + square + "\n",
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data.choices[0].text);

                    var replyLines = data.choices[0].text;

                    var GPTReply = replyLines.replace(/\s/g, '').toLowerCase().charAt(0);

                    console.log(GPTReply);

                    var ans = "a";

                    if (GPTReply.includes("b")) {
                        ans = "b";
                        rhombus_cont.style.border = "4px solid gold";
                    } else if (GPTReply.includes("c")) {
                        ans = "c";
                        circle_cont.style.border = "4px solid gold";
                    } else if (GPTReply.includes("d")) {
                        ans = "d";
                        square_cont.style.border = "4px solid gold";
                    } else {
                        ans = "a";
                        triangle_cont.style.border = "4px solid gold";
                    }

                    tap(ans);
                    console.log("Send tap");

                    if (autoHighlight) {
                        highlight(ans);
                        console.log("Send highlight");
                    }
                })
                .catch(err => {
                    console.log("OpenAI Error: " + err.message.toString());
                    error(err.message.toString(), "OpenAI");
                });
        } else {
            console.log("Calling ChatGPT")
            var url = "https://api.openai.com/v1/chat/completions";
            var bearer = 'Bearer ' + openAIKey;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        { "role": "system", "content": 'Act as a professional;  the question will be after "question: " and there are 4 possible answers "a", "b", "c", or "d", reply with a SINGLE letter ONLY, be concise:' },
                        { "role": "user", "content": 'question: ' + query + "\n" + "a: " + triangle + "\n" + "b: " + rhombus + "\n" + "c: " + circle + "\n" + "d: " + square }
                    ],
                    "temperature": 0.7,
                    "max_tokens": 256,
                    "top_p": 1,
                    "frequency_penalty": 0,
                    "presence_penalty": 0
                })
            }).then(response => response.json())
                .then(data => {
                    console.log(data.choices[0].message.content);

                    var replyLines = data.choices[0].message.content;

                    var GPTReply = replyLines.replace(/\s/g, '').toLowerCase().charAt(0);

                    console.log(GPTReply);

                    var ans = "a";

                    if (GPTReply.includes("b")) {
                        ans = "b";
                        rhombus_cont.style.border = "4px solid gold";
                    } else if (GPTReply.includes("c")) {
                        ans = "c";
                        circle_cont.style.border = "4px solid gold";
                    } else if (GPTReply.includes("d")) {
                        ans = "d";
                        square_cont.style.border = "4px solid gold";
                    } else {
                        ans = "a";
                        triangle_cont.style.border = "4px solid gold";
                    }

                    tap(ans);
                    console.log("Send tap");

                    if (autoHighlight) {
                        highlight(ans);
                        console.log("Send highlight");
                    }
                })
                .catch(err => {
                    console.log("OpenAI Error: " + err.message.toString());
                    error(err.message.toString(), "OpenAI");
                });
        }
    }

    function runQuery() {
        if (autoImport) {
            var response = query();
            if (response.success) {
                var ques = response.q || "";
                var red = response.r || "";
                var blue = response.b || "";
                var yellow = response.y || "";
                var green = response.g || "";

                question.value = ques;
                triangle.value = red;
                rhombus.value = blue;
                circle.value = yellow;
                square.value = green;

                queryGPT();
            }
        }
    }

    function autotapsetup() {
        if (paid) {
            checkbox.addEventListener("click", function () {
                toggleAutoTap();
            });
        } else {
            checkbox.addEventListener("click", function () {
                checkbox.style.boxShadow = "none";
                toggle.style.background = "#ff9494";
                powericon.style.fill = "#ff9494";
                tapstatus.innerHTML = "Auto-tap ERROR";
                tapstatus.style.color = "#ff9494";

                console.log("Auto-tap: Not paid");
            });
        }
    }

    question.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            queryGPT();
        }
    });
    search.addEventListener("click", function () {
        queryGPT();
    });

    clear.addEventListener("click", function () {
        triangle_cont.style.border = "none";
        rhombus_cont.style.border = "none";
        circle_cont.style.border = "none";
        square_cont.style.border = "none";

        question.value = "";
        triangle.value = "";
        rhombus.value = "";
        circle.value = "";
        square.value = "";
    });

    const manifest = chrome.runtime.getManifest();
    console.log("Version: v" + manifest.version);
    document.getElementById("KahootGPT").innerHTML = "KahootGPT v" + manifest.version + " (drag me)";

    runQuery();

    dragElement(document.getElementById("container"));

    function dragElement(element) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(element.id + "header")) {
            document.getElementById(element.id + "header").onmousedown = dragMouseDown;
        } else {
            element.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();

            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";

            checkborder();
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    window.addEventListener('resize', function () {
        checkborder();
    });

    function checkborder() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const rect = container.getBoundingClientRect();
        const divWidth = rect.width;
        const divHeight = rect.height;
        const divLeft = rect.left;
        const divTop = rect.top;

        const maxLeft = width - divWidth;
        const maxTop = height - divHeight;

        container.style.left = Math.max(Math.min(divLeft, maxLeft), 0) + "px";
        container.style.top = Math.max(Math.min(divTop, maxTop), 0) + "px";
    }
});

kahootgpt();
