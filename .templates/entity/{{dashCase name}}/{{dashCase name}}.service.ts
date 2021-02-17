import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { Repository } from "typeorm";
import { I{{pascalCase name}}Service } from "./i.{{dashCase name}}.service";
import { {{pascalCase name}}PagedModel } from "./{{dashCase name}}-paged-model";
import { {{pascalCase name}} } from "./{{dashCase name}}.entity";

export class {{pascalCase name}}Service extends BaseService<Repository<{{pascalCase name}}>, {{pascalCase name}}> implements I{{pascalCase name}}Service {
    constructor(
        @InjectRepository({{pascalCase name}}) protected readonly repository: Repository<{{pascalCase name}}>
    ) {
        super(repository);
    }

    public async get{{pascalCase name}}List(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<{{pascalCase name}}PagedModel> {

        const queryBuilder = this.createQueryBuilder('p');

        const result = await this.paged(queryBuilder,
            pageNumber,
            pageSize,
            orderBy,
            orderByPropertyName
        );
        return result;
    }

}