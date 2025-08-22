import { CategoryData } from "../../utils/buildProductByCategoryData.js";
import { renderProductCard } from "../renderProductCard.js";


export function renderCategoryData(categoryData: CategoryData):HTMLElement {
    
    const card:HTMLElement = document.createElement('div');

    // Product Category Name
    const productName:HTMLHeadingElement = document.createElement('h2');
    productName.textContent = categoryData.name

    // Product Category Description
    const productDes:HTMLParagraphElement = document.createElement('p');
    productDes.textContent = categoryData.description

    // Divider
    const divider:HTMLElement = document.createElement('div');

    // Append to card
    card.append(productName, productDes, divider);

    return card;
}

export function renderCategoryProducts(categoryData:CategoryData):HTMLElement {
    
    const cardContainer:HTMLElement = document.createElement('div');

        categoryData.products.forEach(item => {
            const productCard = renderProductCard(item);

            cardContainer.appendChild(productCard);
        })
    
    return cardContainer;
}
