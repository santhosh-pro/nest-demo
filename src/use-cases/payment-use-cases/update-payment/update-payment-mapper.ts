import { ignore, mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { UpdatePaymentRequest } from "./update-payment-request";

@Injectable()
export class UpdatePaymentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(UpdatePaymentRequest, Payment)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}