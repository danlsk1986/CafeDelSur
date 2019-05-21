function iniciar (){
    var boton=document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
  } 
  
  function nuevoitem(){
    var clave=document.getElementById('clave').value;
    var valor=document.getElementById('texto').value;
    var urgencia= document.getElementById('urgencia');
    for(var i=0; i<urgencia.childNodes.length -1; i++){
      urgencia.childNodes[i].value;
    }    
    var fecha = document.getElementById('fecha').value;
      sessionStorage.setItem(clave,valor,urgencia,fecha);      
    mostrar();
    document.getElementById('clave').value='';
    document.getElementById('texto').value='';
    document.getElementById('urgencia').value='';
    document.getElementById('fecha').value='';
  }
  
  function mostrar(){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
    for(var f=0;f<sessionStorage.length;f++){
        var clave=sessionStorage.key(f);
        var valor=sessionStorage.getItem(clave);
           cajadatos.innerHTML+='<div>'+clave+' - '+valor+ ' - '+urgencia+' - '+fecha+'<br/><button onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
    }
  }
  
 function eliminar(clave){
    if(confirm('Está Seguro?')){
        sessionStorage.removeItem(clave);
        mostrar();
    }
  } 
  
 function eliminarTodo(){
    if(confirm('Está Seguro?')){
        sessionStorage.clear();
        mostrar();
    }
  }
  window.addEventListener('load', iniciar, false);