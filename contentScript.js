chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var type = request.type || {};
    var value = request.value || {};

    switch (type) {
        case "initialize":
            console.log("Connected to popup script");
            sendResponse({ data: "initialized", success: true });
            break;
        case "autotap":
            console.log("Auto-tap-" + value.toString());
            sendResponse({ data: "autotap-" + value.toString(), success: true });
            break;
        case "ping":
            console.log("Got pinged");
            sendResponse({ data: "pong", success: true });
            break;
    }
});
