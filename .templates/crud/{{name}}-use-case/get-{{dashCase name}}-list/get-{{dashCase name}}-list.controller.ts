import { Body, Controller, Get, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase name}}Service } from "src/infra/database/{{dashCase name}}/i.{{dashCase name}}.service";
import { Get{{pascalCase name}}ListMapper } from "./get-{{dashCase name}}-list-mapper";
import { Get{{pascalCase name}}ListRequest } from "./get-{{dashCase name}}-list-request";
import { Get{{pascalCase name}}ListResponse } from "./get-{{dashCase name}}-list-response";

@ApiTags('{{camelCase pname}}')
@Controller('{{camelCase pname}}')
export class Get{{pascalCase name}}ListController {
    constructor(
        @Inject('I{{pascalCase name}}Service') private readonly {{camelCase name}}Service: I{{pascalCase name}}Service,
        private readonly mapper:Get{{pascalCase name}}ListMapper
    ) { }

    @Get()
    async execute(@Query() request: Get{{pascalCase name}}ListRequest): Promise<Partial<Get{{pascalCase name}}ListResponse>> {
       
        const result = this.{{camelCase name}}Service.getPagedItems(
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );

        const response = this.mapper.response(result);
        return response;
    }
}