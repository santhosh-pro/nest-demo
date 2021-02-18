import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";

export class PaymentBase {

    @ApiProperty()
    @AutoMap()
    amount:number;

    @ApiProperty()
    @AutoMap()
    description:string;
}