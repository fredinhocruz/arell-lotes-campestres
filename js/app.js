const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';
    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});