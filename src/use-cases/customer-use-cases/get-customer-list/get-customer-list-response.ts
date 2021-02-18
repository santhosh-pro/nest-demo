import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "src/common/paged-response";
import { SortingDirection } from "src/common/sorting-direction";
import { GetCustomerBase } from "../get-customer-base";

export class GetCustomerListResponse extends PagedResponse {
        
    @AutoMap(() => GetCustomerBase)
    items:GetCustomerBase[]
}