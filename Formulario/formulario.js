/*
Codigo principal da framework jquerry
*/
$(document).ready(function(){
    console.log("Documento está carregado");
    $("#load").hide();
    
    $("input, textarea").on("focusin focusout", function(event){ /* textarea para dar select ao text */
        $(this).toggleClass("border-form");
    });
    $("form").on("submit", function(event){
        event.preventDefault(); /*NÃO DEIXA fazer o default que é carregar*/
    $("#load").fadeIn(2000, function(){ //Callback
        $(this).find("span").text("Enviado com sucesso")
        $(this).find(".close").on("click", function(){
        $(this).parent().fadeOut(200); //parent() = Isso seleciona o elemento selecionado
    });
    });
    });
});