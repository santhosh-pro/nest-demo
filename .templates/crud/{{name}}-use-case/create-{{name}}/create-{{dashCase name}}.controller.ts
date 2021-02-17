import { Body, Controller, HttpException, HttpStatus, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase name}}Service } from "src/infra/database/{{dashCase name}}/i.{{dashCase name}}.service";
import { Create{{pascalCase name}}Mapper } from "./create-{{dashCase name}}-mapper";
import { Create{{pascalCase name}}Request } from "./create-{{dashCase name}}-request";
import { Create{{pascalCase name}}Response } from "./create-{{dashCase name}}-response";

@ApiTags('{{camelCase pname}}')
@Controller('{{camelCase pname}}')
export class Create{{pascalCase name}}Controller {
    constructor(
        @Inject('I{{pascalCase name}}Service') private readonly {{camelCase name}}Service: I{{pascalCase name}}Service,
        private readonly mapper:Create{{pascalCase name}}Mapper
    ) { }

    @Post()
    async execute(@Body() request: Create{{pascalCase name}}Request): Promise<void> {
        const {{camelCase name}} =this.mapper.request(request);
            await this.{{camelCase name}}Service.create({{camelCase name}});
        
        // return null;
    }
}