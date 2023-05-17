import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-rounting-module";
import { MyUpperPipe } from "../pipes/myUpper.pipe";

@NgModule({
    
    declarations: [MyUpperPipe],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
        ],
    providers: [],
    exports:[
        CommonModule,
        FormsModule,
        AppRoutingModule,
        MyUpperPipe
    ]
})
export class SharedModule{

}