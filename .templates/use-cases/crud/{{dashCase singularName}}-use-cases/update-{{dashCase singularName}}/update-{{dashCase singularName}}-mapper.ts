import { ignore, mapFrom } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Update{{pascalCase singularName}}Request } from "./update-{{dashCase singularName}}-request";

@Injectable()
export class Update{{pascalCase singularName}}Mapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(Update{{pascalCase singularName}}Request, {{pascalCase singularName}})
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}