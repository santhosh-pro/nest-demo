import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "src/common/paged-response";
import { Payment } from "./payment.entity";

export class PaymentPagedModel extends PagedResponse {
    @AutoMap(()=>Payment)
    items:Payment[];
}