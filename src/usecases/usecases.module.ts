import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateProductMapper } from './product-use-case/create-product/create-product-mapper';
import { CreateProductController } from './product-use-case/create-product/create-product.controller';
import { DeleteProductController } from './product-use-case/delete-product/delete-product.controller';
import { GetProductListMapper } from './product-use-case/get-product-list/get-product-list-mapper';
import { GetProductListController } from './product-use-case/get-product-list/get-product-list.controller';
import { UpdateProductMapper } from './product-use-case/update-product/update-product-mapper';
import { UpdateProductController } from './product-use-case/update-product/update-product.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        CreateProductController,
        GetProductListController,
        DeleteProductController,
        UpdateProductController
    ],
    providers: [
        CreateProductMapper, 
        GetProductListMapper,
        UpdateProductMapper
    ],
})
export class UsecasesModule {}