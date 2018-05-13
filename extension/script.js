window.setTimeout(() => {
    new MutationObserver(() => {
        const e = document.querySelector(".VideoContainer");
        e && e.click();
    }).observe(document.querySelector(".AkiraPlayer"), {childList: true});
}, 10000);
