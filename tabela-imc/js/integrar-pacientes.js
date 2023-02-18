var botaoIntegrar = document.querySelector("#integrar-paciente");

botaoIntegrar.addEventListener("click", function(){
    console.log("Buscando pacientes...")
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erroAjax.classList.add("invisivel");
    
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabele(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send()
});