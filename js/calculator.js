var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(!pesoEsValido){
        tdImc.textContent = "Peso incorrecto";
        pesoEsValido = false;
        //paciente.style.color = "red"; CAMBIAR COLOR TEXTO
        //paciente.style.backgroundColor = "lightCoral"; CAMBIAR COLOR FONDO
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida){
        tdImc.textContent = "Altura incorrecta"
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto"); //cambiar color de fondo con clase usada en CSS
    }

    if(pesoEsValido && alturaEsValida){
        tdImc.textContent = calcularImc(peso, altura);
    }
}

function calcularImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}