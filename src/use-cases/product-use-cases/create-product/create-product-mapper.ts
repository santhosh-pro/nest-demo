import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { Product } from "src/infrastructure/database/product/product.entity";
import { CreateProductRequest } from "./create-product-request";
@Injectable()
export class CreateProductMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {

      mapper.createMap(CreateProductRequest, Product)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}