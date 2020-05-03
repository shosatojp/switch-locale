var __chrome;
if (typeof 'chrome' !== 'undefined') {
    __chrome = chrome;
} else if (typeof 'browser' !== 'undefined') {
    __chrome = browser;
} else {

}
var chrome = __chrome;

function injectScript(parent, path) {
    const e = document.createElement('script');
    e.setAttribute('src', chrome.extension.getURL(path));
    parent.appendChild(e);
}

injectScript(document.documentElement, '/inject.js');

/**
 * set `current` gl
 */
document.addEventListener('shosato.jp/switch-lang', e => {
    chrome.storage.sync.set({ current: e.detail.gl }, function () {
        console.log('current gl changed to ' + e.detail.gl);
    });
    const ev = new CustomEvent('shosato.jp/switch-lang/r');
    document.dispatchEvent(ev);
});

/**
 * return gl list
 */
document.addEventListener('shosato.jp/switch-lang/gls', e => {
    chrome.storage.sync.get(['gls'], function (result) {
        const gls = JSON.parse(result.gls);
        const ev = new CustomEvent('shosato.jp/switch-lang/gls/r', {
            detail: { gls }
        });
        document.dispatchEvent(ev);
    });
});
