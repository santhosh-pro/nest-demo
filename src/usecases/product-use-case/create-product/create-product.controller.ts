import { Body, Controller, HttpException, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { CreateProductMapper } from "./create-product-mapper";
import { CreateProductRequest } from "./create-product-request";
import { CreateProductResponse } from "./create-product-response";

@ApiTags('products')
@Controller('products')
export class CreateProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        private readonly mapper:CreateProductMapper
    ) { }

    @Post()
    async execute(@Body() request: CreateProductRequest): Promise<void> {
        const product =this.mapper.request(request);
            await this.productService.create(product);
        
        // return null;
    }
}