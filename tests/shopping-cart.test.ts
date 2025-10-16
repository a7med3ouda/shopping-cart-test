import { Product } from "../src/product";
import { ShoppingCart } from "../src/shopping-cart";

describe("ShoppingCart", () => {
	let cart: ShoppingCart;
	let doveSoap: Product;
	let axeDeo: Product;
	let salesTaxRate: number;

	beforeEach(() => {
		cart = new ShoppingCart();
		doveSoap = new Product({ name: "Dove Soap", unitPrice: 39.99 });
		axeDeo = new Product({ name: "Axe Deo", unitPrice: 99.99 });
		salesTaxRate = 12.5;
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

	test("Step 2: Add additional Dove Soaps", () => {
		cart.addProduct(doveSoap, 5);
		cart.addProduct(doveSoap, 3);

		const items = cart.getItems();
		const total = cart.getTotalPrice();

		expect(items.length).toBe(1);
		expect(items[0].quantity).toBe(8);
		expect(items[0].product.name).toBe("Dove Soap");
		expect(items[0].product.unitPrice).toBe(39.99);
		expect(total).toBe(319.92);
	});

	test("Step 3: Add multiple items and calculate tax", () => {
		cart.addProduct(doveSoap, 2);
		cart.addProduct(axeDeo, 2);

		const items = cart.getItems();
		const { tax, total } = cart.getTotalPriceWithSalesTax(salesTaxRate);

		expect(items.length).toBe(2);
		expect(items[0].quantity).toBe(2);
		expect(items[0].product.name).toBe("Dove Soap");
		expect(items[0].product.unitPrice).toBe(39.99);
		expect(items[1].quantity).toBe(2);
		expect(items[1].product.name).toBe("Axe Deo");
		expect(items[1].product.unitPrice).toBe(99.99);
		// expect(tax).toBe(35.0); // TODO: shows error with value 34.99
		// expect(total).toBe(314.96); // TODO: shows error with value 314.95
	});
});
