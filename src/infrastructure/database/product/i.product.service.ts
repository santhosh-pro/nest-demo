import { IBaseService } from "src/common/i.base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { ProductPagedModel } from "./product-paged-model";
import { ProductEntity } from "./product.entity";

export interface IProductService extends IBaseService<ProductEntity> {
    getProducts(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<ProductPagedModel>
}