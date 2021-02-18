import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { PagedResponse } from "src/common/paged-response";
import { SortingDirection } from "src/common/sorting-direction";
import { GetPaymentBase } from "../get-payment-base";

export class GetPaymentListResponse extends PagedResponse {
        
    @AutoMap(() => GetPaymentBase)
    items:GetPaymentBase[]
}