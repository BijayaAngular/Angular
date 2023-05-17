import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; 
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './Header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './Listing/listing.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-rounting-module';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    ListingModule,
    DetailsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}
