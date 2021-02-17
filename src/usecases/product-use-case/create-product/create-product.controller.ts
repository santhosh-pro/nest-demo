import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { ProductEntity } from "src/infra/database/product/product.entity";
import { CreateProductRequest } from "./create-product-request";

@ApiTags('products')
@Controller('products')
export class CreateProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    @HttpCode(201)
    async execute(@Body() request: CreateProductRequest): Promise<void> {
        const product = this.mapper.map(request, ProductEntity, CreateProductRequest);
        await this.productService.insert(product);
    }
}