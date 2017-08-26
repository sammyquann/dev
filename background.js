/*  This function causes a new tab to open to "index.html"
 *  whenever the extension icon is clicked.
 */
chrome.browserAction.onClicked.addListener(function(activeTab) {
    console.log("Hit!");
    chrome.tabs.create({ "url": "index.html" });
});
