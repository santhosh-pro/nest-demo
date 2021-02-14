import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "src/common/paged-response";
import { SortingDirection } from "src/common/sorting-direction";
import { GetProductBase } from "../get-product-base";

export class GetProductListResponse extends PagedResponse {
    @ApiProperty()
    @AutoMap()
    readonly pageNumber: number;

    @ApiProperty()
    @AutoMap()
    readonly pageSize: number;

    @ApiProperty()
    @AutoMap()
    readonly itemCount: number;

    @ApiProperty()
    @AutoMap()
    readonly pageCount: number;

    @ApiProperty()
    @AutoMap()
    readonly orderBy: string | SortingDirection;
    
    @AutoMap(() => GetProductBase)
    items:GetProductBase[]
}