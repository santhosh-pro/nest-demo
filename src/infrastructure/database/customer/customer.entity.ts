import { AutoMap } from "@automapper/classes";
import { AuditColumn } from "src/common/audit-column.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Customer extends AuditColumn{

    @Column()
    @AutoMap()
    name:string;

    public setId(id:string) {
        this.id=id;
    }
}