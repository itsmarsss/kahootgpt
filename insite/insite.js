const checkbox = document.getElementById("checkbox");
const toggle = document.getElementById("toggle");
const powericon = document.getElementById("power-icon");
const tapstatus = document.getElementById("autoclick-status");

const question = document.getElementById("question-kgpt");
const search = document.getElementById("search-icon");

const triangle = document.getElementById("answer-triangle");
const rhombus = document.getElementById("answer-rhombus");
const circle = document.getElementById("answer-circle");
const square = document.getElementById("answer-square");

const triangle_cont = document.getElementsByClassName("triangle")[0];
const rhombus_cont = document.getElementsByClassName("rhombus")[0];
const circle_cont = document.getElementsByClassName("circle")[0];
const square_cont = document.getElementsByClassName("square")[0];

const clear = document.getElementById("clear");


getImport();

checkbox.click();

runQuery();

openAIKey = getAPIKey();

var minitoggled = false;

var openAIKey = "YOUR_KEY";
var autoHighlight = false;
var autoImport = false;

function toggleAutoTap() {
    if (minitoggled) {
        checkbox.style.boxShadow = "0 4px 4px -2px #000";
        toggle.style.background = "#525252";
        powericon.style.fill = "#b7b7b7";
        tapstatus.innerHTML = "Auto-tap is OFF";
        tapstatus.style.color = "#b7b7b7";
    } else {
        checkbox.style.boxShadow = "none";
        toggle.style.background = "#9d86c3";
        powericon.style.fill = "#9d86c3";
        tapstatus.innerHTML = "Auto-tap is ON";
        tapstatus.style.color = "#864cbf";
    }
    minitoggled = !minitoggled;
    console.log("Toggled: " + minitoggled);
}

question.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        queryGPT();
    }
});

search.addEventListener("click", function () {
    queryGPT();
});

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
        getAnswerOnly(question.value);
    } else {
        getAnswerWithAnswer(
            question.value,
            triangle.value || "n/a",
            rhombus.value || "n/a",
            circle.value || "n/a",
            square.value || "n/a"
        );
    }
}

clear.addEventListener("click", function () {
    clearAll();
});
function clearAll() {
    triangle_cont.style.border = "none";
    rhombus_cont.style.border = "none";
    circle_cont.style.border = "none";
    square_cont.style.border = "none";

    question.value = "";
    triangle.value = "";
    rhombus.value = "";
    circle.value = "";
    square.value = "";
}


async function getAnswerOnly(query) {
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
            "prompt": 'Act as a professional; only respond with 4 concise answers (if there is a definite answer, only reply with one) in json format with "one", "two", "three", "four" or "one" as the key if only one answer to the following question: ' + query + "\n",
            "temperature": 0.7,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        })
    }).then(response => response.json())
        .then(data => {
            console.log(data.choices[0].text);

            var lines = (data.choices[0].text).split('\n');
            lines.splice(0, 2);
            var replyLines = lines.join('\n');

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
        .catch(error => {
            console.log("KahootGPT error: " + error.message.toString());
            error(error.message.toString());
        });
}

async function getAnswerWithAnswer(query, triangle, rhombus, circle, square) {
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

            var lines = (data.choices[0].text).split('\n');
            lines.splice(0, 1);
            var replyLines = lines.join('\n');

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
        .catch(error => {
            console.log("KahootGPT error: " + error.message.toString());
            error(error.message.toString());
        });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function getAPIKey() {
    chrome.storage.local.get(["key"], function (result) {
        console.log("Key queried");
        openAIKey = result.key;
    });
}

function getHighlight() {
    chrome.storage.local.get(["highlight"], function (result) {
        console.log("Highlight queried");
        autoHighlight = result.highlight;
    });
}

function getImport() {
    chrome.storage.local.get(["import"], function (result) {
        console.log("Import queried");
        autoImport = result.import;
    });
}

function runQuery() {
    var checkForNewQuestion = setInterval(function () {
        getAPIKey();
        getHighlight();
        getImport();

        if (toggled != minitoggled) {
            toggleAutoTap();
        }

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
    }, 25);
}

document.getElementById("privacy").addEventListener("click", function () {
    window.open("/documents/PRIVACY.html", "_blank");
});

if (paid) {
    checkbox.addEventListener("click", function () {
        toggleAutoTap();

        console.log("Auto-tap: Toggled");
    });
} else {
    checkbox.addEventListener("click", function () {
        purchase.style.display = "block";
        checkbox.style.boxShadow = "none";
        toggle.style.background = "#ff9494";
        powericon.style.fill = "#ff9494";
        tapstatus.innerHTML = "Auto-tap ERROR";
        tapstatus.style.color = "#ff9494";

        console.log("Auto-tap: Not paid");
    });
}

const manifest = chrome.runtime.getManifest();
console.log("Version: v" + manifest.version);
document.getElementById("KahootGPT").innerHTML = "KahootGPT v" + manifest.version;