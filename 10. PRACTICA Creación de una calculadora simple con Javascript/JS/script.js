
(function(){
    function eventoFocus(e){
        e.target.classList.add('focus-shadow');
    }

    function eventoBlur(e){
        e.target.classList.remove('focus-shadow');
    }

    const campo1 = document.getElementById('article__numero-uno');
    const campo2 = document.getElementById('article__numero-dos');

    campo1.addEventListener("focus", eventoFocus);
    campo1.addEventListener("blur", eventoBlur);

    campo2.addEventListener("focus", eventoFocus);
    campo2.addEventListener("blur", eventoBlur);
    
})();


(function(){
    function limpiarSombras(elemento){
        elemento.classList.remove('sombra-roja', 'sombra-verde', 'sombra-amarilla');
    }

    function eventoFocus(e){
        e.target.classList.add('focus-shadow')
    }

    function eventoBlur(e){
        e.target.classList.remove('focus-shadow');
        limpiarSombras(e.target);
    }

    function eventoImput(e){
        const valor = parseInt(e.target.value);
        limpiarSombras(e.target);

        if(!isNaN(valor)){
            if (valor >=1 && valor < 50){
                e.target.classList.add('sombra-roja');
            }
        
        else if (valor < 100){
            e.target.classList.add('sombra-amarilla')
        }
        else{
            e.target.classList.add('sombra-verde');
        }
    
    }
    }

    const campo1 = document.getElementById('article__numero-uno');
    const campo2 = document.getElementById('article__numero-dos');

    campo1.addEventListener("focus", eventoFocus);
    campo1.addEventListener("blur", eventoBlur);
    campo1.addEventListener("input", eventoImput);

    campo2.addEventListener("focus", eventoFocus);
    campo2.addEventListener("blur", eventoBlur);
    campo2.addEventListener("input", eventoImput);
})();


(function(){
function validarNumeros(input, mensajeErrorID){
    const valor = input.value.trim();
    const mensajeError = document.getElementById(mensajeErrorID);

    mensajeError.textContent = "";

    const numeros = Number(valor);

    if (valor === "" || isNaN(numero)){
        mensajeError.textContent = "Solo se permiten numeros"
        return false;
    }

    return true;
}

    const campo1 = document.getElementById("article__numero-uno");
    const campo2 = document.getElementById("article__numero-dos");

    campo1.addEventListener("input", () => {
        validarNumeros(campo1, "error-uno");
    });

    campo2.addEventListener("input", () =>{
        validarNumeros(campo1, "error-dos");
    });

})();


//Empezamos con la calculadora:

//Obtenemos el evento click en cada boton:
    var operaciones = function(e){
        var numero1 = parseFloat(document.getElementById("article__numero-uno").value);
        var numero2 = parseFloat(document.getElementById("article__numero-dos").value);
        var resultado = document.getElementById("section__resultado");

        var operacion = e.target.id;
        if(operacion == "boton__suma"){
            var resultadoFinal = numero1 + numero2;
        }
        else if(operacion == "boton__restar"){
            var resultadoFinal = numero1 - numero2;
        }
        else if (operacion == "boton__dividir"){
            var resultadoFinal = numero1 / numero2;
        }
        else{
            var resultadoFinal = numero1 * numero2;
        }

        resultado.innerHTML = resultadoFinal;

    }

    var botones = document.getElementById("section__boton");
    botones.addEventListener("click", operaciones);
