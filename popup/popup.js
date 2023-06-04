const injection = document.getElementById("injection");
const purchase = document.getElementById("pay");
const nopay = document.getElementById("nopay");

const cover = document.getElementById("cover");

const settings = document.getElementById("settings");
const config = document.getElementById("config");

const checkbox = document.getElementById("checkbox");
const toggle = document.getElementById("toggle");
const powericon = document.getElementById("power-icon");
const tapstatus = document.getElementById("autoclick-status");

const kgptconfigbutton = document.getElementById("kgpt-config-button");
const kgptconfig = document.getElementById("kgpt-config");


const openaiconfigbutton = document.getElementById("openai-config-button");
const openaiconfig = document.getElementById("openai-config");


const openaikeyinput = document.getElementById("openaikeyinput");
const storekey = document.getElementById("storekey");
const autohi = document.getElementById("autohighlight");
const autoin = document.getElementById("autoimport");

const models = document.getElementById("models");

const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

const attach = document.getElementById("attach");
const fakeattach = document.getElementById("fake");
const detach = document.getElementById("detach");

const kgptconsole = document.getElementById("console");

const extpay_life = ExtPay('kahoot-gpt');

var toggled = false;

var kahootId = 0;

var attached = false;

var paid = false;
var openAIKey;
var autoHighlight = false;
var autoImport = false;
var model = "gpt-3.5-turbo";

async function callKahootGPT(tab) {
    const { id, url } = tab;
    if (url.startsWith("https://kahoot.it/")) {
        chrome.scripting.executeScript(
            {
                target: { tabId: id, allFrames: true },
                files: ['/popup/contentScript.js']
            });
        console.log(`Loading: ${url}`);
        logVerb(`Loading: ${url}`);

        await sleep(4000);

        kahootId = id;
        attached = true;

        chrome.tabs.sendMessage(id, {
            type: "initialize", value: paid.toString(),
            key: openAIKey,
            hl: autoHighlight.toString(),
            im: autoImport.toString(),
            md: model.toString()
        }, function (response) {
            if (response.data === "initialized") {
                console.log("Connected to injected script");
            }
            logLog("Connected");
        });

        await sleep(100);

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

        if (!toggled) {
            checkbox.click();
        }
    }
}

