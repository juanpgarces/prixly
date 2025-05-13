import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CardData } from '../../models/card-data';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcard',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule],
  templateUrl: './addcard.component.html',
  styleUrl: './addcard.component.scss'
})
export class AddcardComponent {
  constructor(
    public dialogRef: MatDialogRef<AddcardComponent>,
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
