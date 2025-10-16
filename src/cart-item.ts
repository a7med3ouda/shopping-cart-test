import { Product } from "./product";

export interface ICartItem {
	product: Product;
	quantity: number;
}

export class CartItem implements ICartItem {
	product: Product;
	quantity: number;

	constructor(data: ICartItem) {
		this.product = data.product;
		this.quantity = data.quantity;
	}
}
