import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainStartComponent } from './main-start/main-start.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    MainStartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
