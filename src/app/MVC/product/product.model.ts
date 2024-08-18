export interface Product {
    id: number;
    name: string;
    price: number;
}

export class ProductModel implements Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}

    applyDiscount(discount: number): void {
        this.price -= this.price * (discount / 100);
    }
}
