import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainStartComponent } from './main-start/main-start.component';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { CodezooMainComponent } from './codezoo-main/codezoo-main.component';
import { CvMainComponent } from './cv-main/cv-main.component';
import { NueralBackgroundComponent } from './nueral-background/nueral-background.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MePictureBoxComponent } from './me-picture-box/me-picture-box.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MeQuickLinksComponent } from './me-quick-links/me-quick-links.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    SharedHeaderComponent,
    MainStartComponent,
    BlogMainComponent,
    CodezooMainComponent,
    CvMainComponent,
    NueralBackgroundComponent,
    MePictureBoxComponent,
    MeQuickLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTableModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
