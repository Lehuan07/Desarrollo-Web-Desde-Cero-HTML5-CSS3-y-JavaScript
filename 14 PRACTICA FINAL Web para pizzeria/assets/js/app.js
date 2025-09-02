
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

//Slider
let next = document.querySelector(".carrousel__next");
let prev = document.querySelector(".carrousel__prev");
let pizzas = document.querySelectorAll(".carrousel__track");
let inner = document.querySelector(".carrousel__inner");

let count = 0;


next.addEventListener("click", () =>{
    count++;
    if(count > pizzas.length - 1){
        count = 0;
    }
    showPizza()
})

prev.addEventListener("click", () =>{
    count--;
    if(count < 0){
        count = pizzas.length - 1;
    }

    showPizza();
})

function showPizza() {
    inner.style.transform = `translateX(${-100 * count}%)`;
}



showPizza();