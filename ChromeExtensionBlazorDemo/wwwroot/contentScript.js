if (typeof init === 'undefined') {
    const init = function () {
        const injectElement = document.createElement('div');
        injectElement.className = 'cbt-element';
        injectElement.innerHTML = 'Hello World!';
        console.log(document.getElementsByClassName('MV3Tnb')[0])
        document.body.appendChild(injectElement);
    }
    init();
}