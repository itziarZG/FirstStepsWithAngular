import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtered-heroes',
  templateUrl: './filtered-heroes.component.html',
})
export class FilteredHeroesComponent implements OnInit {
  word: string; //= this.activatedRoute.params.value.word;
  filteredHeroes: Heroe[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {}
  ngOnInit() {
    // console.log(this.activatedRoute.params.value.word);
    this.activatedRoute.params.subscribe((params) => {
      this.word = params['word'];
      this.filteredHeroes = this._heroeService.searchHeroes(params['word']);
    });
  }
}
