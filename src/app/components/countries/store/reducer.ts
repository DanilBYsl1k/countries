

import { Action, createReducer, on } from "@ngrx/store"
import { getCountries } from "../../../types/getCountries.interface"
import { serviceAction, serviceActionFailure, serviceActionSuccess } from "./action/getCountries.action"
import { countryService, countryServiceSuccess } from "./action/getCounty.action"

const initialState:getCountries={
    connection: false,
    object: null,
    loading: false,
    errors: null,
    country: null
}
const connectReducer=createReducer(
    initialState,
    on(
        serviceAction,(state):getCountries=>({
            ...state,//копируем старое состояние 
            loading:true,
            object:[]
        })
    ),
    on(
        serviceActionSuccess,(state,action):getCountries=>({
            ...state,
            loading:false,
            object:action.answer,
            connection:true
        })
    ),
    on( 
        serviceActionFailure,(state,action):getCountries=>({
            ...state,
            errors:action.errors,
            object:null,
            loading:true
        })
    ),
    on(
        countryService,(state,):getCountries=>({
            ...state,//копируем старое состояние 
            loading:true,
            object:[],
            country: null
        })
    ),
    on(
        countryServiceSuccess,(state,action):getCountries=>({
            ...state,
            loading:false,
            // object:action.answer,
            country:action.answer,
            connection:true
        })
    ),
    on( 
        serviceActionFailure,(state,action):getCountries=>({
            ...state,
            errors:action.errors,
            object:null,
            loading:true
        })
    )
)

// export const reducers={
//     connectReducer
// }
export function reducers(state:getCountries, action:Action){
    return connectReducer(state, action)
}