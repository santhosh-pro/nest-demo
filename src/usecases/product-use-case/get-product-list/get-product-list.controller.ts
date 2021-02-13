import { Body, Controller, Get, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { GetProductListMapper } from "./get-product-list-mapper";
import { GetProductListRequest } from "./get-product-list-request";
import { GetProductListResponse } from "./get-product-list-response";

@ApiTags('products')
@Controller('products')
export class GetProductListController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        private readonly mapper:GetProductListMapper
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
        const response = this.mapper.response(result);
        return response;
    }
}