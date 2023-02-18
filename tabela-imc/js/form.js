var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form); //EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM

    var erro = validaPaciente(paciente) //PACIENTE VALIDO
    if(erro.length > 0) {
        exibeMensagensDeErro(erros);
        return
    }

    adicionaPacienteNaTabele(paciente);

    form.reset();
    var ulErro = document.querySelector('#mensagens-erro');
    ulErro.innerHTML = "";
    
});

//FUNCOES
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function validaPaciente(paciente) {
    erros = [];

    if(paciente.nome.length == 0) erros.push ("[ERRO] Nome inválido!")
    if(!validaPeso(paciente.peso)) erros.push ("[ERRO] Peso inválido!");
    if(!validaAltura(paciente.altura)) erros.push ("[ERRO] Altura inválida!");
    if(paciente.gordura.length == 0 || paciente.gordura.length == 3) erros.push ("[ERRO] Gordura corporal inválida!")
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ulErro = document.querySelector('#mensagens-erro');
    ulErro.innerHTML = "";


    erros.forEach(function(erro){
        var liErro = document.createElement("li");
        liErro.textContent = erro;
        ulErro.appendChild(liErro);
        liErro.classList.add("mensagem-erro");
    });
}

function adicionaPacienteNaTabele(paciente){
    var pacienteTr = montaTr(paciente); //CRIA TR E TD DO PACIENTE
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}
