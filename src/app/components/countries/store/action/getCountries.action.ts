import { createAction, props } from "@ngrx/store";
import { countriesRespons } from "../../../../types/countriesRespons.interface"
import { ActionTypes } from "../actionTypes";

export const serviceAction=createAction(
    ActionTypes.CONNECT,
    props<{request:number|string}>(),
    
)
export const serviceActionSuccess=createAction(
    ActionTypes.CONNECT_SUCCESS,
    props<{answer:countriesRespons[]}>()
)
export const serviceActionFailure=createAction(
    ActionTypes.CONNECT_FAILURE,
    props<{errors:Error}>()
)