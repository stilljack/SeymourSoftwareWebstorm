import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainStartComponent } from './main-start/main-start.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    MainStartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
