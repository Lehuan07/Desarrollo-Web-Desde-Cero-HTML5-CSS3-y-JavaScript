
//Menu lateral desplegable en mobile

const bars = document.querySelector('.fa-bars');
const nav  = document.querySelector('.layout__nav');
const arrow = document.querySelector(".fa-angle-right")

bars.addEventListener('click', () => {
    nav.classList.add('layout__nav-active');
    bars.style.display = "none";
    
});

arrow.addEventListener('click', () =>{
    nav.classList.remove('layout__nav-active');
    bars.style.display = "block"
})
