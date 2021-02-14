import { WhoColumnEntity } from "src/common/who-column.entity";
import { Column, Entity } from "typeorm";

@Entity({name:'product'})
export class ProductEntity extends WhoColumnEntity{
    @Column()
    name:string;
    @Column()
    price:number;
    @Column()
    description:string;
}