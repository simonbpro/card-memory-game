import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-time-over',
  imports: [],
  templateUrl: './time-over.html',
  styleUrl: './time-over.css',
})
export class TimeOver {



  constructor(private _dialog: MatDialog) {

  }

  closeDialog(){
    this._dialog.closeAll();
  }
}
