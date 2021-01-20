import { Component } from '@angular/core';

//para hacerlo component,
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  mostrar = true;
  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Peter Parker',
  };

  personajes: string[] = ['Spiderman', 'Venom', 'Octopus'];
}
