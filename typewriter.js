const text = document.querySelector(".second");
const sliderTrack = document.querySelector(".slider-track");
const items = document.querySelectorAll(".item");
let currentIndex = -1;

const updateSlider = (index) => {
    items.forEach((item, i) => {
        item.classList.remove("active", "inactive");
        if (i === index) {
            item.classList.add("active");
        } else {
            item.classList.add("inactive");
        }
    });

    if (index === 0) {
        sliderTrack.style.transition = 'none';
        sliderTrack.offsetHeight;
        sliderTrack.style.transition = 'transform 1s ease-in-out';
    }
};

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Design";
        currentIndex = (currentIndex + 1) % 3;
        updateSlider(currentIndex);
    }, 0);

    setTimeout(() => {
        text.textContent = "Game Development";
        currentIndex = (currentIndex + 1) % 3;
        updateSlider(currentIndex);
    }, 4000);

    setTimeout(() => {
        text.textContent = "Media Production";
        currentIndex = (currentIndex + 1) % 3;
        updateSlider(currentIndex);
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
