

var formulario = document.getElementById("formulario"),
    botonEnviar = document.getElementById("btnEnviar");

    EVENTOS:

    function validarDatos(e){
        
        var inputNombre = document.formulario.nombre.value,
            inputApellido = document.formulario.apellido.value,
            inputTelefono = document.formulario.telefono.value,
            inputEmail = document.formulario.email.value;

            if(inputNombre == 0 || inputApellido == 0 || inputTelefono == 0 || inputEmail == 0){
                alert("Llenalo locura");
                e.preventDefault();
            }
    }

    function validarSexo(e){
        var radioH = document.formulario.radio[0].checked,
        radioM = document.formulario.radio[1].checked;

        if (!radioH && !radioM) {
            alert("Definite bro");
            e.preventDefault();
        }

    }

    function validarTerminos(e){
        var terminos = document.formulario.checkbox.checked;

        if(!terminos){
            alert("Tilda el cosito de terminos y condiciones, no es muy dificil!");
            e.preventDefault();
        }
    }

    
/*
    formulario.addEventListener("submit", validarDatos);
    formulario.addEventListener("submit", validarSexo);
    formulario.addEventListener("submit", validarTerminos);*/


    //FUNCION QUE VALIDA TODO

    function validar(e){
        validarDatos(e);
        validarSexo(e);
        validarTerminos(e);
    }



    formulario.addEventListener("submit", validar);