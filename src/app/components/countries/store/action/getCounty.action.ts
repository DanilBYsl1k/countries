import { Data } from "@angular/router";
import { createAction, props } from "@ngrx/store";
import { countriesRespons } from "src/app/types/countriesRespons.interface";
import { ActionTypes } from "../actionTypes";

export const countryService=createAction(
    ActionTypes.GET_COUNTRY,
    props<{request:string}>()
)
export const countryServiceSuccess=createAction(
    ActionTypes.GET_COUNTRY_SUCCESS,
    props<{answer:countriesRespons[]}>()
)
export const countryServiceFailure=createAction(
    ActionTypes.GET_COUNTRY_FAILURE,
    props<{errors:Error}>()
)