export interface IProduct {
	name: string;
	unitPrice: number;
}

// TODO: add ID field if we need duplicate product names later - we deal with names as unique keys for now
export class Product implements IProduct {
	name: string;
	unitPrice: number;

	constructor(data: IProduct) {
		this.name = data.name;
		this.unitPrice = data.unitPrice;
	}
}
