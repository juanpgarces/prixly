import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardData } from '../../models/card-data';

@Component({
  selector: 'app-addcard',
  imports: [],
  templateUrl: './addcard.component.html',
  styleUrl: './addcard.component.css'
})
export class AddcardComponent {
  constructor(
    public dialogRef: MatDialogRef</**/>,
    @Inject(MAT_DIALOG_DATA) public data: CardData,
    @Inject(MAT_DIALOG_DATA) public newcard: boolean
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.data);
  }
}
