import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  StorageServiceModule } from 'angular-webstorage-service';
import {LocalStorageService} from '../services/storage.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule,ReactiveFormsModule, StorageServiceModule,MatCheckboxModule, BrowserAnimationsModule,FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
