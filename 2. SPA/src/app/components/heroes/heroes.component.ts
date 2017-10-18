import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, heroe  } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:heroe[] = [];

  constructor(private _heroesService:HeroesService,
              private router:Router
  ) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe', index]);
  } 

}
