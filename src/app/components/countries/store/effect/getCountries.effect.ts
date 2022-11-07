
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CountriesService } from "src/app/services/countries.service";
import { countriesRespons } from "src/app/types/countriesRespons.interface";
import { serviceAction, serviceActionFailure, serviceActionSuccess } from "../action/getCountries.action";

@Injectable({
    providedIn: 'root'
})
export class AppEffects{
    filter:string
    sort:number
    constructor(private action$:Actions, private countriesService:CountriesService ){}
    connect$=createEffect(()=>
        this.action$.pipe(
            ofType(serviceAction),
            switchMap((request)=>{
                // console.log(request.request)
                if(typeof(request.request)=='number'){
                    this.sort=request.request
                }
                if(typeof(request.request)=='string'){
                    this.filter=request.request
                }
                return this.countriesService.getCountries().pipe(
                    map((answer:countriesRespons[])=>{
                        if(this.filter){
                            if(this.filter==='All'){
                            }else{
                                answer=answer.filter((a)=>{
                                    return a.region===this.filter
                                })
                            }
                                console.log(answer)
                        }
                        if(this.sort){
                            if(this.sort===1){
                                answer.sort((a,b)=>a.name.common.localeCompare(b.name.common))
                            }
                            if(this.sort===2){
                                answer.sort((a,b)=>a.name.common.localeCompare(b.name.common)).reverse()
                            }
                        }
                        return serviceActionSuccess({answer})
                    }),
                    
                    catchError((errorRespone:HttpErrorResponse)=>{
                        return of(
                            serviceActionFailure({errors:errorRespone.error})
                        )
                    })
                )
                
            })
        )
    )
}

// if(request.request==="Europe"){
//     answer=answer.filter((a)=>{
//         return a.region===request.request
//     })
//     if(Number(request.request)===1){
//         answer.sort((a,b)=>a.name.common.localeCompare(b.name.common))
//     }
// }
// if(Number(request.request)===1){
//     answer.sort((a,b)=>a.name.common.localeCompare(b.name.common))
// }
// if(Number(request.request)===2){
//     answer.sort((a,b)=>a.name.common.localeCompare(b.name.common)).reverse()
// }