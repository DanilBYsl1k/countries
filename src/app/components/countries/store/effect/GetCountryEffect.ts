import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, switchMap } from "rxjs";
import { CountriesService } from "src/app/services/countries.service";
import { countriesRespons } from "src/app/types/countriesRespons.interface";
import { countryService, countryServiceSuccess } from "../action/getCounty.action";


@Injectable({
    providedIn: 'root'
})
export class GetCountryEffect {
    countriesArr:countriesRespons[]=[]
    constructor(private action$: Actions, private route: ActivatedRoute, private countriesService: CountriesService) { }
    country$= createEffect(() => this.action$.pipe(
        ofType(countryService),
        switchMap((name) => {
            return this.countriesService.getCountry(name.request).pipe(
                map((answer:countriesRespons[]) => {
                
                    return countryServiceSuccess({ answer });
                })
            );
        })
        )
    );
}
