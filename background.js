chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("kahoot.it")) {
        // Do stuff

        // Only get answer
        chrome.tabs.sendMessage(tabId, {
            type: "ANS",
            question: "question"
        });

        // Get answer and best match
        chrome.tabs.sendMessage(tabId, {
            type: "BST",
            question: "question"
        });
    }
})