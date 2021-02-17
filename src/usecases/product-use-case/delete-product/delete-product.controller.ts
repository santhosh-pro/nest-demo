import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IProductService } from "src/infra/database/product/i.product.service";

@ApiTags('products')
@Controller('products')
export class DeleteProductController {
    constructor(
        @Inject('IProductService') private readonly productService: IProductService,
    ) { }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
        const isExists = await this.productService.isExistsById(id);
        if (!isExists)
            throw new HttpException('Product Not Found', HttpStatus.BAD_REQUEST);

        await this.productService.deleteById(id);
    }
}