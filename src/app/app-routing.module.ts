import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries/countries.component';
import { PageCountryComponent } from './components/page-country/page-country.component';

const routes: Routes = [
  {path:'', component:CountriesComponent},
  // {path:':continet/:country',component:PageCountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
