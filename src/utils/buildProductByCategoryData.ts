import {DataHandler, InventoryItem, ProductCategory } from "./dataHandler.js";

export interface CategoryData extends ProductCategory {
    products:InventoryItem[];
} 

export function buildProductByCategoryData(): CategoryData[] {
 
    const dataHandler   = DataHandler.getInstance();
    const inventory     = dataHandler.getInventory();
    const siteConfig    = dataHandler.getSiteConfig();

    const categoryData = siteConfig.productCategories.map(category => {
        
        const productList: InventoryItem[] = inventory.filter(
            item => item.productType === category.id
        );
    
        return {
            id: category.id,
            name: category.name,
            description: category.description,
            featuredIds:category.featuredIds,
            products:productList
        } as CategoryData

    });

    return categoryData;
}