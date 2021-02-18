import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IPaymentService } from "src/infrastructure/database/payment/i.payment.service";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { UpdatePaymentRequest } from "./update-payment-request";

@ApiTags('payments')
@Controller('payments')
export class UpdatePaymentController {
    constructor(
        @Inject('IPaymentService') private readonly paymentService: IPaymentService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string, @Body() request: UpdatePaymentRequest): Promise<void> {
        const isExists = await this.paymentService.isExistsById(id);
        if(!isExists)
            throw new HttpException('Payment Not Found',HttpStatus.BAD_REQUEST);
            
        const payment = this.mapper.map(request, Payment, UpdatePaymentRequest);
        payment.setId(id);
        await this.paymentService.updateById(id, payment);
    }
}