import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infrastructure/database/product/i.product.service";
import { ProductEntity } from "src/infrastructure/database/product/product.entity";
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
    async execute(@Body() request: CreateProductRequest): Promise<any> {

        const product = this.mapper.map(request, ProductEntity, CreateProductRequest);
        const result = await this.productService.insert(product);
        return {id:result.id};
    }
}