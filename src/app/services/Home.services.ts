import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ICity, IMeal } from '../model/meal.model';
import { IResturants } from '../model/meal.model';
@Injectable()
export class HomeService{
    private baseUrl='http://3.17.216.66:4000';
    constructor(private http:HttpClient){}
   
        getCity():Observable<ICity[]>
        {
            return this.http.get<ICity[]>(`${this.baseUrl}/location`);
        }
      getRestrurants(stateId:number):Observable<IResturants[]>{

        return this.http.get<IResturants[]>(`${this.baseUrl}/restaurant?stateId=${stateId}`);
      }
    getMeal():Observable<IMeal[]>
    {
        return this.http.get<IMeal[]>(`${this.baseUrl}/quickSearch`);
    }
}