import { IGiftCard } from "./giftCard";

export interface ITransactionPaymentDetails {
  credit_card_company: string;
  credit_card_last_four_digits: string;
  credit_card_number: string;
  gift_card: IGiftCard;
}
