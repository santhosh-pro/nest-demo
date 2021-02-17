import { AutoMap } from "@automapper/classes";
import { {{pascalCase singularName}}Base } from "./{{dashCase singularName}}-base";

export class Get{{pascalCase singularName}}Base extends {{pascalCase singularName}}Base {
    @AutoMap()
    id:string;
}