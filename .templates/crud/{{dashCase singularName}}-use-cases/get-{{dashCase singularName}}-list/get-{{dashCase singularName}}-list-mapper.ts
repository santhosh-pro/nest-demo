import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { {{pascalCase singularName}}PagedModel } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}-paged-model";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Get{{pascalCase singularName}}Base } from "../get-{{dashCase singularName}}-base";
import { Get{{pascalCase singularName}}ListResponse } from "./get-{{dashCase singularName}}-list-response";

@Injectable()
export class Get{{pascalCase singularName}}ListMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap({{pascalCase singularName}}, Get{{pascalCase singularName}}Base);

      mapper.createMap({{pascalCase singularName}}PagedModel, Get{{pascalCase singularName}}ListResponse);
    };
  }
}


