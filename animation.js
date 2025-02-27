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