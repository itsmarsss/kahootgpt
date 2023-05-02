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

const openaikeyinput = document.getElementById("openaikeyinput");
const storekey = document.getElementById("storekey");
const autohi = document.getElementById("autohighlight");
const autoin = document.getElementById("autoimport");
const save = document.getElementById("save");

const attach = document.getElementById("attach");
const fakeattach = document.getElementById("fake");
const detach = document.getElementById("detach");

const extpay_life = ExtPay('kahoot-gpt');

var toggled = false;

var kahootId = 0;

var attached = false;

var paid = false;
var openAIKey = "YOUR_KEY";
var autoHighlight = false;
var autoImport = false;

async function callKahootGPT(tab) {
    const { id, url } = tab;
    if (url.indexOf("https://kahoot.it/") > -1) {
        chrome.scripting.executeScript(
            {
                target: { tabId: id, allFrames: true },
                files: ['/popup/contentScript.js']
            });
        console.log(`Loading: ${url}`);

        getImport();

        await sleep(4000);

        kahootId = id;
        attached = true;

        chrome.tabs.sendMessage(id, { type: "initialize", value: paid.toString() }, function (response) {
            if (response.data === "initialized") {
                console.log("Connected to injected script");
            }
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

        openAIKey = getAPIKey();
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
}

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function setAPIKey(value) {
    chrome.storage.local.set({ key: value }, function () {
        console.log("Key setted");
        openAIKey = value;
    });
}

function getAPIKey() {
    chrome.storage.local.get(["key"], function (result) {
        console.log("Key queried");
        openAIKey = result.key;
    });
}

function setHighlight(value) {
    chrome.storage.local.set({ highlight: value }, function () {
        console.log("Highlight setted");
        autoHighlight = value;
    });
}

function getHighlight() {
    chrome.storage.local.get(["highlight"], function (result) {
        console.log("Highlight queried");
        autoHighlight = result.highlight;
    });
}

function setImport(value) {
    chrome.storage.local.set({ import: value }, function () {
        console.log("Import setted");
        autoImport = value;
    });
}

function getImport() {
    chrome.storage.local.get(["import"], function (result) {
        console.log("Import queried");
        autoImport = result.import;
    });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

document.getElementsByClassName('life')[0].addEventListener('click', extpay_life.openPaymentPage);

extpay_life.getUser().then(user_life => {
    if (user_life.paid) {
        paid = true;
        document.querySelector('p').innerHTML = 'User has paid! 🎉';

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
        });
    }
}).catch(err => {
    document.querySelector('p').innerHTML = "Error fetching data :("
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
        chrome.tabs.sendMessage(id, { type: "ping" }, function (response) {
            if (!chrome.runtime.lastError) {
                console.log("Already injected");

                var val = response.value || {};

                if (val.toString() == "true") {
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
    chrome.tabs.reload(kahootId);
});

settings.addEventListener("click", async function () {
    if (storekey.checked) {
        getAPIKey();
    }

    getHighlight();
    getImport();

    await sleep(500);

    openaikeyinput.value = openAIKey;

    autohi.checked = autoHighlight;
    autoin.checked = autoImport;

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

openaikeyinput.addEventListener("mouseover", function () {
    openaikeyinput.type = "text";
});

openaikeyinput.addEventListener("mouseout", function () {
    openaikeyinput.type = "password";
});

save.addEventListener("click", async function () {
    if (storekey.checked) {
        if (openaikeyinput.value != openAIKey) {
            setAPIKey(openaikeyinput.value);
            chrome.tabs.sendMessage(kahootId, { type: "setapikey", value: openaikeyinput.value }, function (response) { });
        }
    } else {
        openAIKey = openaikeyinput.value;
    }


    if (autohi.checked != autoHighlight) {
        setHighlight(autohi.checked);
        chrome.tabs.sendMessage(kahootId, { type: "sethighlight", value: autohi.checked.toString() }, function (response) { });
    }
    if (autoin.checked != autoImport) {
        setImport(autoin.checked);
        chrome.tabs.sendMessage(kahootId, { type: "setimport", value: autoin.checked.toString() }, function (response) { });
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

var checkAvailability = setInterval(function () {
    chrome.tabs.sendMessage(
        kahootId,
        { type: "checkup", value: openAIKey },
        (result) => {
            if (!window.chrome.runtime.lastError) {
                cover.style.display = "none";
                checkbox.disabled = false;
            } else {
                console.log("Disconnected");
                attached = false;
                cover.style.display = "block";
                if (toggled) {
                    checkbox.click();
                }
                checkbox.disabled = true;
            }
        });
}, 100);

nopay.addEventListener("click", function () {
    closepaypage();
});

const manifest = chrome.runtime.getManifest();
console.log("Version: v" + manifest.version);
document.getElementById("KahootGPT").innerHTML = `KahootGPT v${manifest.version}`;