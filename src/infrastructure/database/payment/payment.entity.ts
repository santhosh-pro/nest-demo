import { AutoMap } from "@automapper/classes";
import { AuditColumn } from "src/common/audit-column.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Payment extends AuditColumn{

    @Column()
    @AutoMap()
    amount:number;

    @Column()
    @AutoMap()
    description:string;
    
    public setId(id:string) {
        this.id=id;
    }
}