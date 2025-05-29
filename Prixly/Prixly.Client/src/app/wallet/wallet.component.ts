import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcardComponent } from '../addcard/addcard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // <-- ADD THIS
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreditCardDto } from '../../models/credit-card-dto';

@Component({
  selector: 'app-wallet',
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  cards: CreditCardDto[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCards();
  }

  editCard(card: any, index: number, newcard: boolean = true): void {
    const dialogRef = this.dialog.open(AddcardComponent, {
      width: '300px',
      data: { ...card, newcard }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cards[index] = result;
      }
    });
  }

  getCards() {
    this.cards = [
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
  }
}
