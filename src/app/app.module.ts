import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { environment } from 'src/environments/environment';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrorModule } from './error/error.module';
import { AboutModule } from './about/about.module';
import { PhoneNumbersModule } from './phone-numbers/phone-numbers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CommonModule,
    DashboardModule,
    ErrorModule,
    AboutModule,
    PhoneNumbersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
