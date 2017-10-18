import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    if(termino.length > 0)
      this.router.navigate(['/buscar', termino]);
  }
}
