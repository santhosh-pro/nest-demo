import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpException, HttpStatus, Inject, Param, Put, Query } from "@nestjs/common";
import { ApiProperty, ApiQuery, ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";
import { ProductEntity } from "src/infra/database/product/product.entity";
import { UpdateProductRequest } from "./update-product-request";

@ApiTags('products')
@Controller('products')
export class UpdateProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Put()
    @ApiQuery({ name: 'id'})
    async execute(@Query('id') id: string, @Body() request: UpdateProductRequest): Promise<void> {
        const product = this.mapper.map(request, ProductEntity, UpdateProductRequest);
        product.id=id;
        await this.productService.updateById(id, product);
    }
}