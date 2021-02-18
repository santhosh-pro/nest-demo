import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Customer } from './customer/customer.entity';
import { CustomerService } from './customer/customer.service';
import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
/* PLOP_INJECT_IMPORT */
import { Payment } from './payment/payment.entity';
import { PaymentService } from './payment/payment.service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            Product,
            Customer,
            /* PLOP_INJECT_ENTITY */
Payment,
        ])
    ],
    controllers: [],
    providers: [
        /* PLOP_INJECT_MODULE */
		{
              provide:'IPaymentService',
              useClass:PaymentService
              },
        {
            provide: 'IProductService',
            useClass: ProductService
        },
        {
            provide: 'ICustomerService',
            useClass: CustomerService
        }
    ],
    exports: [
        /* PLOP_EXPORT_MODULE */
		{
              provide:'IPaymentService',
              useClass:PaymentService
              },
        {
            provide: 'IProductService',
            useClass: ProductService
        },
        {
            provide: 'ICustomerService',
            useClass: CustomerService
        }
    ]
})
export class DatabaseModule { }
