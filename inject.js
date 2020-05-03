(() => {
    function getParams() {
        const params = {};
        location.search
            .slice(1)
            .split('&')
            .map(e => e.split('='))
            .forEach(e => params[e[0]] = e[1]);
        return params;
    }

    function createURL(options) {
        const queryString = Object.keys(options).map(k => `${k}=${options[k]}`).join('&');
        return `${location.protocol}//${location.hostname}${location.pathname}?${queryString}`;
    }

    function switchGl(prevGl) {
        switch (prevGl) {
            case 'us':
                return 'jp';
            case 'jp':
            default:
                return 'us';
        }
    }

    function insertUI() {
        const e = document.createElement('button');
        const params = getParams();
        const gl = switchGl(params.gl);
        e.addEventListener('click', () => {
            Object.assign(params, { gl });
            location.href = createURL(params);
        });
        e.textContent = `Switch to '${gl}'`;
        document.querySelector('#hdtb-msb').appendChild(e);
    }

    insertUI();
})();