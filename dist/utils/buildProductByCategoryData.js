import { DataHandler } from "./dataHandler.js";
export function buildProductByCategoryData() {
    const dataHandler = DataHandler.getInstance();
    const inventory = dataHandler.getInventory();
    const siteConfig = dataHandler.getSiteConfig();
    const categoryData = siteConfig.productCategories.map(category => {
        const productList = inventory.filter(item => item.productType === category.id);
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            featuredIds: category.featuredIds,
            products: productList
        };
    });
    return categoryData;
}
