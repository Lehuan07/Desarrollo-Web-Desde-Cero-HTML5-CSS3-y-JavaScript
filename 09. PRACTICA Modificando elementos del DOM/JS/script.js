

var botonCambia = document.getElementById("boton")
var cambiarCaja = document.getElementById("caja");


botonCambia.addEventListener("click", function(){
if (cambiarCaja.classList.contains("cajaChica")){
    cambiarCaja.classList.remove("cajaChica");
    cambiarCaja.classList.add("cajaGrande");
    botonCambia.textContent = "Volveme a apretar si te animas";
    }
else if (cambiarCaja.classList.contains("cajaGrande")){
    cambiarCaja.classList.remove("cajaGrande");
    botonCambia.textContent = "UUps...me rompi! Volvamos a intentarlo"
}
else{
    cambiarCaja.classList.remove("cajaGrande");
    cambiarCaja.classList.add("cajaChica");
    botonCambia.textContent ="No importa, volvamos a intentarlo!";
}
});
