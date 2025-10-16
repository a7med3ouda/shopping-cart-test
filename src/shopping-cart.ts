import { CartItem } from "./cart-item";
import { Product } from "./product";

export class ShoppingCart {
	private items: CartItem[] = [];

	getItems(): Readonly<CartItem[]> {
		return [...this.items];
	}

	addProduct(product: Product, quantity: number): void {
		const existingItem = this.items.find((item) => item.product.name === product.name);
		if (existingItem) {
			existingItem.quantity += quantity;
		} else {
			this.items.push(new CartItem({ product, quantity }));
		}
	}
}
