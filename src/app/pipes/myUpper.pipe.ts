import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
name:'MyUpper'
})
export class MyUpperPipe implements PipeTransform {

    /*transform(value: string) :string{
        //value="$"+value.toUpperCase();
        //value=value.toUpperCase();
        value=value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        return value;
    }*/
    //we can pass more param also
    transform(value: string,type:string) :string{
        //value="$"+value.toUpperCase();
        //value=value.toUpperCase();
        console.log(">>>>>type", type);
        if(type=='Upper'){
        value=value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }
        else
        {
            return value;
        }
        return value;
    }
}