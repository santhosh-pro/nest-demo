import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { CreateProductMapper } from './product-use-cases/create-product/create-product-mapper';
import { CreateProductController } from './product-use-cases/create-product/create-product.controller';
import { DeleteProductController } from './product-use-cases/delete-product/delete-product.controller';
import { GetProductListMapper } from './product-use-cases/get-product-list/get-product-list-mapper';
import { GetProductListController } from './product-use-cases/get-product-list/get-product-list.controller';
import { GetProductMapper } from './product-use-cases/get-product/get-product-mapper';
import { GetProductController } from './product-use-cases/get-product/get-product.controller';
import { UpdateProductMapper } from './product-use-cases/update-product/update-product-mapper';
import { UpdateProductController } from './product-use-cases/update-product/update-product.controller';
/* PLOP_INJECT_IMPORT */
import { PaymentUseCasesModule } from './payment-use-cases/payment-use-cases.module';
import { CustomerUseCasesModule } from './customer-use-cases/customer-use-cases.module';
@Module({
    imports: [
        CommonModule,
        DatabaseModule,
        /* PLOP_INJECT_MODULE */
		PaymentUseCasesModule,
		CustomerUseCasesModule,
     ],
    controllers: [
        CreateProductController,
        GetProductListController,
        DeleteProductController,
        UpdateProductController,
        GetProductController,
    ],
    providers: [
        CreateProductMapper, 
        GetProductListMapper,
        GetProductMapper,
        UpdateProductMapper
    ],
})
export class UseCasesModule {}