// ============================
// CURSOR GLOW
// ============================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
});


// ============================
// SCROLL
// ============================

function scrollToSection(id) {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ============================
// CONTADORES
// ============================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = parseFloat(
                counter.dataset.target
            );

            let current = 0;

            const duration = 1300;

            const startTime = performance.now();

            function update(time) {

                const progress =
                    Math.min((time - startTime) / duration, 1);

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current = target * eased;

                if (target % 1 !== 0) {
                    counter.textContent = current.toFixed(2);
                } else {
                    counter.textContent = Math.floor(current);
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);

            observer.unobserve(counter);
        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    observer.observe(counter);
});


// ============================
// TÉCNICAS
// ============================

function selectTechnique(element) {

    const techniques =
        document.querySelectorAll(".technique");

    techniques.forEach(item => {
        item.classList.remove("active");
    });

    element.classList.add("active");
}


// ============================
// CURIOSIDADE
// ============================

const popup =
    document.getElementById("factPopup");

function showFact() {
    popup.classList.add("show");
}

function closeFact() {
    popup.classList.remove("show");
}

popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        closeFact();
    }

});


// ============================
// TECLA ESC
// ============================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeFact();
    }

});


// ============================
// NAVBAR AO ROLAR
// ============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background =
            "rgba(8, 9, 11, 0.92)";
    } else {
        navbar.style.background =
            "rgba(8, 9, 11, 0.75)";
    }

});