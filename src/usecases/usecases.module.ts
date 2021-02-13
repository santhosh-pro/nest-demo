import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateProductMapper } from './product-use-case/create-product/create-product-mapper';
import { CreateProductController } from './product-use-case/create-product/create-product.controller';
import { GetProductListMapper } from './product-use-case/get-product-list/get-product-list-mapper';
import { GetProductListController } from './product-use-case/get-product-list/get-product-list.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule],
    controllers: [CreateProductController, GetProductListController],
    providers: [CreateProductMapper, GetProductListMapper],
})
export class UsecasesModule {}
