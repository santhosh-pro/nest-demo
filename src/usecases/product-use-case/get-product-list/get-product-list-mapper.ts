import { request } from "express";
import { PagedResponse } from "src/common/paged-response";
import { GetProductBase } from "../get-product-base";
import { GetProductListResponse } from "./get-product-list-response";

export class GetProductListMapper {

    response (data:PagedResponse<GetProductBase>):Partial<GetProductListResponse> {
        let items: GetProductBase[] = [];
        data.items.forEach((item: any,index:number) => {
          items.push({
            id: item.id,
            name: item.name,
            price:item.price,
            description:item.description
          })
        });
    
    
        let response: Partial<GetProductListResponse> = {
          items: items,
          pageNumber:data.pageNumber,
          pageSize:data.pageSize,
          pageCount:data.pageCount,
          itemCount:data.itemCount
        }
        return response;
      }
}