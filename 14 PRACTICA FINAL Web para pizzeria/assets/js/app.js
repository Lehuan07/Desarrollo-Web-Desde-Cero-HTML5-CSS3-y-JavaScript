
//Menu lateral desplegable en mobile

const bars = document.querySelector('.fa-bars');
const nav  = document.querySelector('.header__principal');
const arrow = document.querySelector(".move__right--mobile-hiden")
const enlaces = document.querySelector(".principal__left")

bars.addEventListener('click', () => {
    bars.style.display = "none";
    arrow.classList.remove('move__right--mobile-hiden')
    arrow.classList.add('move__right--mobile')
    nav.classList.add('header__principal-active')
});

arrow.addEventListener('click', () =>{
    arrow.classList.remove('move__right--mobile')
    arrow.classList.add('move__right--mobile-hiden')
    bars.style.display = "block"
    nav.classList.remove('header__principal-active')
})

enlaces.addEventListener('click', ()=>{
    setTimeout(()=>{
        arrow.classList.remove('move__right--mobile')
        nav.classList.remove('header__principal-active')
        arrow.classList.add('move__right--mobile-hiden')
        bars.style.display = "block"

    }, 500)
})