import { BonusType } from "./enums/bonus-type";
import { MerchantCategoryCode } from "./enums/merchant-category-code";

export interface StandardRewardRuleDto {
  category: MerchantCategoryCode;
  bonusType: BonusType;
  multiplier: number;
}
