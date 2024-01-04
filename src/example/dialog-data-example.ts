import {Component, Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogClose,
  MatDialogActions,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-data-example',
  templateUrl: 'dialog-data-example.html',
  standalone: true,
  imports: [MatButtonModule],
})
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./dialog-data-example-dialog.scss'],
  standalone: true,
  imports: [MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatIconModule, MatDialogClose],
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */