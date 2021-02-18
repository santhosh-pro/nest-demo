import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, HttpCode, HttpException, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase singularName}}Service } from "src/infrastructure/database/{{dashCase singularName}}/i.{{dashCase singularName}}.service";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Update{{pascalCase singularName}}Request } from "./update-{{dashCase singularName}}-request";

@ApiTags('{{camelCase pluralName}}')
@Controller('{{camelCase pluralName}}')
export class Update{{pascalCase singularName}}Controller {
    constructor(
        @Inject('I{{pascalCase singularName}}Service') private readonly {{camelCase singularName}}Service: I{{pascalCase singularName}}Service,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Put(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string, @Body() request: Update{{pascalCase singularName}}Request): Promise<void> {
        const isExists = await this.{{camelCase singularName}}Service.isExistsById(id);
        if(!isExists)
            throw new HttpException('{{pascalCase singularName}} Not Found',HttpStatus.BAD_REQUEST);
            
        const {{camelCase singularName}} = this.mapper.map(request, {{pascalCase singularName}}, Update{{pascalCase singularName}}Request);
        {{camelCase singularName}}.setId(id);
        await this.{{camelCase singularName}}Service.updateById(id, {{camelCase singularName}});
    }
}