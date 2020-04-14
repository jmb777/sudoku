import { Component, OnInit, Input,ViewChildren,QueryList, AfterViewInit } from '@angular/core';
import { CellOption } from './classes/cellOption';

import { FormControl } from '@angular/forms';
import { Killer } from './classes/killer';
import { LocalStorageService } from 'src/services/storage.service';
import { CellComponent } from './cell/cell.component';

// comment changed on pc change branch
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, AfterViewInit {
// vv

  constructor(private storage: LocalStorageService) { }
  @ViewChildren(CellComponent) viewChildren !: QueryList<CellComponent>;
  killer: Killer = new Killer();
  title = 'sudoku';
  gridContents: CellOption[] = [];
  rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  hasChanged = true;
  isKillerInput = false;
  killerCells: CellOption[] = [];
  killerPuzzle: CellOption[][] = [];
  killerNumber: number;
  killerPossibles: number[] = [];
  possibleSolutions: number[][] = [];
  input1 = new FormControl('');
  colours: string[] = ['#800000', '#FF0000', '#ffa500', '#FFFF00', '#808000', '#008000', '#800080', '#FF00FF',
    '#00FF00', '#008080', '#00FFFF', '#0000FF', '#000080', '#808080', '#C0C0C0'];
  colourIndex = 0;
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  mustStop = false;
  removeValuesFunction = { step: true, isSaved: false, values: [], targetCells: [] };
  showSteps = true;
  message = '';
  ngOnInit(): void {
    // this.gridContents.push(new CellOption([1, 8, 9], 0));
    // this.gridContents.push(new CellOption([2, 3, 6, 9], 1));
    // this.gridContents.push(new CellOption([2, 3, 4, 5, 9], 2));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 3));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 4));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 5));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 6));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 7));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 8));
    // this.gridContents.push(new CellOption([4, 5, 6, 7, 8, 9], 9));

    // this.gridContents = JSON.parse(localStorage.getItem('data'));
    // this.gridContents = [{ values: [4], uniqueValue: 4, cellNumber: 0 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 1 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 2 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 3 }, { values: [6], uniqueValue: 6, cellNumber: 4 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 5 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 6 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 7 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 8 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 9 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 10 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 11 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 12 }, { values: [1], uniqueValue: 1, cellNumber: 13 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 14 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 15 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 16 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 17 }, { values: [3], uniqueValue: 3, cellNumber: 18 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 19 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 20 }, { values: [7], uniqueValue: 7, cellNumber: 21 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 22 }, { values: [8], uniqueValue: 8, cellNumber: 23 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 24 }, { values: [9], uniqueValue: 9, cellNumber: 25 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 26 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 27 }, { values: [2], uniqueValue: 2, cellNumber: 28 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 29 }, { values: [1], uniqueValue: 1, cellNumber: 30 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 31 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 32 }, { values: [4], uniqueValue: 4, cellNumber: 33 }, { values: [8], uniqueValue: 8, cellNumber: 34 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 35 }, { values: [7], uniqueValue: 7, cellNumber: 36 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 37 }, { values: [8], uniqueValue: 8, cellNumber: 38 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 39 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 40 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 41 }, { values: [6], uniqueValue: 6, cellNumber: 42 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 43 }, { values: [5], uniqueValue: 5, cellNumber: 44 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 45 }, { values: [5], uniqueValue: 5, cellNumber: 46 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 47 }, { values: [9], uniqueValue: 9, cellNumber: 48 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 49 }, { values: [6], uniqueValue: 6, cellNumber: 50 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 51 }, { values: [2], uniqueValue: 2, cellNumber: 52 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 53 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 54 }, { values: [7], uniqueValue: 7, cellNumber: 55 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 56 }, { values: [3], uniqueValue: 3, cellNumber: 57 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 58 }, { values: [1], uniqueValue: 1, cellNumber: 59 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 60 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 61 }, { values: [6], uniqueValue: 6, cellNumber: 62 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 63 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 64 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 65 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 66 }, { values: [4], uniqueValue: 4, cellNumber: 67 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 68 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 69 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 70 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 71 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 72 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 73 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 74 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 75 }, { values: [5], uniqueValue: 5, cellNumber: 76 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 77 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 78 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 79 }, { values: [2], uniqueValue: 2, cellNumber: 80 }];
    this.gridContents = [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 0 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 1 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 2 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 3 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 4 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 5 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 6 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 7 }, { values: [8], uniqueValue: null, cellNumber: 8 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 9 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 10 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 11 }, { values: [4], uniqueValue: null, cellNumber: 12 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 13 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 14 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 15 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 16 }, { values: [6], uniqueValue: null, cellNumber: 17 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 18 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 19 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 20 }, { values: [6], uniqueValue: null, cellNumber: 21 }, { values: [9], uniqueValue: null, cellNumber: 22 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 23 }, { values: [5], uniqueValue: null, cellNumber: 24 }, { values: [1], uniqueValue: null, cellNumber: 25 }, { values: [7], uniqueValue: null, cellNumber: 26 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 27 }, { values: [5], uniqueValue: null, cellNumber: 28 }, { values: [7], uniqueValue: null, cellNumber: 29 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 30 }, { values: [4], uniqueValue: null, cellNumber: 31 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 32 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 33 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 34 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 35 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 36 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 37 }, { values: [9], uniqueValue: null, cellNumber: 38 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 39 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 40 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 41 }, { values: [3], uniqueValue: null, cellNumber: 42 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 43 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 44 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 45 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 46 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 47 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 48 }, { values: [1], uniqueValue: null, cellNumber: 49 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 50 }, { values: [8], uniqueValue: null, cellNumber: 51 }, { values: [2], uniqueValue: null, cellNumber: 52 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 53 }, { values: [4], uniqueValue: null, cellNumber: 54 }, { values: [8], uniqueValue: null, cellNumber: 55 }, { values: [3], uniqueValue: null, cellNumber: 56 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 57 }, { values: [6], uniqueValue: null, cellNumber: 58 }, { values: [2], uniqueValue: null, cellNumber: 59 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 60 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 61 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 62 }, { values: [5], uniqueValue: null, cellNumber: 63 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 64 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 65 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 66 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 67 }, { values: [1], uniqueValue: null, cellNumber: 68 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 69 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 70 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 71 }, { values: [6], uniqueValue: null, cellNumber: 72 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 73 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 74 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 75 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 76 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 77 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 78 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 79 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 80 }];
    this.gridContents = [{ values: [5], uniqueValue: null, cellNumber: 0 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 1 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 2 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 3 }, { values: [2], uniqueValue: null, cellNumber: 4 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 5 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 6 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 7 }, { values: [6], uniqueValue: null, cellNumber: 8 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 9 }, { values: [8], uniqueValue: null, cellNumber: 10 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 11 }, { values: [9], uniqueValue: null, cellNumber: 12 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 13 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 14 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 15 }, { values: [5], uniqueValue: null, cellNumber: 16 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 17 }, { values: [1], uniqueValue: null, cellNumber: 18 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 19 }, { values: [2], uniqueValue: null, cellNumber: 20 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 21 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 22 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 23 }, { values: [7], uniqueValue: null, cellNumber: 24 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 25 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 26 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 27 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 28 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 29 }, { values: [8], uniqueValue: null, cellNumber: 30 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 31 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 32 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 33 }, { values: [3], uniqueValue: null, cellNumber: 34 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 35 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 36 }, { values: [4], uniqueValue: null, cellNumber: 37 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 38 }, { values: [5], uniqueValue: null, cellNumber: 39 }, { values: [3], uniqueValue: null, cellNumber: 40 }, { values: [1], uniqueValue: null, cellNumber: 41 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 42 }, { values: [6], uniqueValue: null, cellNumber: 43 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 44 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 45 }, { values: [1], uniqueValue: null, cellNumber: 46 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 47 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 48 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 49 }, { values: [2], uniqueValue: null, cellNumber: 50 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 51 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 52 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 53 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 54 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 55 }, { values: [9], uniqueValue: null, cellNumber: 56 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 57 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 58 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 59 }, { values: [6], uniqueValue: null, cellNumber: 60 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 61 }, { values: [8], uniqueValue: null, cellNumber: 62 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 63 }, { values: [7], uniqueValue: null, cellNumber: 64 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 65 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 66 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 67 }, { values: [4], uniqueValue: null, cellNumber: 68 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 69 }, { values: [1], uniqueValue: null, cellNumber: 70 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 71 }, { values: [8], uniqueValue: null, cellNumber: 72 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 73 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 74 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 75 }, { values: [5], uniqueValue: null, cellNumber: 76 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 77 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 78 }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 79 }, { values: [3], uniqueValue: null, cellNumber: 80 }];
    this.gridContents = [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 0, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 1, isSelected: false }, { values: [4], uniqueValue: null, cellNumber: 2, isSelected: false }, { values: [7], uniqueValue: null, cellNumber: 3, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 4, isSelected: false }, { values: [8], uniqueValue: null, cellNumber: 5, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 6, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 7, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 8, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 9, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 10, isSelected: false }, { values: [9], uniqueValue: null, cellNumber: 11, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 12, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 13, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 14, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 15, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 16, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 17, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 18, isSelected: false }, { values: [6], uniqueValue: null, cellNumber: 19, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 20, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 21, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 22, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 23, isSelected: false }, { values: [3], uniqueValue: null, cellNumber: 24, isSelected: false }, { values: [7], uniqueValue: null, cellNumber: 25, isSelected: false }, { values: [2], uniqueValue: null, cellNumber: 26, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 27, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 28, isSelected: false }, { values: [1], uniqueValue: null, cellNumber: 29, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 30, isSelected: false }, { values: [3], uniqueValue: null, cellNumber: 31, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 32, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 33, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 34, isSelected: false }, { values: [4], uniqueValue: null, cellNumber: 35, isSelected: false }, { values: [4], uniqueValue: null, cellNumber: 36, isSelected: false }, { values: [2], uniqueValue: null, cellNumber: 37, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 38, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 39, isSelected: false }, { values: [7], uniqueValue: null, cellNumber: 40, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 41, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 42, isSelected: false }, { values: [6], uniqueValue: null, cellNumber: 43, isSelected: false }, { values: [3], uniqueValue: null, cellNumber: 44, isSelected: false }, { values: [6], uniqueValue: null, cellNumber: 45, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 46, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 47, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 48, isSelected: false }, { values: [5], uniqueValue: null, cellNumber: 49, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 50, isSelected: false }, { values: [7], uniqueValue: null, cellNumber: 51, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 52, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 53, isSelected: false }, { values: [3], uniqueValue: null, cellNumber: 54, isSelected: false }, { values: [1], uniqueValue: null, cellNumber: 55, isSelected: false }, { values: [6], uniqueValue: null, cellNumber: 56, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 57, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 58, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 59, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 60, isSelected: false }, { values: [5], uniqueValue: null, cellNumber: 61, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 62, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 63, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 64, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 65, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 66, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 67, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 68, isSelected: false }, { values: [8], uniqueValue: null, cellNumber: 69, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 70, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 71, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 72, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 73, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 74, isSelected: false }, { values: [3], uniqueValue: null, cellNumber: 75, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 76, isSelected: false }, { values: [9], uniqueValue: null, cellNumber: 77, isSelected: false }, { values: [1], uniqueValue: null, cellNumber: 78, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 79, isSelected: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 80, isSelected: false }];
    // this.killerNumber = null;
    this.killerPuzzle = [[{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 0, isSelected: false, killerNumber: 24, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 1, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 9, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 10, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false }], [{ values: [5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 2, isSelected: false, killerNumber: 22, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 3, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 11, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 4, isSelected: false, killerNumber: 30, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 12, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 13, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 14, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 21, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 23, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 4], uniqueValue: null, cellNumber: 5, isSelected: false, killerNumber: 7, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 4], uniqueValue: null, cellNumber: 6, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 4], uniqueValue: null, cellNumber: 15, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 7, isSelected: false, killerNumber: 20, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 8, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 16, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 17, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 4], uniqueValue: null, cellNumber: 18, isSelected: false, killerNumber: 7, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 4], uniqueValue: null, cellNumber: 19, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 4], uniqueValue: null, cellNumber: 27, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 20, isSelected: false, killerNumber: 17, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 28, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 29, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false }], [{ values: [4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 22, isSelected: false, killerNumber: 13, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 31, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7], uniqueValue: null, cellNumber: 24, isSelected: false, killerNumber: 10, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7], uniqueValue: null, cellNumber: 33, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7], uniqueValue: null, cellNumber: 34, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 25, isSelected: false, killerNumber: 16, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 26, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 35, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 36, isSelected: false, killerNumber: 23, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 45, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 54, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 63, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6], uniqueValue: null, cellNumber: 37, isSelected: false, killerNumber: 7, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6], uniqueValue: null, cellNumber: 38, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 30, isSelected: false, killerNumber: 19, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 39, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 46, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 47, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 48, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false }], [{ values: [3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 32, isSelected: false, killerNumber: 33, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 41, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 50, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 51, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: true }, { values: [3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 52, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }], [{ values: [6, 7, 8, 9], uniqueValue: null, cellNumber: 42, isSelected: false, killerNumber: 15, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [6, 7, 8, 9], uniqueValue: null, cellNumber: 43, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 44, isSelected: false, killerNumber: 20, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 53, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 62, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 71, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [5, 6, 8, 9], uniqueValue: null, cellNumber: 55, isSelected: false, killerNumber: 14, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [5, 6, 8, 9], uniqueValue: null, cellNumber: 64, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 56, isSelected: false, killerNumber: 13, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 65, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 74, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 40, isSelected: false, killerNumber: 26, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 49, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 57, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 58, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 59, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 60, isSelected: false, killerNumber: 18, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 69, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 78, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [1, 2, 3, 4], uniqueValue: null, cellNumber: 61, isSelected: false, killerNumber: 5, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4], uniqueValue: null, cellNumber: 70, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }], [{ values: [2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 72, isSelected: false, killerNumber: 11, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 73, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }], [{ values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 66, isSelected: false, killerNumber: 24, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 67, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 68, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 75, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 76, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: false }, { values: [1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 77, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false }], [{ values: [2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 79, isSelected: false, killerNumber: 11, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [2, 3, 4, 5, 6, 7, 8, 9], uniqueValue: null, cellNumber: 80, isSelected: false, killerNumber: null, killerBackground: 'FFFFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }]];
    this.killerPuzzle = [ [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 0, isSelected: false, killerNumber: 24, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 1, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 9, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 10, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 2, isSelected: false, killerNumber: 22, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 3, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 11, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 4, isSelected: false, killerNumber: 30, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 12, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 13, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 14, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 21, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 23, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 4 ], uniqueValue: null, cellNumber: 5, isSelected: false, killerNumber: 7, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 4 ], uniqueValue: null, cellNumber: 6, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 4 ], uniqueValue: null, cellNumber: 15, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 7, isSelected: false, killerNumber: 20, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 8, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 16, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 17, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 4 ], uniqueValue: null, cellNumber: 18, isSelected: false, killerNumber: 7, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 4 ], uniqueValue: null, cellNumber: 19, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 4 ], uniqueValue: null, cellNumber: 27, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 20, isSelected: false, killerNumber: 17, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 28, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 29, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 22, isSelected: false, killerNumber: 13, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 31, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7 ], uniqueValue: null, cellNumber: 24, isSelected: false, killerNumber: 10, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7 ], uniqueValue: null, cellNumber: 33, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7 ], uniqueValue: null, cellNumber: 34, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 25, isSelected: false, killerNumber: 16, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 26, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 35, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 36, isSelected: false, killerNumber: 23, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 45, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 54, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 63, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6 ], uniqueValue: null, cellNumber: 37, isSelected: false, killerNumber: 7, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6 ], uniqueValue: null, cellNumber: 38, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 30, isSelected: false, killerNumber: 19, killerBackground: '808080', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 39, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 46, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 47, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 48, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 32, isSelected: false, killerNumber: 33, killerBackground: '808080', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 41, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 50, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [ 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 51, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: true }, { values: [ 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 52, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ], [ { values: [ 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 42, isSelected: false, killerNumber: 15, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 43, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 44, isSelected: false, killerNumber: 20, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 53, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 62, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 71, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 5, 6, 8, 9 ], uniqueValue: null, cellNumber: 55, isSelected: false, killerNumber: 14, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 5, 6, 8, 9 ], uniqueValue: null, cellNumber: 64, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 56, isSelected: false, killerNumber: 13, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 65, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 74, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 40, isSelected: false, killerNumber: 26, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 49, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 57, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 58, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 59, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 60, isSelected: false, killerNumber: 18, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 69, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 78, isSelected: false, killerNumber: null, killerBackground: '00FFFF', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 1, 2, 3, 4 ], uniqueValue: null, cellNumber: 61, isSelected: false, killerNumber: 5, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4 ], uniqueValue: null, cellNumber: 70, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 72, isSelected: false, killerNumber: 11, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 73, isSelected: false, killerNumber: null, killerBackground: 'FFFF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ], [ { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 66, isSelected: false, killerNumber: 24, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 67, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 68, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: false, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 75, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 76, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: false, killerBorderTop: false }, { values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 77, isSelected: false, killerNumber: null, killerBackground: '00FF00', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: false } ], [ { values: [ 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 79, isSelected: false, killerNumber: 11, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: true, killerBorderRight: false, killerBorderTop: true }, { values: [ 2, 3, 4, 5, 6, 7, 8, 9 ], uniqueValue: null, cellNumber: 80, isSelected: false, killerNumber: null, killerBackground: '808080', killerBorderBottom: true, killerBorderLeft: false, killerBorderRight: true, killerBorderTop: true } ] ]
    this.gridContents = [];
    this.killerPuzzle.forEach(cells => {
      cells.forEach(cell => this.gridContents.push(cell));
    });
    this.gridContents.sort((a, b) => a.cellNumber > b.cellNumber ? 1 : -1);
    this.killer.setColours(this.killerPuzzle, this.gridContents);
    this.viewChildren[0].inputElement.nativeElement.focus();
  }
  ngAfterViewInit(){
    this.viewChildren.forEach(c => {
      console.log(c.cellOption.cellNumber);
      
    });
    
  }
  reset() {
    this.gridContents = [];
    // this.gridContents[0] = new CellOption([4], 0);
    for (let index = 0; index < 81; index++) {
      this.gridContents.push(new CellOption(undefined, index));

    }
    setTimeout(() => {this.viewChildren.toArray()[0].inputElement.nativeElement.focus();},0);
    
  }

  writeFile() {
    // localStorage.setItem('data', JSON.stringify(this.gridContents));
    // this.killer.test(this.gridContents);
    this.storage.setStorage(JSON.stringify(this.killerPuzzle));
  }
  getSavedGrid() {
    this.killerPuzzle = JSON.parse(this.storage.getStorage());
    this.gridContents = [];
    this.killerPuzzle.forEach(cells => {
      cells.forEach(cell => this.gridContents.push(cell));
    });
    this.gridContents.sort((a, b) => a.cellNumber > b.cellNumber ? 1 : -1);
    this.killer.setColours(this.killerPuzzle, this.gridContents);
    
  }
  setNewValue(e) {

    // console.log(e);
    this.gridContents[e.key].values = e.value; 
    const next = e.key + 1;
    // setTimeout(() => {this.viewChildren.toArray()[next].inputElement.nativeElement.focus();},0);
  }
  test() {
    this.killer.test(this.killerPuzzle);

  }


  getRowIndices(n: number): number[] {
    const indices = [];
    const row = Math.floor(n / 9);
    for (let index = 0; index < 9; index++) {
      const e = row * 9 + index;
      indices.push(e);

    }
    // console.log(indices);
    return indices;
  }

  getColIndices(n: number): number[] {
    const indices = [];

    const col = n % 9;
    for (let index = 0; index < 9; index++) {
      const e = index * 9 + col;
      indices.push(e);

    }
    // console.log(indices);
    return indices;
  }

  getBoxIndices(n: number): number[] {
    const indices = [];
    const row = Math.floor(n / 9);
    const col = n % 9;
    const boxRow = Math.floor(row / 3);
    const boxCol = Math.floor(col / 3);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const e = boxRow * 27 + r * 9 + boxCol * 3 + c;
        indices.push(e);
      }


    }
    // console.log(indices);
    return indices;
  }


  findSameCells(cellNumber: number, cellArray: CellOption[], arrayType?: string) {

    for (let arrayLength = 1; arrayLength < 6; arrayLength++) {
      const definedLengthCells: CellOption[] = [];
      for (const cell of cellArray) {

        if (cell.values.length <= arrayLength) {
          definedLengthCells.push(cell);
        }
      }

      for (const checkCell of definedLengthCells) {
        const arrayToMatch: number[] = checkCell.values;
        let count = 0;
        const sameCells: CellOption[] = [];
        for (const cell of definedLengthCells) {

          if (cell.values.every(v =>  arrayToMatch.includes(v))){
            sameCells.push(cell);
            count++;
          }
        }

        if (arrayToMatch.length === count) {
          const cellsToCheck: CellOption[] = [];
          for (const cell of cellArray) {

            if (!sameCells.includes(cell)) {

              cellsToCheck.push(cell);

              // console.log('Checking array: ' + arrayToMatch);
              // for (const v of arrayToMatch) {
              //   const index = this.gridContents[cell.cellNumber].values.indexOf(Number(v), 0);
              //   if (index > -1) {
              //     this.gridContents[cell.cellNumber].values.splice(index, 1);
              //     console.log('In findInSameCells - Removing ' + v + ' from cell ' + cell.cellNumber + 'contents ' + cell.values);
              //     if (this.gridContents[cell.cellNumber].values.length === 1) {
              //       this.gridContents[cell.cellNumber].uniqueValue = this.gridContents[cell.cellNumber].values[0];
              //     }
              //     this.hasChanged = true;
              //   }
              // }
            }
            // console.log('FindSameCells');


          }
          this.message = 'Finding same numbers in range '
            + this.getCoords(cellArray[0].cellNumber)
            + ' to ' + this.getCoords(cellArray[cellArray.length - 1].cellNumber) + '. Numbers found: ' + arrayToMatch;
          this.hasChanged = this.removeValues(arrayToMatch, cellsToCheck, 'Finding same numbers in range '
            + this.getCoords(cellArray[0].cellNumber)
            + ' to ' + this.getCoords(cellArray[cellArray.length - 1].cellNumber) + '. Numbers found: ' + arrayToMatch);

          if (this.hasChanged) { return; }
        }
      }

    }

  }


  compute() {
    let cellArray: CellOption[] = [];
    this.hasChanged = true;
    this.mustStop = false;
    while ((this.hasChanged && !this.mustStop && this.showSteps) || (this.hasChanged && !this.showSteps)) {
      this.hasChanged = false;

      for (let cellNumber = 0; cellNumber < 81; cellNumber++) {

        cellArray = [];
        this.getRowIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSameCells(cellNumber, cellArray, 'row');
        if (this.mustStop && this.showSteps) { return; }
        cellArray = [];
        this.getColIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSameCells(cellNumber, cellArray, 'column');
        if (this.mustStop && this.showSteps) { return; }
        cellArray = [];
        this.getBoxIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSameCells(cellNumber, cellArray, 'box');
        if (this.mustStop && this.showSteps) { return; }


      }
      // for (let cellNumber = 0; cellNumber < 81; cellNumber++) {

      //   cellArray = [];
      //   this.getRowIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
      //   this.findHiddenNumbers(cellNumber, cellArray, 'row');
      //   cellArray = [];
      //   this.getColIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
      //   this.findHiddenNumbers(cellNumber, cellArray, 'column');
      //   cellArray = [];
      //   this.getBoxIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
      //   this.findHiddenNumbers(cellNumber, cellArray, 'box');

      // }

      for (let cellNumber = 0; cellNumber < 81; cellNumber++) {

        cellArray = [];
        this.getRowIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSingleOccurences(cellNumber, cellArray, 'row');
        cellArray = [];
        this.getColIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSingleOccurences(cellNumber, cellArray, 'column');
        cellArray = [];
        this.getBoxIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSingleOccurences(cellNumber, cellArray, 'box');

      }
      for (let cellNumber = 0; cellNumber < 81; cellNumber++) {

        cellArray = [];
        this.getRowIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSimilarCells(cellNumber, cellArray, 'row');
        this.findLineBoxIntersect(cellArray, true);
        cellArray = [];
        this.getColIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSimilarCells(cellNumber, cellArray, 'column');
        this.findLineBoxIntersect(cellArray, true);
        cellArray = [];
        this.getBoxIndices(cellNumber).forEach(e => cellArray.push(this.gridContents[e]));
        this.findSimilarCells(cellNumber, cellArray, 'box');

      }
      for (let i = 0; i < 81; i = i + 3) {
        const boxArray: CellOption[] = [];
        this.getBoxIndices(i).forEach(e => boxArray.push(this.gridContents[e]));
        this.findIntersections(boxArray);
        this.findLineBoxIntersect(boxArray, false);
        // this.findThreeValueIntersects(boxArray);

      }


      // cellArray = [];
      // this.getRowIndices(20).forEach(e => cellArray.push(this.gridContents[e]));
      // this.findLineBoxIntersect(cellArray);

      const killerChange: boolean = this.killer.test(this.killerPuzzle);
      if (killerChange) { this.hasChanged = true; }

    }


  }



  findHiddenCells(cellNumber: number, cellArray: CellOption[], arrayType?: string) {
    // console.log('Finding hidden cells in ' + arrayType + ' array: ' + this.showArrayValues(cellArray));
    for (let testNumber = 1; testNumber < 6; testNumber++) {

      const numberCellPositions: { n: number, cell: CellOption }[][] = [];
      for (let i = 1; i < 10; i++) {
        const cellsContainingNumber: { n: number, cell: CellOption }[] = [];

        for (const cell of cellArray) {
          if (cell.values.includes(i)) {
            cellsContainingNumber.push({ n: i, cell });
          }
        }
        numberCellPositions.push(cellsContainingNumber);
      }

      const numbersFiteredByFrequency = numberCellPositions.filter(n => n.length === testNumber);

      let combination: { n: number[], possiblePositions: number[] } = { n: [], possiblePositions: [] };
      const combinations = [];
      for (let i = 0; i < numbersFiteredByFrequency.length; i++) {
        combination = { n: [], possiblePositions: [] };
        combination.n.push(numbersFiteredByFrequency[i][0].n);
        for (const cell of numbersFiteredByFrequency[i]) {
          combination.possiblePositions.push(cell.cell.cellNumber);
        }

        for (let j = i + 1; j < numbersFiteredByFrequency.length; j++) {
          const testPositions: number[] = [];
          for (const cell of numbersFiteredByFrequency[j]) {
            testPositions.push(cell.cell.cellNumber);
          }
          if (testPositions.every((v) => combination.possiblePositions.includes(v))) {
            combination.n.push(numbersFiteredByFrequency[j][0].n);
          }
        }
        if (combination.n.length === combination.possiblePositions.length) { combinations.push(combination); }

        for (const c of combinations) {
          for (const p of c.possiblePositions) {
            if (this.gridContents[p].values.length !== c.n.length) {
              this.gridContents[p].values = c.n;
              // console.log('In findHiddenCells - Setting ' + c.n + ' to cell ' + this.gridContents[p].cellNumber);
              if (this.gridContents[p].values.length === 1) {
                this.gridContents[p].uniqueValue = this.gridContents[p].values[0];
                console.log('Cell ' + this.getCoords(p) + 'set to ' + this.gridContents[p].values[0]);
              }
              this.hasChanged = true;
              // gggg
            }

          }
        }

      }
    }


  }
  showArrayValues(array: CellOption[]) {
    let x = '';
    array.forEach(e => {
      x = x + e.cellNumber + ' ';
    });
    return x;
  }
  findHiddenNumbers(cellNumber: number, cellArray: CellOption[], arrayType?: string) {
    for (let numberLength = 3; numberLength < 6; numberLength++) {
      const selectedCells: CellOption[] = [];
      for (const cell of cellArray) {
        if (cell.values.length < numberLength && cell.values.length > 1) {
          selectedCells.push(cell);
        }
      }
      const selectedNumbers: number[] = [];
      for (const cell of selectedCells) {
        cell.values.forEach(v => {
          v = Number(v);
          if (selectedNumbers.indexOf(v) === -1) {
            selectedNumbers.push(v);
          }
        });
      }

      if (selectedCells.length === selectedNumbers.length) {
        const selectedCellNumbers: number[] = [];
        for (const cell of selectedCells) {
          selectedCellNumbers.push(cell.cellNumber);
        }
        // this.removeValues(selectedNumbers, cellArray);
        for (const cell of cellArray) {
          if (selectedCellNumbers.indexOf(cell.cellNumber) === -1) {
            selectedNumbers.forEach(v => {
              const index = cell.values.indexOf(v);
              if (index > -1) {
                this.gridContents[cell.cellNumber].values.splice(index, 1);
                // console.log('In findHiddenNumbers - Removing ' + v + ' from cell ' + cell.cellNumber + 'contents ' + cell.values);
                if (this.gridContents[cell.cellNumber].values.length === 1) {
                  this.gridContents[cell.cellNumber].uniqueValue = this.gridContents[cell.cellNumber].values[0];
                  console.log('Cell ' + this.getCoords(cell.cellNumber) + ' set to ' + this.gridContents[cell.cellNumber].values[0]);
                }
                this.hasChanged = true;
              }
            });
          }
        }
      }

    }
  }
  findSingleOccurences(cellNumber: number, cellArray: CellOption[], arrayType?: string) {
    const occurences: CellOption[][] = [];
    for (let index = 1; index < 10; index++) {
      const numberOccurences: CellOption[] = [];
      cellArray.forEach(c => {
        if (c.values.indexOf(index) > -1 && c.values.length > 1) {
          numberOccurences.push(c);
        }
      });
      occurences.push(numberOccurences);
    }

    for (let i = 0; i < 9; i++) {

      if (occurences[i].length === 1) {
        const singles: number[] = [];
        cellArray.forEach(c => {
          if (c.values.length === 1) {
            singles.push(c.values[0]);
          }
        });
        if (singles.indexOf(i + 1) === -1) {
          this.gridContents[occurences[i][0].cellNumber].values = [i + 1];
          this.gridContents[occurences[i][0].cellNumber].uniqueValue = i + 1;
          console.log('xCell ' + this.getCoords(occurences[i][0].cellNumber) + ' set to ' + Number( i + 1));
          this.hasChanged = true;
        }

      }
    }

  }

  findSimilarCells(cellNumber: number, cellArray: CellOption[], arrayType?: string) {
    for (let arrayLength = 2; arrayLength < 5; arrayLength++) {
      for (const cell of cellArray) {
        if (cell.values.length === arrayLength) {
          const arrayContents = cell.values;
          const longerArrays: CellOption[] = [];
          const otherValues: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (const c of cellArray) {
            if (c.values.length === arrayLength + 1) {
              longerArrays.push(c);
            }
          }
          for (const c of longerArrays) {
            if (arrayContents.every(v => c.values.includes(v))) {
              for (const n of c.values) {
                if (!arrayContents.includes(n)) {
                  otherValues[n - 1]++;
                }
              }
            }
          }
          for (let i = 0; i < 9; i++) {
            if (otherValues[i] === arrayLength) {
              for (const c of cellArray) {
                if (!arrayContents.every(v => c.values.includes(v))) {
                  const index = c.values.indexOf(i + 1);
                  if (index > -1) {

                    this.gridContents[c.cellNumber].values.splice(index, 1);
                    // console.log('In findInSameCells - Removing ' + i + 1 + ' from cell ' + c.cellNumber + 'contents ' + c.values);
                    this.hasChanged = true;
                  }

                }
              }
            }
          }
        }
      }

    }


  }

  findIntersections(boxArray: CellOption[]) {
    const occurences: CellOption[][] = [];
    for (let i = 0; i < 9; i++) {
      const digitOccurences: CellOption[] = [];
      for (const c of boxArray) {
        if (c.values.includes(i + 1)) {
          digitOccurences.push(c);
        }
      }
      occurences.push(digitOccurences);
    }


    for (let i = 0; i < 9; i++) {
      const cellsToChange: CellOption[] = [];

      const positions: number[] = [];
      for (const c of occurences[i]) {
        positions.push(c.cellNumber);
      }

      let isRow = false;
      let isCol = false;

      if (occurences[i].length === 2) {

        if (positions[1] - positions[0] === 1 || positions[1] - positions[0] === 2) {
          isRow = true;
          // this.getRowIndices(positions[0]).forEach(e => cellsToChange.push(this.gridContents[e]));
        }
        if (positions[1] - positions[0] === 9 || positions[1] - positions[0] === 18) { isCol = true; }

      }
      if (occurences[i].length === 3) {
        if (positions[2] - positions[1] === 1 && positions[3] - positions[2] === 1) { isRow = true; }
        if (positions[2] - positions[1] === 9 && positions[3] - positions[2] === 9) { isCol = true; }
      }
      if (isRow) {
        this.getRowIndices(positions[0]).forEach(n => {
          if (!boxArray.includes(this.gridContents[n])) { cellsToChange.push(this.gridContents[n]); }
        });
      }

      if (isCol) {
        this.getColIndices(positions[0]).forEach(n => {
          if (!boxArray.includes(this.gridContents[n])) { cellsToChange.push(this.gridContents[n]); }
        });
      }

      this.hasChanged = this.removeValues([i + 1], cellsToChange, 'Line / box intersection ');

    }
  }

  findLineBoxIntersect(cellArray: CellOption[], isLine: boolean) {
    const occurences: CellOption[][] = [];
    for (let i = 1; i < 10; i++) {
      const cellOccurence: CellOption[] = [];
      cellArray.forEach(cell => {
        if (cell.values.includes(i)) { cellOccurence.push(cell); }
      });
      occurences.push(cellOccurence);
    }
    for (let i = 0; i < 9; i++) {
      if (occurences[i].length <= 3 && occurences[i].length > 1) {
        if (isLine) {
          const boxNumber = this.getBoxNumber(occurences[i][0]);
          if (occurences[i].every(occurence => this.getBoxNumber(occurence) === boxNumber)) {
            const cellsToChange: CellOption[] = [];
            this.getBoxIndices(occurences[i][0].cellNumber).forEach(v => {
              if (cellArray.every(c => c.cellNumber !== v)) {
                cellsToChange.push(this.gridContents[v]);
              }

            });
            this.hasChanged = this.removeValues([i + 1], cellsToChange,
              'Line box intersect - Removing ' + Number(i + 1) + ' from box number ' + boxNumber);
            if (this.hasChanged) { return; }

          }
        } else {
          const row = Math.floor(occurences[i][0].cellNumber / 9);
          const col = occurences[i][0].cellNumber % 9 + 1;
          const cellLine: CellOption[] = [];
          const cellsToChange: CellOption[] = [];
          if (occurences[i].every(occurence => Math.floor(occurence.cellNumber) / 9 === row)) {
            this.getRowIndices(occurences[i][0].cellNumber).forEach(v => {
              if (cellArray.every(c => c.cellNumber !== v)) {
                cellsToChange.push(this.gridContents[v]);
              }
            });
          }
          if (occurences[i].every(occurence => Math.floor(occurence.cellNumber) % 9 + 1 === col)) {
            this.getColIndices(occurences[i][0].cellNumber).forEach(v => {
              if (cellArray.every(c => c.cellNumber !== v)) {
                cellsToChange.push(this.gridContents[v]);
              }
            });
          }
          if (cellsToChange.length > 0) {
            this.hasChanged = this.removeValues([i + 1], cellsToChange,
              'Line box intersect - Removing ' + Number(i + 1) + ' from lins ');
            if (this.hasChanged) { return; }
          }
        }

      }
    }
  }
  getBoxNumber(cell: CellOption) {
    const n = cell.cellNumber;

    const y = Math.floor(n / 27);
    const x = Math.floor((n % 9) / 3);
    return x + 3 * y;
  }
  findThreeValueIntersects(boxArray: CellOption[]) {
    const threeValueCells: CellOption[] = [];
    boxArray.forEach(cell => {
      if (cell.values.length === 3) {
        threeValueCells.push(cell);
      }
    });
    for (const cell of threeValueCells) {
      const thisCell = cell;
      const sameCells: CellOption[] = [];
      threeValueCells.forEach(c => {
        if (c.values.every((n, i) => n === thisCell.values[i])) { sameCells.push(c); }
      });
      if (sameCells.length === 2) {
        const r1 = Math.floor(sameCells[0].cellNumber / 9);
        const r2 = Math.floor(sameCells[1].cellNumber / 9);
        const c1 = sameCells[0].cellNumber % 9;
        const c2 = sameCells[1].cellNumber % 9;
        const isRow = (Math.floor(sameCells[0].cellNumber / 9) === Math.floor(sameCells[1].cellNumber / 9)) ? true : false;
        const isCol = (sameCells[0].cellNumber % 9 === sameCells[1].cellNumber % 9) ? true : false;
        if (r1 === r2) {
          for (const c of sameCells) {
            const colCellNumbers = this.getColIndices(c.cellNumber);
            colCellNumbers.forEach(n => {
              if (this.gridContents[n].cellNumber !== c.cellNumber && this.gridContents[n].values.every((v, i) => v === c.values[i])) {
                const targetCells: CellOption[] = [];
                boxArray.forEach(boxCell => {
                  if (boxCell.cellNumber !== c.cellNumber) {
                    if (boxCell.cellNumber % 9 === c.cellNumber % 9) { targetCells.push(boxCell); }
                  }
                });
                this.hasChanged = this.removeValues(c.values, targetCells);
              }
            });
          }

        }
        if (c1 === c2) {
          for (const c of sameCells) {
            const rowCellNumbers = this.getRowIndices(c.cellNumber);
            rowCellNumbers.forEach(n => {
              if (this.gridContents[n].cellNumber !== c.cellNumber && this.gridContents[n].values.every((v, i) => v === c.values[i])) {
                const targetCells: CellOption[] = [];
                boxArray.forEach(boxCell => {
                  if (boxCell.cellNumber !== c.cellNumber) {
                    if (Math.floor(boxCell.cellNumber / 9) === Math.floor(c.cellNumber / 9)) { targetCells.push(boxCell); }
                  }
                });
                this.hasChanged = this.removeValues(c.values, targetCells);
              }
            });
          }

        }
      }
    }
  }
  removeValues(values: number[], targetCells: CellOption[], message?: string): boolean {

    let retVal = false;
    this.mustStop = false;
    if (this.removeValuesFunction.isSaved) {
      this.removeValuesFunction.targetCells.forEach(cell => {
        this.removeValuesFunction.values.forEach(v => {
          const index = cell.values.indexOf(v);
          if (index > -1) {
            cell.values.splice(index, 1);
            retVal = true;
            if (cell.values.length === 0) { this.throwError('zero length values'); }
            if (cell.values.length === 1) { 
              cell.uniqueValue = cell.values[0];
              console.log('Cell ' + this.getCoords(cell.cellNumber) + ' set to ' + cell.values[0]);
             }
           
          }
        });
      });
      this.message = '';
      this.hasChanged = true;

    }

    targetCells.forEach(cell => {
      values.forEach(v => {
        const index = cell.values.indexOf(v);
        if (index > -1) {

          if (!this.removeValuesFunction.step) {
            cell.values.splice(index, 1);
            if (cell.values.length === 0) { this.throwError('zero length values'); }
            if (cell.values.length === 1) { 
              cell.uniqueValue = cell.values[0];
              console.log('Cell ' + this.getCoords(cell.cellNumber) + ' set to ' + cell.values[0]);
             }

          } else {
            if (message) {
              // console.log(message);

              this.message = message;
              message = '';
            }
            // console.log('     Removing ' + v + ' from cell ' + this.getCoords(cell.cellNumber));
            // this.message = this.message + '<br> &nbsp &nbsp    Removing ' + v + ' from cell ' + this.getCoords(cell.cellNumber);
          }
          retVal = true;
          this.mustStop = true;
        }
      });
    });
    if (this.removeValuesFunction.step && retVal) {
      this.removeValuesFunction.values = values;
      this.removeValuesFunction.targetCells = targetCells;
      this.removeValuesFunction.isSaved = true;
    } else {
      this.removeValuesFunction.values = [];
      this.removeValuesFunction.targetCells = [];
      this.removeValuesFunction.isSaved = false;
    }
    // if (retVal) {
    //   this.mustStop = true;
    // } else {
    //   this.mustStop = false;
    // }
    return (this.hasChanged) ? this.hasChanged : retVal;
  }
  throwError(arg0: string) {
    throw new Error('Method not implemented.');
  }
  setKillerCells() {
    this.isKillerInput = true;
    this.killerPuzzle = [];
    this.reset();
  }
  cellSelected(cell: CellOption) {
    if (this.isKillerInput) {
      let alreadySelected = false;
      this.killerPuzzle.forEach(group => {
        if (group.includes(cell)) { alreadySelected = true; }
      });
      if (alreadySelected) { return; }
      if (cell.isSelected) {
        cell.killerBorderBottom = false;
        cell.killerBorderLeft = false;
        cell.killerBorderRight = false;
        cell.killerBorderTop = false;
        this.killerCells.splice(this.killerCells.indexOf(cell), 1);
      } else {
        this.killerCells.push(cell);
      }

      if (this.areContiguousCells(this.killerCells)) {
        cell.isSelected = (cell.isSelected) ? false : true;

      } else {
        if (cell.isSelected) {
          this.killerCells.push(cell);
        } else {

          this.killerCells.splice(this.killerCells.indexOf(cell), 1);
        }
      }

      this.setKillerBorders();

    }

  }
  setKillerBorders() {
    this.killerCells.forEach(c => {
      c.killerBorderBottom = false;
      c.killerBorderLeft = false;
      c.killerBorderRight = false;
      c.killerBorderTop = false;
      // c.killerBackground = this.colours[this.colourIndex];
    });
    this.colourIndex++;
    this.colourIndex = this.colourIndex % 14;
    this.killerCells.sort((a, b) => a.cellNumber > b.cellNumber ? 1 : -1);
    for (const c of this.killerCells) {
      const _row = Math.floor(c.cellNumber / 9);
      const _col = c.cellNumber % 9;
      let _top = true;
      let _bottom = true;
      let _right = true;
      let _left = true;

      this.killerCells.forEach(cell => {
        if (Math.floor(cell.cellNumber / 9) === _row && cell.cellNumber % 9 + 1 === _col) { _left = false; }
        if (Math.floor(cell.cellNumber / 9) === _row && cell.cellNumber % 9 - 1 === _col) { _right = false; }
        if (Math.floor(cell.cellNumber / 9) + 1 === _row && cell.cellNumber % 9 === _col) { _top = false; }
        if (Math.floor(cell.cellNumber / 9) - 1 === _row && cell.cellNumber % 9 === _col) { _bottom = false; }
      });

      c.killerBorderTop = _top;
      c.killerBorderBottom = _bottom;
      c.killerBorderLeft = _left;
      c.killerBorderRight = _right;
    }


  }

  areContiguousCells(cells: CellOption[]): boolean {
    if (cells.length === 1) {
      return true;
    }

    for (const c of cells) {
      let result = false;
      const row = Math.floor(c.cellNumber / 9);
      const col = c.cellNumber % 9;
      cells.forEach(p => {

        const row1 = Math.floor(p.cellNumber / 9);
        const col1 = p.cellNumber % 9;
        if (row === row1 && Math.abs(col - col1) === 1) {
          result = true;
        }
        if (col === col1 && Math.abs(row - row1) === 1) {
          result = true;
        }

      });

      if (!result) { return false; }
    }
    return true;
  }
  killerNumberInput() {
    this.killerCells.sort((a, b) => a.cellNumber > b.cellNumber ? 1 : -1);
    this.killerCells[0].killerNumber = this.input1.value;
    this.killerCells.forEach(v => v.isSelected = false);
    this.killerPuzzle.push(this.killerCells);
    this.killerPossibles = [];

    this.killerPossibles = [];
    this.possibleSolutions = [];
    this.findPossible(Number(this.input1.value), this.killerCells.length, []);
    this.killerPossibles.sort((a, b) => a > b ? 1 : -1);
    this.killerCells.forEach(cell => cell.values = this.killerPossibles);


    this.killerCells = [];
    this.input1.setValue(null);
    this.killer.setColours(this.killerPuzzle, this.gridContents);
  }


  findPossible(total: number, length: number, used: number[]): void {
    if (length === 0) {
      let sum = 0;
      used.forEach(v => sum = sum + v);
      if (sum === total) {
        // console.log('Sum...' + used);
        used.forEach(v => {
          if (!this.killerPossibles.includes(v)) {
            this.killerPossibles.push(v);
          }
        });
      }

    } else {
      for (let i = 1; i < 10; i++) {
        if (!used.includes(i)) {
          used.push(i);
          this.findPossible(total, length - 1, used);
          used.pop();
        }

      }
    }
  } getCoords(n: number) {
    const row = Math.floor(n / 9);
    const col = n % 9 + 1;
    return this.letters[row] + col;
  }
}
