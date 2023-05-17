import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { IResturants } from "../model/meal.model";

@Injectable()

export class DetailsService{
    private base_url="http://3.17.216.66:4000";
    constructor(private http:HttpClient)
    {

    }
    getDetails(id:Number):Observable<IResturants[]>
    {
        console.log("inside service",id,`${this.base_url}/details/${id}`)
        return this.http.get<IResturants[]>(`${this.base_url}/details/${id}`);
    }
}