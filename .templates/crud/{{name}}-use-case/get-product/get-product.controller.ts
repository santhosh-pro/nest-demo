import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { ProductEntity } from "src/infra/database/product/product.entity";
import { GetProductResponse } from "./get-product-response";

@ApiTags('products')
@Controller('products')
export class GetProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get(':id')
    async execute(@Param('id') id: string): Promise<GetProductResponse> {
        const product = await this.productService.findById(id);
        if(!product)
            throw new HttpException('Product Not Found',HttpStatus.BAD_REQUEST);
            
        const result = this.mapper.map(product, GetProductResponse,ProductEntity );
        return result;
    }
}