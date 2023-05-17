import {Pipe,PipeTransform} from '@angular/core'
import { IResturants } from '../model/meal.model'
import { UrlSerializer } from '@angular/router'
@Pipe({

    name:'searchFilter'
})
export class RestSearchFilter implements PipeTransform
{
    transform(value: IResturants[], userInputs: string) {
        userInputs=userInputs?userInputs.toLowerCase():'';
        return userInputs ? value.filter((data)=>(data.restaurant_name.toLowerCase().indexOf(userInputs)>-1)):value;
    }
}