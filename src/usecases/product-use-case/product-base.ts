import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class ProductBase {
    @ApiProperty()
    @AutoMap()
    name:string;
    @ApiProperty()
    @AutoMap()
    price:number;
    // @ApiProperty()
    // @AutoMap()
    // description:string;
}