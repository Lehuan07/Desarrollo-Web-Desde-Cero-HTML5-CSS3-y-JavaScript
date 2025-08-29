
let editar = document.querySelectorAll(".fa-pen-to-square");
let borrar = document.querySelectorAll(".fa-trash-can");

editar.forEach((btnEditar) => {
    btnEditar.addEventListener("click", () => {
        let fila = btnEditar.closest("tr");
        let celdaNombre = fila.querySelectorAll("td");
        let celdaApellido = fila.querySelectorAll("td")

        let nombreActual = celdaNombre[1].textContent;
        let apellidoActual = celdaApellido[2].textContent;
        let nuevoNombre = prompt("Ingrese el nuevo nombre: ", nombreActual);
        let nuevoApellido = prompt("Ingrese el nuevo apellido: ", apellidoActual)

        if(nuevoNombre){
            celdaNombre[1].textContent = nuevoNombre;
        }
        if(apellidoActual){
            celdaApellido[2].innerHTML = nuevoApellido
        }
    });
});

borrar.forEach((btnEliminar) =>{
    btnEliminar.addEventListener("click", () =>{
        let fila = btnEliminar.closest("tr");
        fila.remove();
    })
})