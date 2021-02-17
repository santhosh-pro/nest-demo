import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { ProductEntity } from "src/infra/database/product/product.entity";
import { CreateProductMapper } from "./create-product-mapper";
import { CreateProductRequest } from "./create-product-request";

@ApiTags('products')
@Controller('products')
export class CreateProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    async execute(@Body() request: CreateProductRequest): Promise<void> {
        const product = this.mapper.map(request, ProductEntity, CreateProductRequest);
        await this.productService.create(product);

        // return null;
    }
}