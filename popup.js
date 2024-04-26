function translateChromeIcon(){
    chrome.action.setBadgeBackgroundColor(
        {color: '#00FF00'},  // Also green
        () => { /* ... */ },
      );
}