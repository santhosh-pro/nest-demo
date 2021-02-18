import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IPaymentService } from "src/infrastructure/database/payment/i.payment.service";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { CreatePaymentRequest } from "./create-payment-request";

@ApiTags('payments')
@Controller('payments')
export class CreatePaymentController {
    constructor(
        @Inject('IPaymentService') private readonly paymentService: IPaymentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    @HttpCode(201)
    async execute(@Body() request: CreatePaymentRequest): Promise<any> {

        const payment = this.mapper.map(request, Payment, CreatePaymentRequest);
        const result = await this.paymentService.insert(payment);
        return {id:result.id};
    }
}