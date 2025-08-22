export var ProductType;
(function (ProductType) {
    ProductType["FidgetToy"] = "Fidget Toy";
    ProductType["Puzzle"] = "Puzzle";
    ProductType["Lighter"] = "Lighter";
})(ProductType || (ProductType = {}));
export class DataHandler {
    constructor() {
        this.inventory = [];
        this.siteConfig = {};
    }
    static getInstance() {
        if (!DataHandler.instance) {
            DataHandler.instance = new DataHandler();
        }
        return DataHandler.instance;
    }
    async load() {
        const [inventoryData, configData] = await Promise.all([
            fetch('./public/data/inventory.json').then(res => res.json()),
            fetch('./public/data/siteConfig.json').then(res => res.json())
        ]);
        this.inventory = inventoryData;
        this.siteConfig = configData;
    }
    getInventory() {
        if (this.inventory.length === 0) {
            console.warn("DataHandler: Inventory is empty. Please load data first.");
        }
        return this.inventory;
    }
    getSiteConfig() {
        return this.siteConfig;
    }
}
;
