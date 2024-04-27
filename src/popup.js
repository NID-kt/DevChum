function translateChromeIcon(){
    chrome.action.setBadgeBackgroundColor(
        {color: '#00FF00'},  // Also green
        () => { /* ... */ },
      );
}

function navigateToPopupHtml() {
  chrome.tabs.create({ url: "popup.html" });
}