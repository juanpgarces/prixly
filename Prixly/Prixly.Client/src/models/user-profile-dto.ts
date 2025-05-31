import { CreditCardDto } from './credit-card.dto';

export interface UserProfileDto {
  guid?: string;
  authProvider?: string; // Optional, e.g., 'github', 'microsoft'
  authReferrence?: string; // Optional, for tracking referrals or other purposes
  email: string;
  name: string;
  createdAt?: Date;
  lastLogin?: Date;
  ownedCards: CreditCardDto[];
}
