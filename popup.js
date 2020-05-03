var __chrome;
if (typeof 'chrome' !== 'undefined') {
    __chrome = chrome;
} else if (typeof 'browser' !== 'undefined') {
    __chrome = browser;
} else {

}
var chrome = __chrome;

const textarea = document.querySelector('textarea');

chrome.storage.sync.get(['gls'], function (result) {
    textarea.value = JSON.parse(result.gls).join('\n');
});

textarea.addEventListener('input', (e) => {
    const gls = e.target.value.split('\n').map(e => e.trim()).filter(e => e);
    chrome.storage.sync.set({ gls: JSON.stringify(gls) }, function () { });
});