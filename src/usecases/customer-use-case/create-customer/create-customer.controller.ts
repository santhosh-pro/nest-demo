import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ICustomerService } from "src/infra/database/customer/i.customer.service";
import { Customer } from "src/infra/database/customer/customer.entity";
import { CreateCustomerRequest } from "./create-customer-request";

@ApiTags('customers')
@Controller('customers')
export class CreateCustomerController {
    constructor(
        @Inject('ICustomerService') private readonly customerService: ICustomerService,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    @HttpCode(201)
    async execute(@Body() request: CreateCustomerRequest): Promise<any> {

        const customer = this.mapper.map(request, Customer, CreateCustomerRequest);
        const result = await this.customerService.insert(customer);
        return {id:result.id};
    }
}