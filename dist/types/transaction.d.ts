import { IPendingPaymentInstructionInput } from "./pendingPaymentInstructionInput";
import { ITransactionPaymentDetails } from "./transactionPaymentDetails";
export interface ITransaction {
    amount: number;
    buyer_pending_payment_instructions: IPendingPaymentInstructionInput[];
    buyer_pending_payment_notice: string;
    created_at: string;
    gateway: string;
    gateway_display_name: string;
    id: number;
    kind: string;
    name: string;
    payment_details: ITransactionPaymentDetails;
    receipt: string;
    show_buyer_pending_payment_instructions?: boolean;
    status: string;
    status_label: string;
}
//# sourceMappingURL=transaction.d.ts.map