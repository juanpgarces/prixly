import { BonusType } from "./enums/bonus-type";

export interface CustomRewardRuleDto {
  store: string;
  bonusType: BonusType;
  multiplier: number;
}
