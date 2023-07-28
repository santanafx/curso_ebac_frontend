$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        const nomeTarefa = $("#nome-tarefa").val();
        const tarefa = $("#tarefa").val();
        $(".lista").append(
            `<li><h4>${nomeTarefa}</h4><p class="selecionando-tarefa">${tarefa}</p><button id="remover-tarefa">Remover tarefa</button></li>`
        );
    });

    $(document).on("click", ".selecionando-tarefa", function () {
        $(this).css("text-decoration", "line-through");
    });

    $(document).on("click", "#remover-tarefa", function () {
        $(this).parent().remove();
    });
});
