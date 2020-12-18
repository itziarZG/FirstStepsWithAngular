(function () {
  const sumarF = (a: number, b: number) => a + b;

  const hulk = {
    nombre: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} smash!!!`); //si no fuera arrow no funcionaría el this
      }, 1000);
    },
  };
  hulk.smash();
  console.log(sumarF(10, 32));
})();
