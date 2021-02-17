import { PagedResponse } from "src/common/paged-response";
import { Get{{pascalCase name}}Base } from "../get-{{dashCase name}}-base";
import { Get{{pascalCase name}}ListResponse } from "./get-{{dashCase name}}-list-response";

export class Get{{pascalCase name}}ListMapper {

    response (data:PagedResponse<Get{{pascalCase name}}Base>):Partial<Get{{pascalCase name}}ListResponse> {
        let items: Get{{pascalCase name}}Base[] = [];
        data.items.forEach((item: any,index:number) => {
          items.push({
            id: item.id,
           
          })
        });
    
    
        let response: Partial<Get{{pascalCase name}}ListResponse> = {
          items: items,
          pageNumber:data.pageNumber,
          pageSize:data.pageSize,
          pageCount:data.pageCount,
          itemCount:data.itemCount
        }
        return response;
      }
}