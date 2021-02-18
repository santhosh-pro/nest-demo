import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IPaymentService } from "src/infrastructure/database/payment/i.payment.service";
import { PaymentPagedModel } from "src/infrastructure/database/payment/payment-paged-model";
import { GetPaymentListRequest } from "./get-payment-list-request";
import { GetPaymentListResponse } from "./get-payment-list-response";

@ApiTags('payments')
@Controller('payments')
export class GetPaymentListController {
    constructor(
        @Inject('IPaymentService') private readonly paymentService: IPaymentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get()
    @HttpCode(200)
    async execute(@Query() request: GetPaymentListRequest): Promise<Partial<GetPaymentListResponse>> {

        const result = await this.paymentService.getPaymentList(
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );

        const response = this.mapper.map(result, GetPaymentListResponse, PaymentPagedModel);
        return response;
    }
}