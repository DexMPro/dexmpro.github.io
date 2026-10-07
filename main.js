// Texto animado del hero
new Typed("#typed", {
    strings: [
        "Desarrollo aplicaciones web a la medida.",
        "PHP · JavaScript · React · Node.js · MySQL",
        "Soluciones digitales orientadas al negocio."
    ],
    typeSpeed: 45,
    backSpeed: 25,
    backDelay: 1800,
    loop: true
});

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));

nav.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => nav.classList.remove("open"))
);

// Borde del header al hacer scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
});

// Aparecer elementos al hacer scroll
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Marcar la sección activa en el menú
const navLinks = document.querySelectorAll(".nav a");
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a =>
                a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
            );
        }
    });
}, { rootMargin: "-45% 0px -50% 0px" });

document.querySelectorAll("section[id]").forEach(s => sectionObserver.observe(s));

// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();
