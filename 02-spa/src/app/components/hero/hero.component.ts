import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  hero: any = {};
  isMarvel: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.hero = this._heroeService.getHero(params['id']);
    });
    this.isMarvel = this.hero.casa === 'Marvel' ? true : false;
    // console.log(this.hero.casa, this.isMarvel);
  }

  ngOnInit(): void {}
}
