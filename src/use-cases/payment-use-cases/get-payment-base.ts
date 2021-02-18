import { AutoMap } from "@automapper/classes";
import { PaymentBase } from "./payment-base";

export class GetPaymentBase extends PaymentBase {
    @AutoMap()
    id:string;
}