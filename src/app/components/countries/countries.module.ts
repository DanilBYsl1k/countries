import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effect/getCountries.effect';
import { RouterModule, Routes } from '@angular/router';
import { PageCountryComponent } from '../page-country/page-country.component';
import { GetCountryEffect } from "./store/effect/GetCountryEffect";
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearcPipePipe } from 'src/app/pipes/searc-pipe.pipe';

const routes: Routes = [
  {path:'', component:CountriesComponent},
  {path:':continet/:country',component:PageCountryComponent }
];

@NgModule({
  declarations: [
    CountriesComponent,
    PageCountryComponent,
    SearchBarComponent,
    SearcPipePipe
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Service',reducers),
    EffectsModule.forFeature([AppEffects,GetCountryEffect]),
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CountriesModule { }
