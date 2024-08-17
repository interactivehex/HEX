const text = document.querySelector(".second");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Game Development"
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Design"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Media Production"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
