import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean ):string {
    if(!mostrar){
      let i=value.length;
      value = "";
      for(i ; i>=0; i--){
        value+="*";
      }
    }
    return value;
  }

}
