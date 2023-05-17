import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { QuickSearchComponent } from "./quickSearch.component";
import { SearchComponent } from "./search.component";
import { HomeService } from "../services/Home.services";
import { SharedModule } from "../shared/shared.module";
@NgModule({

    declarations:[ 
        HomeComponent ,
        SearchComponent,
        QuickSearchComponent
     ],
    imports:[
        SharedModule
    ],
    providers:[
        HomeService
    ]
    
})
export class HomeModule{

}