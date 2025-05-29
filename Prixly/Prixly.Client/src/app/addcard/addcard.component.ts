import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreditCardDto } from '../../models/credit-card-dto';
import { BankDto } from '../../models/bank-dto';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-addcard',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
  templateUrl: './addcard.component.html',
  styleUrl: './addcard.component.scss'
})
export class AddcardComponent {
  banks: BankDto[] = [
    {
      guid: 'bank-001',
      name: 'Chase',
      description: 'Chase Bank, a leading national bank.',
      bankDetailsDto: {}
    },
    {
      guid: 'bank-002',
      name: 'American Express',
      description: 'American Express, specializing in credit cards.',
      bankDetailsDto: {}
    },
    {
      guid: 'bank-003',
      name: 'Capital One',
      description: 'Capital One, known for innovative banking.',
      bankDetailsDto: {}
    }
  ];

  cards: CreditCardDto[] = [
    {
      guid: '1a2b3c4d-1111-2222-3333-444455556666',
      name: 'Chase Sapphire Preferred',
      description: 'Travel rewards credit card',
      bankGuid: 'bank-001',
      imageUrl: 'https://example.com/images/chase-sapphire.png',
      isActive: true,
      customRewardRules: [],
      standardRewardRules: []
    },
    {
      guid: '2b3c4d5e-2222-3333-4444-555566667777',
      name: 'American Express Gold',
      description: 'Premium dining and grocery rewards',
      bankGuid: 'bank-002',
      imageUrl: 'https://example.com/images/amex-gold.png',
      isActive: true,
      customRewardRules: [],
      standardRewardRules: []
    },
    {
      guid: '3c4d5e6f-3333-4444-5555-666677778888',
      name: 'Capital One Venture',
      description: 'Flat-rate travel rewards',
      bankGuid: 'bank-003',
      imageUrl: 'https://example.com/images/capitalone-venture.png',
      isActive: false,
      customRewardRules: [],
      standardRewardRules: []
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddcardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditCardDto,
    @Inject(MAT_DIALOG_DATA) public newcard: boolean
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.data);
  }
}
