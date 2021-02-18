import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "src/common/paged-response";
import { SortingDirection } from "src/common/sorting-direction";
import { GetProductBase } from "../get-product-base";

export class GetProductListResponse extends PagedResponse {
        
    @AutoMap(() => GetProductBase)
    items:GetProductBase[]
}