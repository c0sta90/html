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
        event.preventDefault(); /*evita fazer o default que é carregar a pagina*/
    $("#load").show();
    })
});