import { InventoryItem, SiteConfig } from "./components/types.js";

export class DataHandler {

    private static  instance    :DataHandler;
    private         inventory   :InventoryItem[]    = [];
    private         siteConfig  :SiteConfig         = {} as SiteConfig;

    private constructor() {}

    public static getInstance(): DataHandler {
        if (!DataHandler.instance) {
            DataHandler.instance = new DataHandler();
        }
        return DataHandler.instance;
    }

    public async load(): Promise<void> {

        const [inventoryData, configData] = await Promise.all(
            [
                fetch('./public/data/inventory.json').then(res => res.json()),
                fetch('./public/data/siteConfig.json').then(res => res.json())
            ]
        );

        this.inventory  = inventoryData;
        this.siteConfig = configData;
    }

    public getInventory(): InventoryItem[] {
        if (this.inventory.length === 0) {
            console.warn("DataHandler: Inventory is empty. Please load data first.");
        }
        return this.inventory;
    }

    public getSiteConfig(): SiteConfig {
        return this.siteConfig;
    }

};