const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const closeIcon = document.querySelector(".icon-close");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const primaryNav = document.querySelector(".primary-navigation");

const downloadResume = document.querySelector(".download-resume");
const arrowContainer = document.querySelector(".arrow-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const lupe = document.querySelector(".doge");
let intervalNum;

navToggle.addEventListener("click", () => {
    if (primaryNav.hasAttribute("data-visible")) {
        closeNav();
    } else {
        openNav();
    }
});

document.addEventListener("click", (e) => {
    if (
        (e.target.className === "primary-header" ||
            e.target?.className === "left-arrow") &&
        primaryNav.hasAttribute("data-visible")
    ) {
        closeNav();
    }
    if (
        downloadResume.hasAttribute("data-show-download") &&
        e.target?.className !== "left-arrow"
    ) {
        closeDownloadResume();
    }
});

const closeNav = () => {
    primaryNav.setAttribute("aria-expanded", false);
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
};

const openNav = () => {
    primaryNav.setAttribute("aria-expanded", true);
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
};

arrowContainer.addEventListener("click", () => {
    if (downloadResume.hasAttribute("data-show-download")) {
        closeDownloadResume();
    } else {
        openDownloadResume();
    }
});

const openDownloadResume = () => {
    leftArrow.style.display = "none";
    rightArrow.style.display = "block";
    downloadResume.toggleAttribute("data-show-download");
};

const closeDownloadResume = () => {
    leftArrow.style.display = "block";
    rightArrow.style.display = "none";
    downloadResume.toggleAttribute("data-show-download");
};

lupe.addEventListener("mouseover", () => {
    const randomInt = Math.floor(Math.random() * 10 + 1);
    lupe.style.cursor = `url(assets/lupe/${randomInt}.png), auto`;
    intervalNum = window.setInterval(() => {
        const randomInt = Math.floor(Math.random() * 10 + 1);
        console.log(randomInt);
        lupe.style.cursor = `url(assets/lupe/${randomInt}.png), auto`;
    }, 400);
});

lupe.addEventListener("mouseout", () => {
    window.clearInterval(intervalNum);
});
