import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base.service";
import { Repository } from "typeorm";
import { IProductService } from "./i.product.service";
import { ProductEntity } from "./product.entity";

export class ProductService extends BaseService<Repository<ProductEntity>,ProductEntity> implements IProductService {
    constructor(
        @InjectRepository(ProductEntity) protected readonly repository:Repository<ProductEntity>
    ) {
        super(repository);
    }
    isExpired(id: any): Boolean {
        throw new Error("Method not implemented.");
    }
    doSomething() {
        throw new Error("Method not implemented.");
    }

    async welocome():Promise<void>{
        console.log('welcome');
    }
    
}