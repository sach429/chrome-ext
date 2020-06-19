// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({color: '#3aa757'}, function() {
//       console.log('The color is green.');
//     });
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//       chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: {hostEquals: 'community.scaledagile.com'},
//         })
//         ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
//   });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript(tabId, { file: 'jquery.min.js' }, function () { chrome.tabs.executeScript(tabId, { file: 'code.js' }) });
    }
});