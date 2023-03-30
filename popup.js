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

let toggled = false;

let kahootId;

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

    chrome.tabs.sendMessage(id, { type: "autotap", value: toggled }, function (response) {
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
    }

    await sleep(5000)

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
        }
    }, 25);

    injection.style.display = "none";
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
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
                }
            }, 25);

            injection.style.display = "none";
        } else {
            console.log("Not injected; preparing injection");
            callKahootGPT(tab);
        }
    });
});


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
