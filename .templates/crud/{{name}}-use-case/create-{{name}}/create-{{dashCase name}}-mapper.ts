import { {{pascalCase name}}Entity } from "src/infra/database/{{dashCase name}}/{{dashCase name}}.entity";
import { Create{{pascalCase name}}Request } from "./create-{{dashCase name}}-request";
import { Create{{pascalCase name}}Response } from "./create-{{dashCase name}}-response";

export class Create{{pascalCase name}}Mapper {

    request(data:Create{{pascalCase name}}Request):{{pascalCase name}}Entity {
        const {{camelCase name}} =new {{pascalCase name}}Entity();
      
        return {{camelCase name}};
    }

    response(data:{{pascalCase name}}Entity):Create{{pascalCase name}}Response {
        return null;
    }
}