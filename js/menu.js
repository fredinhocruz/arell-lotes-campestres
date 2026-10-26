document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-links");
    const overlay = document.getElementById("menu-overlay");

    if (!btn || !menu || !overlay) return;

    function abrir() {
        menu.classList.add("active");
        overlay.classList.add("active");
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.setAttribute("aria-expanded", "true");
    }

    function cerrar() {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        btn.innerHTML = '<i class="fas fa-bars"></i>';
        btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", () => {
        menu.classList.contains("active") ? cerrar() : abrir();
    });

    overlay.addEventListener("click", cerrar);

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            cerrar();

        });

    });

});