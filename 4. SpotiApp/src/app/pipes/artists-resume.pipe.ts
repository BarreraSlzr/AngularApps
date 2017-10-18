import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistsResume'
})
export class ArtistsResumePipe implements PipeTransform {

  transform(value: any[]): string {
    let text:string="";

    if(value.length > 1) text= `y ${ value[1].name }.`;
    if(value.length > 2) text+= `+ ${ (value.length - 1) } artistas.`;

    return text;
  }

}
