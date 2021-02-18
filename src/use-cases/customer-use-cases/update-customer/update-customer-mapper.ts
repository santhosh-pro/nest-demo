import { ignore, mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Customer } from "src/infrastructure/database/customer/customer.entity";
import { UpdateCustomerRequest } from "./update-customer-request";

@Injectable()
export class UpdateCustomerMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(UpdateCustomerRequest, Customer)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}