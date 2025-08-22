import { renderProductCard } from "../renderProductCard.js";
export function renderCategoryData(categoryData) {
    const card = document.createElement('div');
    // Product Category Name
    const productName = document.createElement('h2');
    productName.textContent = categoryData.name;
    // Product Category Description
    const productDes = document.createElement('p');
    productDes.textContent = categoryData.description;
    // Divider
    const divider = document.createElement('div');
    // Append to card
    card.append(productName, productDes, divider);
    return card;
}
export function renderCategoryProducts(categoryData) {
    const cardContainer = document.createElement('div');
    categoryData.products.forEach(item => {
        const productCard = renderProductCard(item);
        cardContainer.appendChild(productCard);
    });
    return cardContainer;
}
