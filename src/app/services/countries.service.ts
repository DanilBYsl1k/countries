import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { countriesRespons } from '../types/countriesRespons.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  urlCountries:string='https://restcountries.com/v3.1/all'
  urlCountry:string='https://restcountries.com/v3.1/alpha/'
  constructor(private http:HttpClient) { }
  getCountries(){
    return this.http.get<countriesRespons[]>(this.urlCountries).pipe()
  }
  getCountry(name:string){
    return this.http.get<countriesRespons[]>(`${this.urlCountry}${name}`).pipe()
  }
}
