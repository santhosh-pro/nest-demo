import { ApiProperty } from "@nestjs/swagger";

export class ProductBase {
    @ApiProperty()
    name:string;
    @ApiProperty()
    price:number;
    @ApiProperty()
    description:string;
}