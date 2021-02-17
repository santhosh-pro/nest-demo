import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { Customer } from './customer/customer.entity';
import { CustomerService } from './customer/customer.service';
import { ProductEntity } from './product/product.entity';
import { ProductService } from './product/product.service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([
            ProductEntity,
            Customer
        ])
    ],
    controllers: [],
    providers: [
        {
            provide:'IProductService',
            useClass:ProductService
        },
        {
            provide:'ICustomerService',
            useClass:CustomerService
        }
    ],
    exports:[
        {
            provide:'IProductService',
            useClass:ProductService
        },
        {
            provide:'ICustomerService',
            useClass:CustomerService
        }
    ]
})
export class DatabaseModule {}
