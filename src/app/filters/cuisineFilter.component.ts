import { Component, OnInit ,Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector: 'app-cuisine-fileter',
    templateUrl:'./cuisineFilter.component.html'
})
export class CuisineFilterComponent implements OnInit
{
    @Input() filterName:string='';
    cuisineType:string=''
    @Output()cuisineClicked:EventEmitter<string>=new EventEmitter<string>()
    constructor()
    {

    }
    ngOnInit()
    {

    }
    onCuisineSelect():void{
     this.cuisineClicked.emit(this.cuisineType)
    }
}