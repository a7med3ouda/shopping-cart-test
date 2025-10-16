import { CartItem } from "./cart-item";
import { Product } from "./product";

export class ShoppingCart {
	private items: CartItem[] = [];

	getItems(): Readonly<CartItem[]> {
		return [...this.items];
	}

	addProduct(product: Product, quantity: number): void {
		if (!product.name) throw new Error("Product name is required");
		if (product.unitPrice <= 0) throw new Error("Product price must be greater than 0");
		if (quantity <= 0) throw new Error("Quantity must be greater than 0");

		const existingItem = this.items.find((item) => item.product.name === product.name);
		if (existingItem) {
			existingItem.quantity += quantity;
		} else {
			this.items.push(new CartItem({ product, quantity }));
		}
	}

	getTotalPrice(): number {
		const total = this.items.reduce((sum, item) => sum + item.product.unitPrice * item.quantity, 0);
		return Math.round(total * 100) / 100;
	}
}
