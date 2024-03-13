$(document).ready(function(){
    console.log("ready!");
    $("form").on("submit", function(event){
        //prevenir que a +agina do action seja carregada
        event.preventDefault();
        var answers = $("input:checked");
        console.log(answers);
        //guarda array com respotas corretas
        var matrix = {
            "carro": "ford",
            "carro2": "ford",
            "carro3": "ford",
            "carro4": "ford",
            "carro5": "ford",
            "carro6": "ford"
        };

 
    });
});