import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { PaymentPagedModel } from "src/infrastructure/database/payment/payment-paged-model";
import { Payment } from "src/infrastructure/database/payment/payment.entity";
import { GetPaymentBase } from "../get-payment-base";
import { GetPaymentListResponse } from "./get-payment-list-response";

@Injectable()
export class GetPaymentListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Payment, GetPaymentBase);

      mapper.createMap(PaymentPagedModel, GetPaymentListResponse);
    };
  }
}


