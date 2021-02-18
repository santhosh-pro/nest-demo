import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ICustomerService } from "src/infrastructure/database/customer/i.customer.service";
import { CustomerPagedModel } from "src/infrastructure/database/customer/customer-paged-model";
import { GetCustomerListRequest } from "./get-customer-list-request";
import { GetCustomerListResponse } from "./get-customer-list-response";

@ApiTags('customers')
@Controller('customers')
export class GetCustomerListController {
    constructor(
        @Inject('ICustomerService') private readonly customerService: ICustomerService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get()
    @HttpCode(200)
    async execute(@Query() request: GetCustomerListRequest): Promise<Partial<GetCustomerListResponse>> {

        const result = await this.customerService.getCustomerList(
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );

        const response = this.mapper.map(result, GetCustomerListResponse, CustomerPagedModel);
        return response;
    }
}