(() => {

    //interfaces no se transcoif a JS
    //es para mercar reglas de programación. 

    interface Xmen {
        nombre:string;
        edad:number;
        poder?:string;
    }

    const enviarMisioon = (xmen: Xmen) => {
        console.log(Ènviando a ${xmen.nombre} a la misión);
    }
    const regresarACasa = (xmen: Xmen) => {
        console.log(Ènviando a ${xmen.nombre} a casa);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60,
      
    }
    enviarMisioon(wolverine);
    regresarACasa(wolverine);

})();
