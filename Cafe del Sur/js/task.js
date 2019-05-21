function iniciar (){
    var boton=document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
    
  } 
  
  function nuevoitem(){
    
    var fecha = new Date();
    var mes = fecha.getMonth()+1;
    var dia =fecha.getDate();
    var ano = fecha.getFullYear();
    if(dia<10){
      dia='0'+dia;
    }
    if(mes<10){
      mes='0'+mes;
    }  
    document.getElementById('dia').innerHTML = dia;
    document.getElementById('mes').innerHTML = mes;
    document.getElementById('ano').innerHTML = ano;

    var clave=document.getElementById('clave').value +`<br>`;
    var valor=[
        texto= document.getElementById('texto').value + `<br>`,
        urgencia= document.getElementById('urgencia').value + `<br>`,
        fecha= document.getElementById('fecha').value=dia+"/"+mes+"/"+ano
                     
    ];
      

      sessionStorage.setItem(clave,valor);      

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
           cajadatos.innerHTML+='<div>'+clave+valor+'<br/><button onclick="eliminar(\''+clave+'\')">Eliminar</button></div>';
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

  
  function mostrarBoton(){
    var ancho= screen.width;
    var alto = screen.height;

    if(ancho < 800){
      document.querySelector('#btn-dsktop').display = 'none';
      document.querySelector('#btn-mobile').display='block';
    }
    else{
      document.querySelector('#btn-dsktop').display = 'block';
      document.querySelector('#btn-mobile').display='none';
    }
  }
  window.addEventListener('load', mostrarBoton, false);
  
  