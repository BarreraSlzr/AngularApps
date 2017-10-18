import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = 'BQBzL0sJUvbzoMSQweoPFpgJ_uBuN43lAG2lrqzBtqBuT3cJjeF0EJlcS-pbVXBOrk4eCZK36ewfSGGlILG75g'

  constructor( private http:Http ) { }

  getArtistas( terminoBusq:string ): any{

    let headers = new Headers();
    headers.append( 'Authorization', `Bearer ${ this.token }`);

    let query = `?q=${ terminoBusq }&type=artist`;
    let url = this.urlBusqueda+query;

    return this.http.get( url, { headers }).map( res =>{
                 this.artistas = res.json().artists.items;
                 console.log(this.artistas);
                 return this.artistas;
            });
  }

  getArtista( id:string ): any{

    let headers = new Headers();
    headers.append( 'Authorization', `Bearer ${ this.token }`);

    let query = `/${ id }`;
    let url = this.urlArtista+query;

    return this.http.get( url, { headers }).map( res =>{
      console.log(res.json());
                 return res.json();
            });
  }
  getTopTracksArtista( id:string ): any{

    let headers = new Headers();
    headers.append( 'Authorization', `Bearer ${ this.token }`);

    let query = `/${ id }/top-tracks?country=MX`;
    let url = this.urlArtista+query;

    return this.http.get( url, { headers }).map( res =>{
                console.log(res.json().tracks)
                 return res.json().tracks;
            });
  }
}
