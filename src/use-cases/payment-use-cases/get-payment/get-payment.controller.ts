import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IPaymentService } from "src/infrastructure/database/payment/i.payment.service";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { GetPaymentResponse } from "./get-payment-response";

@ApiTags('payments')
@Controller('payments')
export class GetPaymentController {
    constructor(
        @Inject('IPaymentService') private readonly paymentService: IPaymentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get(':id')
    @HttpCode(200)
    async execute(@Param('id') id: string): Promise<GetPaymentResponse> {
        const payment = await this.paymentService.findById(id);
        if(!payment)
            throw new HttpException('Payment Not Found',HttpStatus.BAD_REQUEST);
            
        const response = this.mapper.map(payment, GetPaymentResponse,Payment );
        return response;
    }
}