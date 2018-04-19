import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from 'angular-tree-component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DomSanitizer} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { MatIconRegistry} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    TreeModule
  ],
  exports: [
    AppComponent,
    MaterialModule
],
  providers: [],
  bootstrap: [AppComponent]
})
//export class AppModule { }
export class AppModule {}

  