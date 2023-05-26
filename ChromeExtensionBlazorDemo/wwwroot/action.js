// Import for the side effect of defining a global 'browser' variable
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});