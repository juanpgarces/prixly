import { BankDetailsDto } from "./bank-details-dto";

export interface BankDto {
  guid: string;
  name: string;
  description?: string;
  bankDetailsDto: BankDetailsDto;
}
