import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Customer } from "src/infra/database/customer/customer.entity";
import { CreateCustomerRequest } from "./create-customer-request";
@Injectable()
export class CreateCustomerMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {

      mapper.createMap(CreateCustomerRequest, Customer)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}