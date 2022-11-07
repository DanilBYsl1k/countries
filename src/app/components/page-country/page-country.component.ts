import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { countriesRespons } from 'src/app/types/countriesRespons.interface';
import { countryService } from '../countries/store/action/getCounty.action';
import { countrySelector, objectSelector } from '../countries/store/selector';


@Component({
  selector: 'app-page-country',
  templateUrl: './page-country.component.html',
  styleUrls: ['./page-country.component.scss']
})
export class PageCountryComponent implements OnInit {
  constructor(private route:ActivatedRoute, private store:Store) { }
  name:string|null=this.route.snapshot.paramMap.get('country')
  country$=this.store.select(countrySelector)
  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('country'))
    this.storeInit(this.name)
  }
  storeInit(name:string|null){
    let request:string=String(name)
    this.store.dispatch(countryService({request}))
  }
}
