import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output()valueInput=new EventEmitter<string>()
  @Output()filterAlph=new EventEmitter<any>()
  @Output()valueReg=new EventEmitter<any>()
  valueInp: string;
  valueAlph:number;
  valueRegs:string='All'
  constructor() { }

  ngOnInit(): void {
  }
  search(value:string){
    this.valueInput.emit(value)
  }
  sorts(value:number){
    this.filterAlph.emit(Number(value))
  }
  filtr(value:string){
    this.valueReg.emit(value)
    console.log(value)
  }
}
