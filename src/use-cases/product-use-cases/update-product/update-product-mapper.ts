import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { ProductEntity } from "src/infrastructure/database/product/product.entity";
import { UpdateProductRequest } from "./update-product-request";

@Injectable()
export class UpdateProductMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(UpdateProductRequest, ProductEntity)
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}