import { IBaseService } from "src/common/i.base.service";
import { SortingDirection } from "src/common/sorting-direction";
import { {{pascalCase name}}PagedModel } from "./{{dashCase name}}-paged-model";
import { {{pascalCase name}} } from "./{{dashCase name}}.entity";

export interface I{{pascalCase name}}Service extends IBaseService<{{pascalCase name}}> {
    get{{pascalCase name}}List(
        pageNumber: number,
        pageSize: number,
        orderBy: SortingDirection,
        orderByPropertyName: string
    ): Promise<{{pascalCase name}}PagedModel>
}