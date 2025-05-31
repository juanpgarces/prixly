import { CreditCardDto } from './credit-card.dto';

export interface UserProfileDto {
  guid: string;
  email: string;
  name: string;
  createdAt: Date;
  lastLogin: Date;
  
  ownedCards: CreditCardDto[];
}
