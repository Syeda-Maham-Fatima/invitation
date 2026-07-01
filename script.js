
// ===============================
// Countdown Timer
// ===============================

// Apni Event Date yahan change kar den
const eventDate = new Date("July 05, 2026 08:30:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        days < 10 ? "0" + days : days;

    document.getElementById("hours").innerHTML =
        hours < 10 ? "0" + hours : hours;

    document.getElementById("minutes").innerHTML =
        minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("seconds").innerHTML =
        seconds < 10 ? "0" + seconds : seconds;

    if (distance <= 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML = `
            <h2 style="color:#ff4f8b;">
                🎉 The Aqiqah Celebration Has Started! 🎉
            </h2>
        `;

    }

}, 1000);

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    } else {
        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
    }

});

// ===============================
// Smooth Fade-in Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// ===============================
// Gallery Hover Effect
// ===============================

const images = document.querySelectorAll(".images img");

images.forEach(image => {

    image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.08)";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });

});
