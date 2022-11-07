interface imgParam{
    png:string, 
    svg:string
}
export interface countriesRespons{
    borders:Array<string>
    altSpellings:Array<string>
    area:number
    capital:string[]
    capitalInfo:{latlng:Array<number>}
    car:{side:string, signs:Array<string>}
    cca2:string
    cca3:string
    ccn3:string
    cioc:string
    coatOfArms:imgParam
    continents:string[]
    currencies:object
    demonyms:object
    flag:string
    flags:imgParam
    idd:{root:string, suffixes:Array<number>}
    independent:boolean
    landlocked:boolean
    languages:object
    latlng:Array<number>
    maps:{googleMaps:string,openStreetMaps:string}
    name:{common:string,nativeName:object, official:string}
    population:number
    region:string
    startOfWeek:string
    status:string
    subregion:string
    timezones:Array<string>
    tld:Array<string>
    translations:object
    unMember:boolean
} 