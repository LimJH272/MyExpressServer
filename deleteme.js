document.getElementsByClassName('video-ads')[0].remove();
observer = new MutationObserver((r, o) => {
    for (var cls of document.getElementsByClassName('html5-video-player')[0].classList) {
        if (cls.indexOf('ad-') !== -1){
            console.log(cls);
            document.getElementsByClassName('html5-video-player')[0].classList.remove(cls);
        }
    }
});

function recursiveSearch(elem) {
    console.log(elem.classList);
    while (elem.childElementCount > 0) {
        Array.from(elem.children).forEach((child) => recursiveSearch(child));
    }
}