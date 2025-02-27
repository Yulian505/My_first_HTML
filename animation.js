document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    });

    images.forEach(img => observer.observe(img));
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelectorAll("video");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }
        });
    });

    video.forEach(video => observer.observe(video));
});


const button = document.querySelector("input");

button.addEventListener("click", () => {
    button.style.transform = "scale(0.9)";

    setTimeout(() => {
        button.style.transform = "scale(1.1)"; // Rebote hacia afuera
    }, 100);

    setTimeout(() => {
        button.style.transform = "scale(1)"; // Vuelve a su tamaño normal
    }, 200);

    // Destello al hacer clic
    button.style.animation = "flash 0.5s";
    setTimeout(() => {
        button.style.animation = ""; // Quita la animación después de un ciclo
    }, 500);
});
