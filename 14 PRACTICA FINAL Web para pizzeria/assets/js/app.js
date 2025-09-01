
//Menu lateral desplegable en mobile

const bars = document.querySelector('.right__bars');
const nav  = document.querySelector('.principal__nav');
const arrow = document.querySelector(".right__mobile");
const enlaces = document.querySelector(".principal__left");

bars.addEventListener('click', () => {

    nav.classList.add("principal__nav-show")
    arrow.classList.remove("right__mobile")
    arrow.classList.add("right__mobile-show")
});

arrow.addEventListener('click', () =>{
    arrow.classList.remove("right__mobile-show")
    arrow.classList.add("right__mobile")
    nav.classList.remove("principal__nav-show")
    nav.classList.add("principal__nav")
})

enlaces.addEventListener('click', ()=>{
    setTimeout(()=>{
        arrow.classList.remove("right__mobile-show")
        arrow.classList.add("right__mobile")
        nav.classList.remove("principal__nav-show")
        nav.classList.add("principal__nav")

    }, 500)
})