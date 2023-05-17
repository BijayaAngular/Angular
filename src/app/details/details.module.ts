import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { DetailsComponent } from "./details.component";
import { DetailsService } from "../services/details.service";
@NgModule({
    imports: [SharedModule],
    declarations: [DetailsComponent],
    providers: [DetailsService]
})
export class DetailsModule{

}
