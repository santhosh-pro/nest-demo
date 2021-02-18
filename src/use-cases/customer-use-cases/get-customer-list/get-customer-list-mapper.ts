import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { CustomerPagedModel } from "src/infrastructure/database/customer/customer-paged-model";
import { Customer } from "src/infrastructure/database/customer/customer.entity";
import { GetCustomerBase } from "../get-customer-base";
import { GetCustomerListResponse } from "./get-customer-list-response";

@Injectable()
export class GetCustomerListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Customer, GetCustomerBase);

      mapper.createMap(CustomerPagedModel, GetCustomerListResponse);
    };
  }
}


