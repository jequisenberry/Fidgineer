import { buildProductByCategoryData, CategoryData } from "../../utils/buildProductByCategoryData.js";
import { renderCategoryData, renderCategoryProducts } from "./renderProductsByCategoryFucntions.js";

export function renderProductsByCategory():HTMLElement {

    const container:HTMLElement = document.createElement('div');

    const categoryData:CategoryData[] = buildProductByCategoryData();
    categoryData.forEach(category => {

        const section:HTMLElement = document.createElement('section');

        // Category Info Cart
        const categoryCard:HTMLElement = renderCategoryData(category)

        // Add sort fuctionality here
        //

        // Display Products by category 
        const categoryProducts:HTMLElement = renderCategoryProducts(category);

        // Append to section
        section.append(categoryCard, categoryProducts);

        // Append to contaier
        container.appendChild(section)
    });

    return container 
}