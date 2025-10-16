import { Product } from "../src/product";
import { ShoppingCart } from "../src/shopping-cart";

describe("ShoppingCart", () => {
	let cart: ShoppingCart;
	let doveSoap: Product;

	beforeEach(() => {
		cart = new ShoppingCart();
		doveSoap = new Product({ name: "Dove Soap", unitPrice: 39.99 });
	});

	test("Step 1: Add 5 Dove Soaps", () => {
		cart.addProduct(doveSoap, 5);

		const items = cart.getItems();
		const total = cart.getTotalPrice();

		expect(items.length).toBe(1);
		expect(items[0].quantity).toBe(5);
		expect(items[0].product.name).toBe("Dove Soap");
		expect(items[0].product.unitPrice).toBe(39.99);
		expect(total).toBe(199.95);
	});
});
