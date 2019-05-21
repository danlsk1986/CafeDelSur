'use strict'

window.addEventListener("load", function() {
     
    function checkImputs(){
        var inputs = document.getElementsByTagName('input');
        
        for(var i= 0; i<=inputs.length; i++){  
            
            if(inputs[i].value=='' && inputs[i].validity.valueMissing && !inputs[i].validity.valid){
                inputs[i].setCustomValidity("Todos los campos son obligatorios");                                        
            }else{
                inputs[i].setCustomValidity("");
                                        
            }
            
        }   

        
    }      
    var enviar = document.querySelector("#enviar");
            enviar.addEventListener("click", function(){
            return checkImputs();
            
    });
})

