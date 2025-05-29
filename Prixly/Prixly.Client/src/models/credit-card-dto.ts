import { CustomRewardRuleDto } from "./custom-reward-rule-dto";
import { StandardRewardRuleDto } from "./standard-reward-rule-dto";

export interface CreditCardDto {
  guid: string;
  name: string;
  description: string;
  bankGuid: string;
  imageUrl: string;
  isActive: boolean;
  customRewardRules: CustomRewardRuleDto[];
  standardRewardRules: StandardRewardRuleDto[];
}
