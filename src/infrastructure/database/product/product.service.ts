import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { Repository } from "typeorm";
import { IProductService } from "./i.product.service";
import { ProductPagedModel } from "./product-paged-model";
import { ProductEntity } from "./product.entity";

export class ProductService extends BaseService<Repository<ProductEntity>, ProductEntity> implements IProductService {
    constructor(
        @InjectRepository(ProductEntity) protected readonly repository: Repository<ProductEntity>
    ) {
        super(repository);
    }

    public async getProducts(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<ProductPagedModel> {

        const queryBuilder = this.createQueryBuilder('p');

        const result = await this.paged(queryBuilder,
            pageNumber,
            pageSize,
            orderBy,
            orderByPropertyName
        );
        return result;
    }

}