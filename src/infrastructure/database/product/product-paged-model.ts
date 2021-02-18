import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "src/common/paged-response";
import { Product } from "./product.entity";

export class ProductPagedModel extends PagedResponse {
    @AutoMap(()=>Product)
    items:Product[];
}