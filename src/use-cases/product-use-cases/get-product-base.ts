import { AutoMap } from "@automapper/classes";
import { ProductBase } from "./product-base";

export class GetProductBase extends ProductBase {
    @AutoMap()
    id:string;
}