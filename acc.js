const timer = setInterval(function () {
    const b = document.getElementById('bigCookie');
    const g = document.getElementById('shimmers');
    b.click();
    if (g.hasChildNodes()) {
        g.childNodes[0].click();
    }
}, 4);
