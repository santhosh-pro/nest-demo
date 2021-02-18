import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IPaymentService } from "src/infrastructure/database/payment/i.payment.service";

@ApiTags('payments')
@Controller('payments')
export class DeletePaymentController {
    constructor(
        @Inject('IPaymentService') private readonly paymentService: IPaymentService,
    ) { }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
        const isExists = await this.paymentService.isExistsById(id);
        if (!isExists)
            throw new HttpException('Payment Not Found', HttpStatus.BAD_REQUEST);

        await this.paymentService.deleteById(id);
    }
}