(() => {    //quizás hay que hacer es6 para que funcione en el config. 

  const retirarDinero = (montoRetirar:number): Promise<number> =>{
  
      let dineroActual = 100000;
      returns new Promise( (resolve,reject)=>{
  
          if (montoRetirar > dineroActual ) {
              reject ('no hay suficiente dinero');
          }else{
              dineroActual -= montoRetirar;
              resolve(dineroActual);
          }
   });
   }
  
   retirarDinero(300)
   .then((montoActual:number)=>console.log((`Me queda ${montoActual}`)))
   .catch(console.warn)
  
  
  }
  
  })();
