import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { ProductEntity } from './product/product.entity';
import { ProductService } from './product/product.service';

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([ProductEntity])
    ],
    controllers: [],
    providers: [
        {
            provide:'IProductService',
            useClass:ProductService
        }
    ],
    exports:[
        {
            provide:'IProductService',
            useClass:ProductService
        }
    ]
})
export class DatabaseModule {}
