import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  searchPrevent(ev: Event) {
    //la he necesitado para el enter...
    ev.preventDefault();
  }
  SearchHero(word: string, event: Event) {
    // console.log('in');
    event.preventDefault();
    this.router.navigate(['/filteredList', word]);
  }
}
