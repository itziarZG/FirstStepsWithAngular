import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  @Input() heroe: any = {}; //heroe puede ser definido desde el exterior.
  @Input() i: number;

  // @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    // this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {}
  goHeroDetail() {
    // this.selectedHero.emit(this.i);
    this.router.navigate(['/hero', this.i]);
  }
}
