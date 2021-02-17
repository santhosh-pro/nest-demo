import { ProductEntity } from "src/infra/database/product/product.entity";
import { CreateProductRequest } from "./create-product-request";
import { CreateProductResponse } from "./create-product-response";

export class CreateProductMapper {

    request(data:CreateProductRequest):ProductEntity {
        const product =new ProductEntity();
        product.name=data.name;
        product.price=data.price;
      //  product.description=data.description;
        return product;
    }

    response(data:ProductEntity):CreateProductResponse {
        return null;
    }
}