const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const active = document.querySelectorAll('.nav-active li');

    // Toggle Links
    burger.addEventListener('click', () => {
        // Toggle the nav bar
        nav.classList.toggle('nav-active')

        //Animation
        navLinks.forEach((link, index) => {
            if(link.style.animation === "0.5s ease 0.3s 1 normal forwards running navLinkFadeIn" || link.style.animation === "0.5s ease 0.442857s 1 normal forwards running navLinkFadeIn") {
               link.style.animation = `navLinkFadeOut 1s ease backwards ${index / 7 + 1}s`; 
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');

    });
}

navSlide();