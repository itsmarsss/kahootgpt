(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, question, triangle, rhombus, circle, square } = obj;

        if (type === "ANS") {
            promptGPTANS();
        }

        if (type === "BST") {
            promptGPTBST();
        }
    });
})