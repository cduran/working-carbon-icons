import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'carbon-components-angular/button';
import { IconModule } from 'carbon-components-angular/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllIconsComponent } from './all-icons/all-icons.component';
import { AppRoutingModule } from './app-routing.module';
import { IncludedIconsComponent } from './included-icons/included-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllIconsComponent,
    IncludedIconsComponent,
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
