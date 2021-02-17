import { IBaseService } from "src/common/i.base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { CustomerPagedModel } from "./customer-paged-model";
import { Customer } from "./customer.entity";

export interface ICustomerService extends IBaseService<Customer> {
    getCustomerList(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<CustomerPagedModel>
}