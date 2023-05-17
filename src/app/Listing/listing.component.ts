
import {Component,OnInit, SimpleChange} from '@angular/core'
import { IResturants } from '../model/meal.model';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service';
@Component({
selector:'app-listing',
templateUrl: './listing.component.html',
styleUrls: ['./listing.component.css']

})
export class ListingComponent implements OnInit{
userInput:string='';
restaurants:IResturants[]=[];
rests:any[]=[{"id":1,"name":1}];
nodata:any=''
mealId:number=1;
filteText:string='Cuisine Filter';
    constructor(private route:ActivatedRoute,private listingService:ListingService){}

    ngOnInit():void{
        console.log("inside ngOnInit");
        this.mealId=Number(this.route.snapshot.params['id']);
        console.log(this.mealId)
        sessionStorage.setItem('mealId',this.mealId.toString());
        this.listingService.getRestM(this.mealId).subscribe((data:IResturants[]) => {this.restaurants=data})
    }
    ngOnChanges(changes:SimpleChange):void{

        console.log("inside ngOnchanges",changes);
       
        console.log('data...',this.restaurants);
    }
    dataOnRecieved(cuisineType:string):void{
        console.log("inside dataOnRecieved",cuisineType);
        this.listingService.getCuisineData(cuisineType).subscribe((data:IResturants[]) => {this.restaurants=data});

    }
    costDataRecieved(cost:string):void
    {
        let lcost=Number(cost.split('-')[0]);
        let hcost=Number(cost.split('-')[1]);
        this.listingService.getCostData(lcost,hcost,this.mealId).subscribe((data:IResturants[])=>this.restaurants=data)
    }
}