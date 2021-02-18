import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { Repository } from "typeorm";
import { IPaymentService } from "./i.payment.service";
import { PaymentPagedModel } from "./payment-paged-model";
import { Payment } from "./payment.entity";

export class PaymentService extends BaseService<Repository<Payment>, Payment> implements IPaymentService {
    constructor(
        @InjectRepository(Payment) protected readonly repository: Repository<Payment>
    ) {
        super(repository);
    }

    public async getPaymentList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<PaymentPagedModel> {

        const queryBuilder = this.createQueryBuilder('p');

        const result = await this.paged(queryBuilder,
            pageNumber,
            pageSize,
            orderBy,
            orderByPropertyName
        );
        return result;
    }

}