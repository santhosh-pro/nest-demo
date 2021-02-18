import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infrastructure/database/product/i.product.service";
import { ProductPagedModel } from "src/infrastructure/database/product/product-paged-model";
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
    @HttpCode(200)
    async execute(@Query() request: GetProductListRequest): Promise<Partial<GetProductListResponse>> {

        const result = await this.productService.getProducts(
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );

        const response = this.mapper.map(result, GetProductListResponse, ProductPagedModel);
        return response;
    }
}