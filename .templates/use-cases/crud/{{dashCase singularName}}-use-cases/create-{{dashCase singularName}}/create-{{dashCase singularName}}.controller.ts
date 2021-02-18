import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase singularName}}Service } from "src/infrastructure/database/{{dashCase singularName}}/i.{{dashCase singularName}}.service";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Create{{pascalCase singularName}}Request } from "./create-{{dashCase singularName}}-request";

@ApiTags('{{camelCase pluralName}}')
@Controller('{{camelCase pluralName}}')
export class Create{{pascalCase singularName}}Controller {
    constructor(
        @Inject('I{{pascalCase singularName}}Service') private readonly {{camelCase singularName}}Service: I{{pascalCase singularName}}Service,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Post()
    @HttpCode(201)
    async execute(@Body() request: Create{{pascalCase singularName}}Request): Promise<any> {

        const {{camelCase singularName}} = this.mapper.map(request, {{pascalCase singularName}}, Create{{pascalCase singularName}}Request);
        const result = await this.{{camelCase singularName}}Service.insert({{camelCase singularName}});
        return {id:result.id};
    }
}