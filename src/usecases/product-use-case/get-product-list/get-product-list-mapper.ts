import { AutoMap } from "@automapper/classes";
import { mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { PagedResponse } from "src/common/paged-response";
import { ProductEntity } from "src/infra/database/product/product.entity";
import { GetProductBase } from "../get-product-base";
import { GetProductListResponse } from "./get-product-list-response";

@Injectable()
export class GetProductListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(ProductEntity, GetProductBase)
      .forMember(
        (destination) => destination.name,
        mapFrom((source) => source.name  + ' Wrks')
      );

      mapper.createMap(ProductPagedModel, GetProductListResponse);
    };
  }
}


export class ProductPagedModel extends PagedResponse {
  @AutoMap(()=>ProductEntity)
  items:ProductEntity[]
}