
//Menu lateral desplegable en mobile

const bars = document.querySelector('.fa-bars');
const nav  = document.querySelector('.header__principal');
const arrow = document.querySelector(".fa-angle-right")
const enlaces = document.querySelector(".principal__left")

bars.addEventListener('click', () => {
    bars.style.display = "none";
    arrow.classList.remove('fa-angle-right-hiden')
    nav.classList.add('header__principal-active')
});

arrow.addEventListener('click', () =>{
    arrow.classList.add('fa-angle-right-hiden')
    bars.style.display = "block"
    nav.classList.remove('header__principal-active')
})

enlaces.addEventListener('click', ()=>{
    setTimeout(()=>{
        nav.classList.remove('header__principal-active')
        arrow.classList.add('fa-angle-right-hiden')
        bars.style.display = "block"

    }, 500)
})