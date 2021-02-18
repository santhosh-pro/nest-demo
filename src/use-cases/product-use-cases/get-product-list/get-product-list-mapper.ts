import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { ProductPagedModel } from "src/infrastructure/database/product/product-paged-model";
import { ProductEntity } from "src/infrastructure/database/product/product.entity";
import { GetProductBase } from "../get-product-base";
import { GetProductListResponse } from "./get-product-list-response";

@Injectable()
export class GetProductListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(ProductEntity, GetProductBase);

      mapper.createMap(ProductPagedModel, GetProductListResponse);
    };
  }
}


