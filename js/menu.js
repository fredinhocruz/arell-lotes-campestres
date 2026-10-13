/*=========================================================
  MENU.JS
  ARELL LOTES CAMPESTRES V2
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const menuOverlay = document.getElementById("menu-overlay");

    if (!menuToggle || !navLinks) return;

    // Abrir / cerrar menú
    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if(menuOverlay){
            menuOverlay.classList.toggle("active");
        }

        // Cambia el icono
        const icon = menuToggle.querySelector("i");

        if(icon){

            if(navLinks.classList.contains("active")){

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            }else{

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

    // Cerrar al tocar el fondo oscuro

    if(menuOverlay){

        menuOverlay.addEventListener("click", closeMenu);

    }

    // Cerrar al pulsar un enlace

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click", closeMenu);

    });

    // Cerrar al cambiar tamaño de pantalla

    window.addEventListener("resize",()=>{

        if(window.innerWidth>768){

            closeMenu();

        }

    });

    function closeMenu(){

        navLinks.classList.remove("active");

        if(menuOverlay){

            menuOverlay.classList.remove("active");

        }

        const icon = menuToggle.querySelector("i");

        if(icon){

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});