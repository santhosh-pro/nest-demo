import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateCustomerMapper } from './create-customer/create-customer-mapper';
import { CreateCustomerController } from './create-customer/create-customer.controller';
import { DeleteCustomerController } from './delete-customer/delete-customer.controller';
import { GetCustomerListMapper } from './get-customer-list/get-customer-list-mapper';
import { GetCustomerListController } from './get-customer-list/get-customer-list.controller';
import { GetCustomerMapper } from './get-customer/get-customer-mapper';
import { GetCustomerController } from './get-customer/get-customer.controller';
import { UpdateCustomerMapper } from './update-customer/update-customer-mapper';
import { UpdateCustomerController } from './update-customer/update-customer.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        CreateCustomerController,
        UpdateCustomerController,
        DeleteCustomerController,
        GetCustomerController,
        GetCustomerListController
    ],
    providers: [
        CreateCustomerMapper,
        GetCustomerListMapper,
        GetCustomerMapper,
        UpdateCustomerMapper
    ],
})
export class CustomerUseCaseModule {}
