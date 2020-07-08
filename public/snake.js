document.querySelector('.fullscreen-toggle').addEventListener('click', e => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});