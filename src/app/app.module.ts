import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ClickoutsideDirective } from './appDirectives/clickoutside.directive';
import { OfferingsService } from './appServices/offerings.service';
import { MainboxComponent } from './home/mainbox/mainbox.component';
import { ServiceboxComponent } from './home/servicebox/servicebox.component';
import { IndustryboxComponent } from './home/industrybox/industrybox.component';
import { ProcessboxComponent } from './home/processbox/processbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ClickoutsideDirective,
    MainboxComponent,
    ServiceboxComponent,
    IndustryboxComponent,
    ProcessboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [OfferingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
