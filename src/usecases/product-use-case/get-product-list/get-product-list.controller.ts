import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import {Controller, Get, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PagedModel } from "src/common/paged-model";
import { PagedResponse } from "src/common/paged-response";
import { IProductService } from "src/infra/database/product/i.product.service";
import { GetProductListRequest } from "./get-product-list-request";
import { GetProductListResponse } from "./get-product-list-response";

@ApiTags('products')
@Controller('products')
export class GetProductListController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
        //private readonly mapper:GetProductListMapper
    ) { }

    @Get()
    async execute(@Query() request: GetProductListRequest): Promise<Partial<GetProductListResponse>> {
       
        const queryBuilder = this.productService.createQueryBuilder('product');

        const result = await this.productService.paged(queryBuilder,
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );
        const response = this.mapper.map(result,GetProductListResponse,PagedResponse);
        return response;
    }
}