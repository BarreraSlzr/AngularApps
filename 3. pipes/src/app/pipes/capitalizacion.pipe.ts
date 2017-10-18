import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean = true):string {
    let capitalizar:string[];

    value.toLowerCase();
    capitalizar = value.split(" ");

    if(todas){
      for(let i in capitalizar){
        capitalizar[i] = capitalizar[i][0].toUpperCase() + capitalizar[i].substr(1);
      }
    } else{
      capitalizar[0] = capitalizar[0][0].toUpperCase() + capitalizar[0].substr(1);
    }
    return capitalizar.join(" ");
  }
}
