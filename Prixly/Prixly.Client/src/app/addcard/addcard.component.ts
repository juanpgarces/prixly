import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CardData } from '../../models/card-data';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Bank } from '../../models/bank';
import { BankCard } from '../../models/bank-card';

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
  foods: Bank[] = [
    {
      id: 1, name: 'Bank of America',
      details: ''
    },
    {
      id: 2, name: 'American Express',
      details: ''
    },
    {
      id: 3, name: 'HSBC',
      details: ''
    }
  ];

  cars: BankCard[] = [
    {
      id: 101, bankId: 1, name: 'America Card',
      details: ''
    },
    {
      id: 201, bankId: 2, name: 'Gold',
      details: ''
    },
    {
      id: 202, bankId: 2, name: 'Platinum',
      details: ''
    },
    {
      id: 103, bankId: 3, name: 'Super Card',
      details: ''
    }
  ];

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
