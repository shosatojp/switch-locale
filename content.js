function injectScript(parent, path) {
    const e = document.createElement('script');
    if (chrome) {
        e.setAttribute('src', chrome.extension.getURL(path));
    } else if (browser) {
        e.setAttribute('src', browser.runtime.getURL(path));
    }
    parent.appendChild(e);
}

injectScript(document.documentElement, '/inject.js');
