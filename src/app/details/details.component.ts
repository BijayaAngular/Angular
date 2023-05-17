import {Component, OnInit} from  '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResturants } from '../model/meal.model';
import { DetailsService } from '../services/details.service';
@Component({
   templateUrl:'details.component.html',
   styleUrls:['details.component.css']

})
export class DetailsComponent implements OnInit 
{
 id:Number=0;
 details:IResturants[]=[];
 mealId:string|null=sessionStorage.getItem('mealId');
 constructor(private route:ActivatedRoute, private detailsService:DetailsService)
 {

 }
 /*ngOnInit():void{
    this.id=Number(this.route.snapshot.queryParamMap.get('restId'));
    console.log("Rest Id",this.id);
    this.detailsService.getDetails(this.id).subscribe((data:IResturants[]) => this.details=data);
    //this.details.restaurant_thumb
 }*/

 ngOnInit(): void {
    this.id = Number(this.route.snapshot.queryParamMap.get('restId'))
    this.detailsService.getDetails(this.id)
        .subscribe((data:IResturants[]) => this.details = data)
}
}