function toggleAutoTap() {
    if (toggled) {
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
    toggled = !toggled;
    console.log("Toggled: " + toggled);
    logLog("Toggled: " + toggled);
}

function closepaypage() {
    var fadeEffect = setInterval(function () {
        if (!purchase.style.opacity) {
            purchase.style.opacity = 1;
        }
        if (purchase.style.opacity > 0) {
            purchase.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            purchase.style.display = "none";
        }
    }, 12);
    logDebug("Pay page closed");
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    logDebug("Retrieved currect tab");
    return tab;
}

function setAPIKey(value) {
    chrome.storage.local.set({ key: value }, function () {
        console.log("Key setted");
        openAIKey = value;
        logVerb("API key set");
    });
}

function getAPIKey() {
    chrome.storage.local.get(["key"], function (result) {
        console.log("Key queried");
        openAIKey = result.key || openAIKey;
        logVerb("API key retrieved");
    });
}

function setHighlight(value) {
    chrome.storage.local.set({ highlight: value }, function () {
        console.log("Highlight setted");
        autoHighlight = value;
        logVerb("Highlight set");
    });
}

function getHighlight() {
    chrome.storage.local.get(["highlight"], function (result) {
        console.log("Highlight queried");
        autoHighlight = result.highlight || autoHighlight;
        logVerb("Highlight retrieved");
    });
}

function setImport(value) {
    chrome.storage.local.set({ import: value }, function () {
        console.log("Import setted");
        autoImport = value;
        logVerb("Import set");
    });
}

function getImport() {
    chrome.storage.local.get(["import"], function (result) {
        console.log("Import queried");
        autoImport = result.import || autoImport;
        logVerb("Import retrieved");
    });
}

function setModel(value) {
    chrome.storage.local.set({ model: value }, function () {
        console.log("Model setted");
        model = value;
        logVerb("Model set");
    });
}

function getModel() {
    chrome.storage.local.get(["model"], function (result) {
        console.log("Model queried");
        model = result.model || model;
        logVerb("Model retrieved");
    });
}

/*
<span class="error">Error</span>
<span class="log">Log</span>
<span class="debug">Debug</span>
<span class="verb">Verb</span>
*/
function logError(msg) {
    appendConsole(`<span data="entry" class="entry error">${msg}</span>`);
}
function logLog(msg) {
    appendConsole(`<span data="entry" class="entry log">${msg}</span>`);
}
function logDebug(msg) {
    appendConsole(`<span data="entry" class="entry debug">${msg}</span>`);
}
function logVerb(msg) {
    appendConsole(`<span data="entry" class="entry verb">${msg}</span>`);
}
function appendConsole(log) {
    kgptconsole.innerHTML += log;

    let entry_list = document.querySelectorAll('[data="entry"]');
    while (entry_list.length > 50) {
        entry_list = document.querySelectorAll('[data="entry"]');
        entry_list[0].outerHTML = "";
    }

    kgptconsole.scroll({
        top: kgptconsole.scrollHeight,
        behavior: 'smooth'
    });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

kgptconfigbutton.addEventListener("click", function () {
    kgptconfig.style.display = "block";
    openaiconfig.style.transform = "translateX(500px)";
    kgptconfig.style.transform = "translateX(0px)";

    kgptconfigbutton.style.background = "linear-gradient(#525252, #52525200)";
    openaiconfigbutton.style.background = "transparent";
});

openaiconfigbutton.addEventListener("click", function () {
    openaiconfig.style.display = "block";
    kgptconfig.style.transform = "translateX(-500px)";
    openaiconfig.style.transform = "translateX(0px)";

    openaiconfigbutton.style.background = "linear-gradient(#525252, #52525200)";
    kgptconfigbutton.style.background = "transparent";
});

document.getElementsByClassName('life')[0].addEventListener('click', extpay_life.openPaymentPage);

extpay_life.getUser().then(user_life => {
    if (user_life.paid) {
        paid = true;
        document.querySelector('p').innerHTML = 'User has paid! 🎉';
        logDebug("User has paid");

        checkbox.addEventListener("click", function () {
            toggleAutoTap();

            chrome.tabs.sendMessage(kahootId, { type: "autotap", value: toggled.toString() }, function (response) {
                console.log("Auto-tap: Toggled");
            });
        });
    } else {
        checkbox.addEventListener("click", function () {
            purchase.style.display = "block";
            checkbox.style.boxShadow = "none";
            toggle.style.background = "#ff9494";
            powericon.style.fill = "#ff9494";
            tapstatus.innerHTML = "Auto-tap ERROR";
            tapstatus.style.color = "#ff9494";

            var opacity = 0;
            purchase.style.opacity = opacity;
            var fadeEffect = setInterval(function () {
                if (purchase.style.opacity < 1) {
                    opacity += 0.1;
                    purchase.style.opacity = opacity;
                } else {
                    clearInterval(fadeEffect);
                }
            }, 12);

            console.log("Auto-tap: Not paid");
            logDebug("User has not paid");
        });
    }
}).catch(err => {
    document.querySelector('p').innerHTML = "Error fetching data :(";
    logError("Error fetching data");
});

attach.addEventListener("click", function () {
    attachScript();
});
fakeattach.addEventListener("click", function () {
    attachScript();
});
function attachScript() {
    injection.style.display = "flex";
    var opacity = 0;
    injection.style.opacity = opacity;
    var fadeEffect = setInterval(function () {
        if (injection.style.opacity < 1) {
            opacity += 0.1;
            injection.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 12);
    getCurrentTab().then((tab) => {
        const { id, url } = tab;
        chrome.tabs.sendMessage(id, {
            type: "ping", value: "settings",
            key: openAIKey,
            hl: autoHighlight.toString(),
            im: autoImport.toString(),
            md: model.toString()
        }, function (response) {
            if (!chrome.runtime.lastError) {
                console.log("Already injected");
                logVerb("Already injected");
                logLog("Connected");

                var val = response.value || {};

                if (val.toString() === "true") {
                    checkbox.disabled = false;
                    checkbox.click();
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
                attached = true;

                getAPIKey();
                getImport();
            } else {
                console.log("Not injected; preparing injection");
                callKahootGPT(tab);
            }
        });
    });
}

detach.addEventListener("click", function () {
    getCurrentTab().then((tab) => {
        const { id, url } = tab;
        kahootId = id;

        chrome.tabs.reload(kahootId);

        if (toggled) {
            checkbox.click();
        }

        logLog("Detached (reloaded)");
    });
});

settings.addEventListener("click", async function () {
    logDebug("Open settings");

    if (storekey.checked) {
        getAPIKey();
    }

    getHighlight();
    getImport();
    getModel();

    await sleep(500);

    openaikeyinput.value = openAIKey;

    autohi.checked = autoHighlight;
    autoin.checked = autoImport;

    if (model === "gpt-3.5-turbo") {
        models.selectedIndex = 0;
    } else {
        models.selectedIndex = 1;
    }

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

    kgptconfigbutton.click();
});

openaikeyinput.addEventListener("mouseover", function () {
    openaikeyinput.type = "text";
});

openaikeyinput.addEventListener("mouseout", function () {
    openaikeyinput.type = "password";
});

save.addEventListener("click", async function () {
    logDebug("Close settings - save changes");

    if (storekey.checked) {
        if (openaikeyinput.value != openAIKey) {
            setAPIKey(openaikeyinput.value);
            chrome.tabs.sendMessage(kahootId, { type: "setapikey", value: openaikeyinput.value }, (result) => {
                if (window.chrome.runtime.lastError) {
                    logError("Error sending data - <i>you can ignore this</i>");
                }
            });
        }
    } else {
        openAIKey = openaikeyinput.value;
    }


    if (autohi.checked != autoHighlight) {
        setHighlight(autohi.checked);
        chrome.tabs.sendMessage(kahootId, { type: "sethighlight", value: autohi.checked.toString() }, (result) => {
            if (window.chrome.runtime.lastError) {
                logError("Error sending data - <i>you can ignore this</i>");
            }
        });
    }

    if (autoin.checked != autoImport) {
        setImport(autoin.checked);
        chrome.tabs.sendMessage(kahootId, { type: "setimport", value: autoin.checked.toString() }, (result) => {
            if (window.chrome.runtime.lastError) {
                logError("Error sending data - <i>you can ignore this</i>");
            }
        });
    }

    if (models.options[models.selectedIndex].text != model) {
        setModel(models.options[models.selectedIndex].text);
        chrome.tabs.sendMessage(kahootId, { type: "setModel", value: models.options[models.selectedIndex].text.toString() }, (result) => {
            if (window.chrome.runtime.lastError) {
                logError("Error sending data - <i>you can ignore this</i>");
            }
        });
    }

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

cancel.addEventListener("click", async function () {
    logDebug("Close settings - cancel changes");

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

var checkAvailability = setInterval(function () {
    chrome.tabs.sendMessage(
        kahootId,
        { type: "checkup", value: openAIKey },
        (result) => {
            if (!window.chrome.runtime.lastError) {
                cover.style.display = "none";
                checkbox.disabled = false;
                //logVerb("Reconnected");
            } else {
                console.log("Disconnected");
                attached = false;
                cover.style.display = "block";
                if (toggled) {
                    checkbox.click();
                }
                checkbox.disabled = true;
                //logVerb("Disconnected");
            }
        });
}, 100);

nopay.addEventListener("click", function () {
    closepaypage();
});

getAPIKey();
getHighlight();
getImport();
getModel();

const manifest = chrome.runtime.getManifest();
console.log("Version: v" + manifest.version);
document.getElementById("KahootGPT").innerHTML = `KahootGPT v${manifest.version}`;

logLog(`~~~ Welcome to KahootGPT v${manifest.version}~~~`);