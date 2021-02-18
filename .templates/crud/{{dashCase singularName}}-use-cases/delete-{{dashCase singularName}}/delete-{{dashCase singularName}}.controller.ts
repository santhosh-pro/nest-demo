import { Controller, Delete, HttpCode, HttpException, HttpStatus, Inject, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { I{{pascalCase singularName}}Service } from "src/infrastructure/database/{{dashCase singularName}}/i.{{dashCase singularName}}.service";

@ApiTags('{{camelCase pluralName}}')
@Controller('{{camelCase pluralName}}')
export class Delete{{pascalCase singularName}}Controller {
    constructor(
        @Inject('I{{pascalCase singularName}}Service') private readonly {{camelCase singularName}}Service: I{{pascalCase singularName}}Service,
    ) { }

    @Delete(':id')
    @HttpCode(204)
    async execute(@Param('id') id: string): Promise<void> {
        const isExists = await this.{{camelCase singularName}}Service.isExistsById(id);
        if (!isExists)
            throw new HttpException('{{pascalCase singularName}} Not Found', HttpStatus.BAD_REQUEST);

        await this.{{camelCase singularName}}Service.deleteById(id);
    }
}