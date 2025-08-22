import { DataHandler } from "./dataHandler.js";
function buildCategoryData() {
    // Get site configuration data
    const dataHandler = DataHandler.getInstance();
    const inventory = dataHandler.getInventory();
    const siteConfig = dataHandler.getSiteConfig();
    const categoryData = siteConfig.productCategories.map(category => {
        const productList = inventory.filter(item => item.productType === category.id);
        return Object.assign(Object.assign({}, category), { products: productList });
    });
    return categoryData;
}
