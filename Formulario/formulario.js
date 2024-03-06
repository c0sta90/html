/*
Codigo principal da framework jquerry
*/
$(document).ready(function(){
    console.log("Documento está carregado");
    
    $("input, textarea").on("focusin focusout", function(event){ /* textarea para dar select ao text */
        $(this).toggleClass("border-form");
    });
});