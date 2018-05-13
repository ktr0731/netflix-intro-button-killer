new MutationObserver(() => {
    const e = document.querySelector(".VideoContainer");
    e && e.click();
}).observe(document.querySelector("#appMountPoint"), {
    childList: true,
    subtree: true
});
