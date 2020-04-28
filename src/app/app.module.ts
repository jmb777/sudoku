import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from '../services/storage.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaveGridComponent } from './save-grid/save-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    SaveGridComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule, ReactiveFormsModule,
    StorageServiceModule, MatCheckboxModule, BrowserAnimationsModule, FormsModule, MatDialogModule
  ],
  entryComponents: [SaveGridComponent],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
