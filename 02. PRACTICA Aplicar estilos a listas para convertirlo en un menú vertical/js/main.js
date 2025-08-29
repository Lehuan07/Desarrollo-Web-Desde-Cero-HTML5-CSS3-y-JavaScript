
let botones = document.querySelectorAll(".btn__selector");
let leyendas = document.querySelectorAll(".texto__parrafo");

botones.forEach((btn, index) =>{
    btn.addEventListener("click", () =>{
        leyendas[index].classList.toggle("hiden")
    })
})