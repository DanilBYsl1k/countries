import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getCountries } from "src/app/types/getCountries.interface";

export const FeatureSelector=createFeatureSelector<getCountries>('Service')

export const connectSelector=createSelector(
    FeatureSelector,
    (state:getCountries)=>state.connection
)
export const objectSelector=createSelector(
    FeatureSelector,
    (state:getCountries)=>state.object
)
export const loadingSelector=createSelector(
    FeatureSelector,
    (state:getCountries)=>state.loading
)
export const errorsSelector=createSelector(
    FeatureSelector,
    (state:getCountries)=>state.errors
)
export const countrySelector=createSelector(
    FeatureSelector,
    (state:getCountries)=>state.country
)