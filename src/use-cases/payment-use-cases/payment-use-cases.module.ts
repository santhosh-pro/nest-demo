import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CreatePaymentMapper } from './create-payment/create-payment-mapper';
import { CreatePaymentController } from './create-payment/create-payment.controller';
import { DeletePaymentController } from './delete-payment/delete-payment.controller';
import { GetPaymentListMapper } from './get-payment-list/get-payment-list-mapper';
import { GetPaymentListController } from './get-payment-list/get-payment-list.controller';
import { GetPaymentMapper } from './get-payment/get-payment-mapper';
import { GetPaymentController } from './get-payment/get-payment.controller';
import { UpdatePaymentMapper } from './update-payment/update-payment-mapper';
import { UpdatePaymentController } from './update-payment/update-payment.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        CreatePaymentController,
        UpdatePaymentController,
        DeletePaymentController,
        GetPaymentController,
        GetPaymentListController
    ],
    providers: [
        CreatePaymentMapper,
        GetPaymentListMapper,
        GetPaymentMapper,
        UpdatePaymentMapper
    ],
})
export class PaymentUseCasesModule {}
