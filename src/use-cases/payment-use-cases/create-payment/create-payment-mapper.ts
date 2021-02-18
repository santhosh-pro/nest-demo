import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { CreatePaymentRequest } from "./create-payment-request";
@Injectable()
export class CreatePaymentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {

      mapper.createMap(CreatePaymentRequest, Payment)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}