chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("kahoot.it")) {
        // Do stuff

        chrome.tabs.sendMessage(tabId, {
            type: "new_question",
            question: "question"
        })
    }
})