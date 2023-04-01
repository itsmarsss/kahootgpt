let toggled = false;

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
        case "error":
            console.log("Error sent");
            alert("KahootGPT error: " + error);
            sendResponse({ value: toggled.toString(), success: true });
            break;
    }
});
