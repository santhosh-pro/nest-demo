import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import {Controller, Get, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { ProductPagedModel } from "./get-product-list-mapper";
import { GetProductListRequest } from "./get-product-list-request";
import { GetProductListResponse } from "./get-product-list-response";

@ApiTags('products')
@Controller('products')
export class GetProductListController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
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
        const response = this.mapper.map(result,GetProductListResponse,ProductPagedModel);
        return response;
    }
}