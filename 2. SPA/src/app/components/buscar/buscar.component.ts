import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, heroe  } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: '../heroes/heroes.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:heroe[] = [];

  constructor(  private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    } );
  }

  ngOnInit(){}

}
