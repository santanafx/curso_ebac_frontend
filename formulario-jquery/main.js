$(function () {
    $("#cpf").mask("000.000.000-00", {
        placeholder: "XXX.XXX.XXX-XX",
    });
    $("#cep").mask("00000-000", {
        placeholder: "XXXXX-XXX",
    });

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            },
            enderecoCompleto: {
                required: true,
            },
        },
        messages: {
            nome: "Por favor, insira o seu nome completo",
            email: "Por favor, insira o seu email",
            telefone: "Por favor, insira o seu telefone",
            cpf: "Por favor, insira o seu cpf",
            cep: "Por favor, insira o seu cep",
            enderecoCompleto: "Por favor, insira o seu endereço completo",
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
    });
});
