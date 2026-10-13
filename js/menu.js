/*=========================================================
MENU.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const menuOverlay = document.getElementById("menu-overlay");

    if (!menuToggle || !navLinks) return;

    function openMenu() {

        navLinks.classList.add("active");

        if (menuOverlay) {
            menuOverlay.classList.add("active");
        }

        menuToggle.innerHTML = '<i class="fas fa-times"></i>';

    }

    function closeMenu() {

        navLinks.classList.remove("active");

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    }

    menuToggle.addEventListener("click", () => {

        if (navLinks.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeMenu);
    }

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });

});