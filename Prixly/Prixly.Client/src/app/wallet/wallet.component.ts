import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wallet',
  imports: [],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
  cards: any[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCards();
  }

  editCard(card: any, index: number, newcard: boolean = true): void {
    const dialogRef = this.dialog.open(/**/, {
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
