import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { GetPaymentResponse } from "./get-payment-response";

@Injectable()
export class GetPaymentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Payment,GetPaymentResponse );

    };
  }
}