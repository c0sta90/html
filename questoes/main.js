$(document).ready(function(){
    console.log("ready!");
    $("form").on("submit", function(event){
        event.preventDefault();
        var answers = $("input:checked");
        console.log(answers);
        var matrix = {                      //array de respostas corretas

            "quest1": "bmw",
            "quest2": "mario",
            "quest3": "fcima",
            "quest4": "18",
            "quest5": "Italia",
            "quest6": "bmw"
 
        };
        answers.each(function(){
            var thisV = $(this);
            var name = thisV[0]["name"];
            var id = thisV[0]["id"];
            console.log(name + " - " + id);
            //validar se as respotas estão corretas
            if(matrix[name] == id){
                console.log("acertou");
            } else {
                console.log("errou");
            }
        });
    });

});