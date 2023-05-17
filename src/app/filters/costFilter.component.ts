import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { OutletContext } from '@angular/router';
@Component({
    selector:'app-cost-filter',
    templateUrl:'./costFilter.component.html'
})
export class CostFilterComponent implements OnInit {
    costType:string='';
    @Output() costClicked:EventEmitter<string>=new EventEmitter<string>()
    constructor() {
        
    }
    ngOnInit():void {
    }
    onCostSelect():void{
        this.costClicked.emit(this.costType)
    }
}
