import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { Repository } from "typeorm";
import { ICustomerService } from "./i.customer.service";
import { CustomerPagedModel } from "./customer-paged-model";
import { Customer } from "./customer.entity";

export class CustomerService extends BaseService<Repository<Customer>, Customer> implements ICustomerService {
    constructor(
        @InjectRepository(Customer) protected readonly repository: Repository<Customer>
    ) {
        super(repository);
    }

    public async getCustomerList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<CustomerPagedModel> {

        const queryBuilder = this.createQueryBuilder('p');

        const result = await this.paged(queryBuilder,
            pageNumber,
            pageSize,
            orderBy,
            orderByPropertyName
        );
        return result;
    }

}