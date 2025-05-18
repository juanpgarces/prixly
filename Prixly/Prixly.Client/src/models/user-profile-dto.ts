import { CreditCardDto } from './credit-card.dto';

export interface UserProfileDto {
  guid: string;
  email: string;
  ownedCards: CreditCardDto[];
}
