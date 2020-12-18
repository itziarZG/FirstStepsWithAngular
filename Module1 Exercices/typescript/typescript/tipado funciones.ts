(() => {
  //tipados funciones

  const sumar = (a:number, b:number):number => a+b  //mejor definir tipo aunque av veces sabe inferir el tipo

  const obtenerSalario = ():Promise<string> => {

    return new Promise((resolve,reject)=> {
      resolve('Fernando';)

    });
  }
   obtenerSalario().then( a => console.log( a));

})();

