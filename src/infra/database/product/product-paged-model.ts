import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "src/common/paged-response";
import { ProductEntity } from "./product.entity";

export class ProductPagedModel extends PagedResponse {
    @AutoMap(()=>ProductEntity)
    items:ProductEntity[];
}