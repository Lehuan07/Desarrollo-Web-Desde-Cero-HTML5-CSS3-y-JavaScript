
//Menu lateral desplegable en mobile

const bars = document.querySelector('.right__bars');
const nav  = document.querySelector('.principal__nav');
const arrow = document.querySelector(".right__mobile");
const enlaces = document.querySelectorAll(".left__ancor");


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

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();

        setTimeout(() => {
            // cerrar menú
            arrow.classList.remove("right__mobile-show");
            arrow.classList.add("right__mobile");
            nav.classList.remove("principal__nav-show");
            nav.classList.add("principal__nav");

            // hacer scroll a la sección destino
            const target = document.querySelector(enlace.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 500);
    });
});


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

//!Boton para subir pantalla

let btnTop = document.querySelector(".btn__top");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > window.innerHeight) {
        btnTop.classList.remove("btn__top-hiden");
    } else {
        btnTop.classList.add("btn__top-hiden");
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



//* Formulario de contacto:

const formulario = document.querySelector(".contact__form");
let mensajeSpan = document.querySelector(".contact__span");
let mensajeAlert = document.querySelector(".contact__alert");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");

    let cont = 0;

    if (nombre.value !== "") cont++;
    if (email.value !== "") cont++;
    if (mensaje.value !== "") cont++;

    if (cont === 3) {
    mensajeSpan.classList.add("contact__span-check");

    setTimeout(() => {
        mensajeSpan.classList.remove("contact__span-check");
    }, 2000);

    }else{
        mensajeAlert.classList.add("contact__span-check")
        setTimeout(() => {
        mensajeAlert.classList.remove("contact__span-check");
    }, 2000);
    }

});

const nombreInput = document.querySelector("#nombre");
const emailImput = document.querySelector("#email")
const chatTextbox = document.querySelector("#mensaje")
const icoNombre = document.querySelector(".fa-user")
const icoEmail = document.querySelector(".fa-envelope");
const icoChat = document.querySelector(".fa-comments");


nombreInput.addEventListener("focus", () => {
    nombreInput.classList.add("input__active");
    icoNombre.classList.add("ico__active");
});

emailImput.addEventListener("focus", () =>{
    emailImput.classList.add("input__active")
    icoEmail.classList.add("ico__active")
})


chatTextbox.addEventListener("focus", () =>{
    chatTextbox.classList.add("input__active")
    icoChat.classList.add("ico__chat-active")
})

nombreInput.addEventListener("blur", () => {
    nombreInput.classList.remove("input__active");
    icoNombre.classList.remove("ico__active");
});

emailImput.addEventListener("blur", () =>{
    emailImput.classList.remove("input__active")
    icoEmail.classList.remove("ico__active")
})


chatTextbox.addEventListener("blur", () =>{
    chatTextbox.classList.remove("input__active")
    icoChat.classList.remove("ico__chat-active")
})

