let activeTabId = null;
let activeStartTime = null;

chrome.tabs.onActivated.addListener(activeInfo => {
  logTime();
  activeTabId = activeInfo.tabId;
  activeStartTime = new Date();
});

function logTime() {
  if (activeTabId && activeStartTime) {
    const endTime = new Date();
    const timeSpent = (endTime - activeStartTime) / 1000;

    chrome.tabs.get(activeTabId, tab => {
      const url = tab.url;
      fetch('http://localhost:5000/api/timelog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, timeSpent, date: new Date(), userId: 'user1' })
      });
    });
  }
}

chrome.tabs.onRemoved.addListener(() => logTime());

// Blocking distracting sites
const blockedSites = ["facebook.com", "instagram.com"];
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: blockedSites.some(site => details.url.includes(site))};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
