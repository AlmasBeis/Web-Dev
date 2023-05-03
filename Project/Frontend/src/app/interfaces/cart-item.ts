import {Product} from "./product";
import {User} from "./user";

export interface CartItem {
    id: number,
    quantity: number,
    product: Product ,
    created_at: string,
    user:User,
}
