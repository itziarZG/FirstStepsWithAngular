(() => {
  //   class Avenger {
  //     //si no lo usamos en JS no aparecen los parámetros..
  //     nombre: string;
  //     equipo: string;
  //     nombreReal?: string;

  //     puedePelear: boolean;
  //     peleasGanadas: number;

  //     constructor(nombre:string, equipo:string){
  //         //se ejecuta al usar new blablabla
  //         this.nombre = nombre;
  //         this.equipo = equipo

  //     }

  class Avenger {
    //de esta manera, inicializamos el parámetro con el valor recibido directamente.
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal?: string,
      public puedePelear?: boolean,
      public peleasGanadas: number = 0
    ) {}
  }
  const antman = new Avenger("Antman", "Capi");
  console.log(antman);
})();
