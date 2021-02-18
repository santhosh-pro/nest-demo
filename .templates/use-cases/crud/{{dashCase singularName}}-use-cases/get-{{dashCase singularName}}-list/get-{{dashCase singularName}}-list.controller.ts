import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Controller, Get, HttpCode, Inject, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase singularName}}Service } from "src/infrastructure/database/{{dashCase singularName}}/i.{{dashCase singularName}}.service";
import { {{pascalCase singularName}}PagedModel } from "src/infrastructure/database/{{dashCase singularName}}/{{dashCase singularName}}-paged-model";
import { Get{{pascalCase singularName}}ListRequest } from "./get-{{dashCase singularName}}-list-request";
import { Get{{pascalCase singularName}}ListResponse } from "./get-{{dashCase singularName}}-list-response";

@ApiTags('{{camelCase pluralName}}')
@Controller('{{camelCase pluralName}}')
export class Get{{pascalCase singularName}}ListController {
    constructor(
        @Inject('I{{pascalCase singularName}}Service') private readonly {{camelCase singularName}}Service: I{{pascalCase singularName}}Service,
        @InjectMapper() private mapper: Mapper
    ) { }

    @Get()
    @HttpCode(200)
    async execute(@Query() request: Get{{pascalCase singularName}}ListRequest): Promise<Partial<Get{{pascalCase singularName}}ListResponse>> {

        const result = await this.{{camelCase singularName}}Service.get{{pascalCase singularName}}List(
            request.pageNumber,
            request.pageSize,
            request.orderBy,
            request.orderByPropertyName
        );

        const response = this.mapper.map(result, Get{{pascalCase singularName}}ListResponse, {{pascalCase singularName}}PagedModel);
        return response;
    }
}