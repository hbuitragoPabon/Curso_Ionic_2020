import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calification'
})
export class CalificationPipe implements PipeTransform {

  transform(value: number): string {   
    if(!value){
      return '';
    }
    if(value<=1){
      //rojo
      return "#ff3838";
    }else if(value>=4){
      //verde
      return "#3ae374";
    }else{
      //amarillo
      return "#fff200";
    }
  }
}
