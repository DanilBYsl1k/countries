
import { countriesRespons } from "./countriesRespons.interface"


export interface getCountries{
    connection:boolean
    object:countriesRespons[]|null
    loading:boolean
    errors:null|Error
    country:countriesRespons[]|null
}