import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { Create{{pascalCase singularName}}Mapper } from './create-{{dashCase singularName}}/create-{{dashCase singularName}}-mapper';
import { Create{{pascalCase singularName}}Controller } from './create-{{dashCase singularName}}/create-{{dashCase singularName}}.controller';
import { Delete{{pascalCase singularName}}Controller } from './delete-{{dashCase singularName}}/delete-{{dashCase singularName}}.controller';
import { Get{{pascalCase singularName}}ListMapper } from './get-{{dashCase singularName}}-list/get-{{dashCase singularName}}-list-mapper';
import { Get{{pascalCase singularName}}ListController } from './get-{{dashCase singularName}}-list/get-{{dashCase singularName}}-list.controller';
import { Get{{pascalCase singularName}}Mapper } from './get-{{dashCase singularName}}/get-{{dashCase singularName}}-mapper';
import { Get{{pascalCase singularName}}Controller } from './get-{{dashCase singularName}}/get-{{dashCase singularName}}.controller';
import { Update{{pascalCase singularName}}Mapper } from './update-{{dashCase singularName}}/update-{{dashCase singularName}}-mapper';
import { Update{{pascalCase singularName}}Controller } from './update-{{dashCase singularName}}/update-{{dashCase singularName}}.controller';

@Module({
    imports: [
        CommonModule,
        DatabaseModule
    ],
    controllers: [
        Create{{pascalCase singularName}}Controller,
        Update{{pascalCase singularName}}Controller,
        Delete{{pascalCase singularName}}Controller,
        Get{{pascalCase singularName}}Controller,
        Get{{pascalCase singularName}}ListController
    ],
    providers: [
        Create{{pascalCase singularName}}Mapper,
        Get{{pascalCase singularName}}ListMapper,
        Get{{pascalCase singularName}}Mapper,
        Update{{pascalCase singularName}}Mapper
    ],
})
export class {{pascalCase singularName}}UseCasesModule {}
