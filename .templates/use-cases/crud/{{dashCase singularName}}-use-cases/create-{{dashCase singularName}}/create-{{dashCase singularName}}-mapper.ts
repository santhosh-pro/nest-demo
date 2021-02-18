import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Create{{pascalCase singularName}}Request } from "./create-{{dashCase singularName}}-request";
@Injectable()
export class Create{{pascalCase singularName}}Mapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {

      mapper.createMap(Create{{pascalCase singularName}}Request, {{pascalCase singularName}})
      .forMember(
        (destination) => destination.id,
        ignore()
      );

    };
  }
}