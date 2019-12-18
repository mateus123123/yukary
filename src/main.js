console.log('Js ok');

function send(event) {
    event.preventDefault();
    // form.appendChild(input_valor);
    // input_valor.innerHTML = input1.value;
    // input1.value = '';

    let input = document.querySelector('#question_input');

    if(input.value == 'vagalumes') {
        desbloquearMensagem();
    } else {
        alert("Errouuuuuuu kkkkalslçdja");
        input.value = "";
    }

}

function desbloquearMensagem() {
    let cRecado = document.querySelector("#cRecado");
    let tela = document.querySelector("#tela");
    cRecado.style = "display: block;";
    tela.style = "display: none;"
}