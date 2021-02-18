import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase singularName}}Service } from "src/infrastructure/database/{{dashCase singularName}}/i.{{dashCase singularName}}.service";
import { {{pascalCase singularName}} } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}.entity";
import { Get{{pascalCase singularName}}Response } from "./get-{{dashCase singularName}}-response";

@ApiTags('{{camelCase pluralName}}')
@Controller('{{camelCase pluralName}}')
export class Get{{pascalCase singularName}}Controller {
    constructor(
        @Inject('I{{pascalCase singularName}}Service') private readonly {{camelCase singularName}}Service: I{{pascalCase singularName}}Service,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get(':id')
    @HttpCode(200)
    async execute(@Param('id') id: string): Promise<Get{{pascalCase singularName}}Response> {
        const {{camelCase singularName}} = await this.{{camelCase singularName}}Service.findById(id);
        if(!{{camelCase singularName}})
            throw new HttpException('{{pascalCase singularName}} Not Found',HttpStatus.BAD_REQUEST);
            
        const response = this.mapper.map({{camelCase singularName}}, Get{{pascalCase singularName}}Response,{{pascalCase singularName}} );
        return response;
    }
}