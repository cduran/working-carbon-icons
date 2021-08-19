import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule, IconModule } from 'carbon-components-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllIconsComponent } from './all-icons/all-icons.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllIconsComponent,
  ],
  imports: [
    BrowserModule,
    IconModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
