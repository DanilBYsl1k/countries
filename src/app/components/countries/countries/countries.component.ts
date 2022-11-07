import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countriesRespons } from 'src/app/types/countriesRespons.interface';
import { serviceAction } from '../store/action/getCountries.action';
import { errorsSelector, loadingSelector, objectSelector } from '../store/selector';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private store:Store) { }
  countries$:Observable<countriesRespons[]|null>=this.store.select(objectSelector)
  error$=this.store.select(errorsSelector)
  loadg$=this.store.select(loadingSelector)
  searchValue:string
  ngOnInit(): void {
    this.init()
    // console.log(this.countries$)
  }
  init():void{
    let request=0
    this.store.dispatch(serviceAction({request}))
  }
  search(value:string){
    this.searchValue=value
  }
  sorts(evt:number){
    let request=evt
    // this.store.dispatch(serviceAction({request}))
    this.store.dispatch(serviceAction({request}))

    // console.log(evt)
  }
  filtr(value:string){
    let request=value
    this.store.dispatch(serviceAction({request}))
  }
}
