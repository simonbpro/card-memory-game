import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-complete',
  imports: [],
  templateUrl: './game-complete.html',
  styleUrl: './game-complete.css',
})
export class GameComplete {

   constructor(private _dialog: MatDialog) {

  }

  closeDialog(){
    this._dialog.closeAll();
  }
}
