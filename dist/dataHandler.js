var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const [inventoryData, configData] = yield Promise.all([
                fetch('./public/data/inventory.json').then(res => res.json()),
                fetch('./public/data/siteConfig.json').then(res => res.json())
            ]);
            this.inventory = inventoryData;
            this.siteConfig = configData;
        });
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
