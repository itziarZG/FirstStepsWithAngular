import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitán América';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  percent: number = 0.23654;
  currency: number = 1234.5;
  people = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'trtsg',
      num: 43,
    },
  };
}
