import { CartItem } from "./cart-item";
import { roundNumber } from "./helpers";
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
		return roundNumber(total);
	}

	getTotalSalesTax(subtotal: number, taxRate: number): number {
		if (subtotal < 0) throw new Error("Subtotal must be >= 0");
		if (taxRate < 0 || taxRate >= 100) throw new Error("Tax rate must be >= 0 and < 100");

		return roundNumber((subtotal * taxRate) / 100);
	}

	getTotalPriceWithSalesTax(taxRate: number) {
		const subtotal = this.getTotalPrice();
		const tax = this.getTotalSalesTax(subtotal, taxRate);
		const total = roundNumber(subtotal + tax);
		return { subtotal, tax, total };
	}
}
