
//Menu lateral desplegable en mobile

const bars = document.querySelector('.fa-bars');
const nav  = document.querySelector('.layout__nav');

bars.addEventListener('click', () => {
    nav.classList.toggle('nav__active');

    bars.style.display = "none";
    
});
