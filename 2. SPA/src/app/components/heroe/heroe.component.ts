import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:heroe[];

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    } );
  }

  ngOnInit() {
  }

}
