import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainStartComponent } from './main-start/main-start.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { CodezooMainComponent } from './codezoo-main/codezoo-main.component';
import { CvMainComponent } from './cv-main/cv-main.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    MainStartComponent,
    NavbarComponent,
    BlogMainComponent,
    CodezooMainComponent,
    CvMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
