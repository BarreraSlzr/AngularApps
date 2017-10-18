import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista: any;
  topTracks: any;
  embedTrack: any;

  constructor( private activatedRoute:ActivatedRoute,
                private _spotifyService:SpotifyService
              ) { }

  ngOnInit() {
    this.activatedRoute.params
      .map( parametros => parametros['id'] )
        .subscribe( id =>{

          this._spotifyService.getArtista( id )
            .subscribe(
              data => this.artista = data );
          this._spotifyService.getTopTracksArtista( id )
            .subscribe(
              data => {
                this.topTracks = data;
                this.setEmbedTrack( this.topTracks[0]);
              });
        });
  }

  setEmbedTrack( track:any ){
    this.embedTrack = track;
  }

}
