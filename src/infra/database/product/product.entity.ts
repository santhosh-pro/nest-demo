import { AutoMap } from "@automapper/classes";
import { WhoColumnEntity } from "src/common/who-column.entity";
import { Column, Entity } from "typeorm";

@Entity({name:'product'})
export class ProductEntity extends WhoColumnEntity{
    @Column()
    @AutoMap()
    name:string;
    @Column()
    @AutoMap()
    price:number;
    @Column()
    @AutoMap()
    description:string;
}