import { BonusType } from './enums/bonus-type.enum';
import { MerchantCategoryCode } from './enums/merchant-category-code.enum';

export interface StandardRewardRuleDto {
  category: MerchantCategoryCode;
  bonusType: BonusType;
  multiplier: number;
}
