import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { countriesRespons } from '../types/countriesRespons.interface';

@Pipe({
  name: 'searcPipe'
})
export class SearcPipePipe implements PipeTransform {
// Observable<countriesRespons[]|null>
  transform(array:countriesRespons[]|null, value: string):countriesRespons[]|null{
    if(!array) return null
    if(!value) return array

    return array.filter((data:any)=>{
      return JSON.stringify(data.name.common).toLowerCase().includes(value.toLowerCase())
    })
  }
}
