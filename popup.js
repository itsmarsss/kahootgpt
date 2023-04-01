const injection = document.getElementById("injection");

const settings = document.getElementById("settings");
const config = document.getElementById("config");

const checkbox = document.getElementById("checkbox");
const toggle = document.getElementById("toggle");
const powericon = document.getElementById("power-icon");
const tapstatus = document.getElementById("autoclick-status");

const footer = document.getElementById("footer");
const socials = document.getElementById("socials");

const question = document.getElementById("question");
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

const exit = document.getElementById("close");
const openaikeyinput = document.getElementById("openaikeyinput");
const storekey = document.getElementById("storekey");
const autoin = document.getElementById("autoimport");
const autoanswer = document.getElementById("autoanswer");
const save = document.getElementById("save");

socials.addEventListener("mouseover", function () {
    footer.style.background = "#9d86c3";
});

socials.addEventListener("mouseout", function () {
    footer.style.background = "#525252";
});

settings.addEventListener("click", async function () {
    if (storekey.checked) {
        getAPIKey();
    }

    getImport();
    getReply();

    await sleep(500);

    openaikeyinput.value = openAIKey;

    autoin.checked = autoImport;
    autoanswer.checked = autoReply;

    config.style.display = "block";

    var opacity = 0;
    config.style.opacity = opacity;
    var fadeEffect = setInterval(function () {
        if (config.style.opacity < 1) {
            opacity += 0.1;
            config.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 12);
});

exit.addEventListener("click", function () {
    var fadeEffect = setInterval(function () {
        if (!config.style.opacity) {
            config.style.opacity = 1;
        }
        if (config.style.opacity > 0) {
            config.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            config.style.display = "none";
        }
    }, 12);
});

openaikeyinput.addEventListener("mouseover", function () {
    openaikeyinput.type = "text";
});

openaikeyinput.addEventListener("mouseout", function () {
    openaikeyinput.type = "password";
});

save.addEventListener("click", async function () {
    if (storekey.checked) {
        setAPIKey(openaikeyinput.value);
    } else {
        openAIKey = openaikeyinput.value;
    }

    setImport(autoin.checked);
    setReply(autoanswer.checked);

    await sleep(500);

    var fadeEffect = setInterval(function () {
        if (!config.style.opacity) {
            config.style.opacity = 1;
        }
        if (config.style.opacity > 0) {
            config.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            config.style.display = "none";
        }
    }, 12);
});

var toggled = false;

var kahootId;

var openAIKey = "YOUR_KEY";
var autoImport = false;
var autoReply = false;

checkbox.addEventListener("click", function () {
    toggleAutoTap();

    chrome.tabs.sendMessage(kahootId, { type: "autotap", value: toggled.toString() }, function (response) {
        console.log("Auto-tap toggled");
    });
});

function toggleAutoTap() {
    if (toggled) {
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
    toggled = !toggled;
    console.log("Toggled: " + toggled);
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

async function callKahootGPT(tab) {
    const { id, url } = tab;
    if (url.indexOf("https://kahoot.it/") > -1) {
        chrome.scripting.executeScript(
            {
                target: { tabId: id, allFrames: true },
                files: ['contentScript.js']
            });
        console.log(`Loading: ${url}`);

        await sleep(4000)

        kahootId = id;

        chrome.tabs.sendMessage(id, { type: "initialize" }, function (response) {
            if (response.data === "initialized") {
                console.log("Connected to injected script");
            }
        });

        var fadeEffect = setInterval(function () {
            if (!injection.style.opacity) {
                injection.style.opacity = 1;
            }
            if (injection.style.opacity > 0) {
                injection.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                injection.style.display = "none";
            }
        }, 25);

        openAIKey = getAPIKey();
    }
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
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
            "prompt": `Act as a professional; only respond with 4 concise answers (if there is a definite answer, only reply with one) in json format with "one", "two", "three", "four" or "one" as the key if only one answer to the following question: ` + query,
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
            console.log("KahootGPT error: " + error);
            chrome.tabs.sendMessage(kahootId, { type: "error", value: error }, function (response) {
                console.log("Error sent");
            });
        });
}

async function getAnswerWithAnswer(query, triangle, rhombus, circle, square) {
    console.log(rhombus)
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
            "prompt": `Act as a professional;  the question will be after "question:" and there are 4 possible answers "a", "b", "c", or "d", reply with a SINGLE letter ONLY:\nquestion: ` + query + "\n" + "a: " + triangle + "\n" + "b: " + rhombus + "\n" + "c: " + circle + "\n" + "d: " + square,
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

            var GPTReply = replyLines.replace(/\s/g, '').toLowerCase();

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

            chrome.tabs.sendMessage(kahootId, { type: "tap", value: ans }, function (response) {
                console.log("Send tap");
            });
        })
        .catch(error => {
            console.log("KahootGPT error: " + error);
            chrome.tabs.sendMessage(kahootId, { type: "error", value: error }, function (response) {
                console.log("Error sent");
            });
        });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



function setAPIKey(value) {
    chrome.storage.local.set({ key: value }, function () {
        console.log("Key setted");
    });
}

function getAPIKey() {
    chrome.storage.local.get(["key"], function (result) {
        console.log("Key queried");
        openAIKey = result.key;
    });
}


function setImport(value) {
    chrome.storage.local.set({ import: value }, function () {
        console.log("Import setted");
    });
}

function getImport() {
    chrome.storage.local.get(["import"], function (result) {
        console.log("Import queried");
        autoImport = result.import;
    });
}


function setReply(value) {
    chrome.storage.local.set({ reply: value }, function () {
        console.log("Reply setted");
    });
}

function getReply() {
    chrome.storage.local.get(["reply"], function (result) {
        console.log("Reply queried");
        autoReply = result.reply;
    });
}

getCurrentTab().then((tab) => {
    const { id, url } = tab;
    chrome.tabs.sendMessage(id, { type: "ping" }, function (response) {
        if (!chrome.runtime.lastError) {
            console.log("Already injected");

            var val = response.value || {};

            if (val.toString() == "true") {
                toggleAutoTap();
            }

            var fadeEffect = setInterval(function () {
                if (!injection.style.opacity) {
                    injection.style.opacity = 1;
                }
                if (injection.style.opacity > 0) {
                    injection.style.opacity -= 0.1;
                } else {
                    clearInterval(fadeEffect);
                    injection.style.display = "none";
                }
            }, 25);

            kahootId = id;

            getAPIKey();
        } else {
            console.log("Not injected; preparing injection");
            callKahootGPT(tab);
        }
    });
});
