import { AutoMap } from "@automapper/classes";
import { AuditColumn } from "src/common/audit-column.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class {{pascalCase name}} extends AuditColumn{

    public setId(id:string) {
        this.id=id;
    }
}