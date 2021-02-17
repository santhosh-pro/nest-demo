import { AutoMap } from "@automapper/classes";
import { PagedResponse } from "src/common/paged-response";
import { Customer } from "./customer.entity";

export class CustomerPagedModel extends PagedResponse {
    @AutoMap(()=>Customer)
    items:Customer[];
}