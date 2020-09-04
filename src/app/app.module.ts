import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialfeedComponent } from './socialfeed/socialfeed.component';
import { FeaturedfoodComponent } from './featuredfood/featuredfood.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ServicesComponent } from './services/services.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialfeedComponent,
    FeaturedfoodComponent,
    MenuComponent,
    ReservationComponent,
    ServicesComponent,
    ChefsComponent,
    ReviewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
