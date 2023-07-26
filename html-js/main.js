const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const form = document.querySelector(".formNumeros");

function validaFormularioFuncao(campoA, campoB) {
    const inputValidacaoCampoA = document.querySelector(
        ".inputValidacaoCampoA"
    );

    const inputValidacaoCampoB = document.querySelector(
        ".inputValidacaoCampoB"
    );

    if (campoB.value > campoA.value) {
        console.log("B > A");
        inputValidacaoCampoA.style.border = "2px solid green";
        inputValidacaoCampoB.style.border = "2px solid green";
    } else {
        console.log("A > B");
        inputValidacaoCampoA.style.border = "2px solid red";
        inputValidacaoCampoB.style.border = "2px solid red";
    }
}

function mensagemValidacaoFuncao(campoA, campoB) {
    const mensagemValido = `O número do campo B: <b>${campoB.value}</b> é maior que o número do campo A: <b>${campoA.value}</b> `;

    const mensagemInvalido = `O número do campo B: <b>${campoB.value}</b> <b>não</b> é maior que o número do campo A: <b>${campoA.value}</b> `;

    const mensagemValidacao = document.querySelector(".mensagemValidacao");

    const campoMensagem = document.querySelector(".campoMensagem");

    if (campoB.value > campoA.value) {
        mensagemValidacao.innerHTML = mensagemValido;
        campoMensagem.style.background = "green";
    } else {
        mensagemValidacao.innerHTML = mensagemInvalido;
        campoMensagem.style.background = "red";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validaFormularioFuncao(campoA, campoB);
    mensagemValidacaoFuncao(campoA, campoB);
    campoA.value = "";
    campoB.value = "";
});
