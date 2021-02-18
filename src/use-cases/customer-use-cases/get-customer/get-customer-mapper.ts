import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Customer } from "src/infrastructure/database/customer/customer.entity";
import { GetCustomerResponse } from "./get-customer-response";

@Injectable()
export class GetCustomerMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Customer,GetCustomerResponse );

    };
  }
}