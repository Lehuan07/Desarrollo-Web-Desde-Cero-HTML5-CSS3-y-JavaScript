
//Menu lateral desplegable en mobile

const bars = document.querySelector('.fa-bars');
const nav  = document.querySelector('.header__principal');
const arrow = document.querySelector(".fa-angle-right")

bars.addEventListener('click', () => {
    bars.style.display = "none";
    arrow.style.display = 'block'
    nav.classList.add('header__principal-active')
});

arrow.addEventListener('click', () =>{
    arrow.style.display = 'none'
    bars.style.display = "block"
    nav.classList.remove('header__principal-active')
})
