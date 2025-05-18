import { MerchantCategoryCode } from './enums/merchant-category-code.enum';
import { CreditCardDto } from './credit-card.dto';

export interface TransactionLogDto {
  guid: string;
  userGuid: string;
  timestamp: string; // ISO format
  amount: number;
  category: MerchantCategoryCode;
  selectedCard: CreditCardDto;
  earnedReward: number;
}
