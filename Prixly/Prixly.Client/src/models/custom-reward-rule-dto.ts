import { BonusType } from './enums/bonus-type.enum';

export interface CustomRewardRuleDto {
  store: string;
  bonusType: BonusType;
  multiplier: number;
}
