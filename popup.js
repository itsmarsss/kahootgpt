const injection = document.getElementById("injection");

const checkbox = document.getElementById("checkbox");
const toggle = document.getElementById("toggle");
const powericon = document.getElementById("power-icon");
const tapstatus = document.getElementById("autoclick-status");

const footer = document.getElementById("footer");
const socials = document.getElementById("socials");

socials.addEventListener("mouseover", function () {
    footer.style.background = "#9d86c3";
});

socials.addEventListener("mouseout", function () {
    footer.style.background = "#525252";
});

var toggled = false;

var kahootId;

var openAIKey = "ohnononono";

checkbox.addEventListener("click", function () {
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

    chrome.tabs.sendMessage(kahootId, { type: "autotap", value: toggled.toString() }, function (response) {
        console.log("Auto-tap toggled");
    });
});

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
    }
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}


async function getAnswerOnly(question) {
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
            "prompt": `Act as a professional; only respond with 4 concise answers (if there is a definite answer, only reply with one) in json format with "one", "two", "three", "four" or "one" as the key if only one answer to the following question: ` + question,
            "temperature": 0.7,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        })
    }).then(response => response.json())
        .then(data => console.log(data.choices[0].text))
        .catch(error => {
            console.log("KahootGPT error: " + error);
            alert("KahootGPT error: " + error);
        });

}

async function getAnswerWithAnswer(question, circle, rhombus, triangle, square) {

}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function setAPIKey(value) {
    chrome.storage.sync.set({ key: value }).then(() => {
        console.log("Value is set to " + value);
    });
}

function syncAPIKey() {
    chrome.storage.sync.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
    });
}

getCurrentTab().then((tab) => {
    const { id, url } = tab;
    chrome.tabs.sendMessage(id, { type: "ping" }, function (response) {
        if (!chrome.runtime.lastError) {
            console.log("Already injected");
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
        } else {
            console.log("Not injected; preparing injection");
            callKahootGPT(tab);
        }
    });
});
