import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResturants } from '../model/meal.model';
@Injectable()
export class ListingService{

    private base_url="http://3.17.216.66:4000";
    constructor(private http:HttpClient)
    {

    }
    getRestM(mealId:number):Observable<IResturants[]>
    {
        return this.http.get<IResturants[]>(`${this.base_url}/restaurant?mealtype_id=${mealId}`);
    }
  getCuisineData(cuisine_id:string):Observable<IResturants[]>
  {
   // return this.http.get<IResturants[]>(`${this.base_url}/restaurant?cuisine_id=${cuisine_id}`);
   let mealId=sessionStorage.getItem('mealId');
   return this.http.get<IResturants[]>(`${this.base_url}/filter/${mealId}?cuisine=${cuisine_id}`);
  }
  getCostData(lcost:number,hcost:number,mealId:number):Observable<IResturants[]>
  {
    return this.http.get<IResturants[]>(`${this.base_url}/filter/${mealId}?lcost=${lcost}&hcost=${hcost}`);
  }
}