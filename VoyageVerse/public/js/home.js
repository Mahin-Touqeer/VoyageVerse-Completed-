const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const images = document.querySelectorAll(".reveal-from-left");

setTimeout(() => {
    images[0].classList.add("visible");
}, 0)
setTimeout(() => {
    images[2].classList.add("visible");
}, 500);
setTimeout(() => {
    images[1].classList.add("visible");
}, 1000)

const h1 = document.querySelector(".text h1")
const p = document.querySelector(".text p")
setTimeout(() => {
    h1.classList.add("visible")
}, 1500)
setTimeout(() => {
    p.classList.add("visible")
}, 2000)
const h1_2 = document.querySelector(".content h1")
document.addEventListener("scrollend", () => {
    h1_2.classList.add("visible");
})

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".reveal-from-down");
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;
        images.forEach((img) => {
            const imgTop = img.getBoundingClientRect().top;
            console.log(imgTop);
            if (imgTop < triggerBottom) {
                img.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

document.querySelector(".homeBtn").style.color = 'black'