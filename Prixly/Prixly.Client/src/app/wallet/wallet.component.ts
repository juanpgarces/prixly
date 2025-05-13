import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcardComponent } from '../addcard/addcard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; // <-- ADD THIS
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  cards: any[] = [];
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
      { bank: 'Chase', name: 'JANE DOE', exp: '04/26' },
      { bank: 'American Express', name: 'JANE DOE', exp: '11/25' },
      { bank: 'Capital One', name: 'JANE DOE', exp: '08/24' },
    ];
  }
}
