import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-save-grid',
  templateUrl: './save-grid.component.html',
  styleUrls: ['./save-grid.component.css']
})
export class SaveGridComponent implements OnInit {

  constructor(private storage: LocalStorageService) { }
  savedGrids: string[]; 
  ngOnInit() {
    this.savedGrids  = JSON.parse(this.storage.getSavedGridNames()) || [];
  }

  add() {

  }
}
