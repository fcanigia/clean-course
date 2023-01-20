type Size = ''|'S'|'M'|'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    )
    {}

    isProductReady(): Boolean {
        for (const key in this){
            switch (typeof this[key]) 
            {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`)
                    break;
                case 'number':
                    if ((<number>this[key]) <= 0) throw Error(`${key} is zero`)
                    break;
                default:
                    break;
            }
        }

        return true;
    }

    toString() {
        // NO DRY
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('price is empty');
        // if (this.size.length <= 0) throw Error('size is empty');

        if (!this.isProductReady) return;

        return `${this.name} (${this.price}), ${this.size} `
    }
}

(() => {
    const bluePants = new Product('Blue Long Pants', 1, 'M');

    console.log(bluePants.toString());


})();