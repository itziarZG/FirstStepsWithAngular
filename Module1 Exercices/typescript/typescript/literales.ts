(function(){
//templates literales
   const nombre = 'Fernando';

   const apellido = 'Herrera';
   const edad = 33;

   const salida =`${nombre} ${apellido} (${edad})`;
   console.log(salida);
   const salida2 =`${nombre} 
   ${apellido} 
   (${edad +3})`;  // incluso una funcion que retorne algo a imprimir... 
   console.log(salida2);
    })();