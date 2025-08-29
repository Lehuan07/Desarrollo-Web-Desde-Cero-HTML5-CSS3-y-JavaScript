
let hora = document.querySelector("#hour");
let minuto = document.querySelector("#minutes");
let segundo = document.querySelector("#seconds");
let amPm = document.querySelector("#am-pm");

let dia = document.querySelector("#date");
let diaFecha = document.querySelector("#date-number");
let mes = document.querySelector("#mounth");
let anio = document.querySelector("#year");

let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


function actualizarHora(){
    let fecha = new Date()
    let saberPM = hora.innerHTML = fecha.getHours().toString().padStart(2, "0");
    minuto.innerHTML = fecha.getMinutes().toString().padStart(2, "0");
    segundo.innerHTML = fecha.getSeconds().toString().padStart(2, "0");
    if(saberPM >= 12){
        amPm.innerHTML = "pm"
    }else{
        amPm.innerHTML = "am"
    }

    dia.innerHTML = diasSemana[fecha.getDay()]
    diaFecha.innerHTML = fecha.getDate().toString().padStart(2, "0");
    mes.innerHTML = meses[fecha.getMonth()]
    anio.innerHTML = fecha.getFullYear();
}







setInterval(actualizarHora, 1000)