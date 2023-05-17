import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ListingComponent } from "./listing.component";
import { RestSearchFilter } from "../pipes/searchFilter.pipe";
import { CuisineFilterComponent } from "../filters/cuisineFilter.component";
import { CostFilterComponent } from "../filters/costFilter.component";
import { ListingService } from "../services/listing.service";
@NgModule({
    declarations: [
        ListingComponent,
         RestSearchFilter,
         CuisineFilterComponent,
         CostFilterComponent
        ],
    imports: [
        SharedModule
    ],
    providers:[
        ListingService
    ]
})
export class ListingModule {
}