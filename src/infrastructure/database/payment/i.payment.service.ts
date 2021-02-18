import { IBaseService } from "src/common/i.base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { PaymentPagedModel } from "./payment-paged-model";
import { Payment } from "./payment.entity";

export interface IPaymentService extends IBaseService<Payment> {
    getPaymentList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<PaymentPagedModel>
}