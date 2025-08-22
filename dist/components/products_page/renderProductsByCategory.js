import { buildProductByCategoryData } from "../../utils/buildProductByCategoryData.js";
import { renderCategoryData, renderCategoryProducts } from "./renderProductsByCategoryFucntions.js";
export function renderProductsByCategory() {
    const container = document.createElement('div');
    const categoryData = buildProductByCategoryData();
    categoryData.forEach(category => {
        const section = document.createElement('section');
        // Category Info Cart
        const categoryCard = renderCategoryData(category);
        // Add sort fuctionality here
        //
        // Display Products by category 
        const categoryProducts = renderCategoryProducts(category);
        // Append to section
        section.append(categoryCard, categoryProducts);
        // Append to contaier
        container.appendChild(section);
    });
    return container;
}
