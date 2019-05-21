'use strict'

function mostrarMenu(){
    var x = document.querySelector("#links");
    var y = document.querySelector("#mobile_nav");
    var h = document.querySelector("#navegacion");
    var uno = document.querySelector("#uno");
    var dos = document.querySelector("#dos");
    var tres = document.querySelector("#tres");

    y.addEventListener("click", function(){
       if(x.style.display == "none"){
           x.style.display = "block";
           uno.style.transform = "rotate(45deg)";
           uno.style.top = "9px";
           dos.style.display = "none";
           tres.style.transform = "rotate(-45deg)";
           h.style.height = "26em";
       }else{
           x.style.display = "none";
           uno.style.transform = "rotate(0deg)";
           uno.style.top = "0px";
           dos.style.display = "block";
           tres.style.transform = "rotate(0deg)";
           h.style.height = "12em";
       }

    });

}

mostrarMenu();
