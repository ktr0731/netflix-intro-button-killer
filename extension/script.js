new MutationObserver(() => {
    const e = document.querySelector(".ptrack-container");
    e && document.querySelector(".VideoContainer").click();
}).observe(document.querySelector("#appMountPoint"), {
    childList: true,
    subtree: true
});
