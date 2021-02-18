import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Get{{pascalCase singularName}}Response } from "./get-{{dashCase singularName}}-response";

@Injectable()
export class Get{{pascalCase singularName}}Mapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap({{pascalCase singularName}},Get{{pascalCase singularName}}Response );

    };
  }
}