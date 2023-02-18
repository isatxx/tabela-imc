var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++)  {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        console.error("Peso inválido.");
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido")
    }

    if(!alturaValida) {
        console.error("Altura inválida.");
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido")
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } 
}

function calculaImc(peso, altura) {
    var imc = 0;

    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso > 0 && peso < 600) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}