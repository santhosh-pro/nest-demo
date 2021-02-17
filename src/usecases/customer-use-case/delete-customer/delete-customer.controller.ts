import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ICustomerService } from "src/infra/database/customer/i.customer.service";

@ApiTags('customers')
@Controller('customers')
export class DeleteCustomerController {
    constructor(
        @Inject('ICustomerService') private readonly customerService: ICustomerService,
    ) { }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
        const isExists = await this.customerService.isExistsById(id);
        if (!isExists)
            throw new HttpException('Customer Not Found', HttpStatus.BAD_REQUEST);

        await this.customerService.deleteById(id);
    }
}