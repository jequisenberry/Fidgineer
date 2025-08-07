import {InventoryItem } from "../../data/types.js";


/**
 * Creates a product card element.
 * Includes a placeholder name, price, and an add-to-cart section.
 *
 * @returns A <div> element representing a product card.
 */
export function renderProductCard(item: InventoryItem): HTMLElement {
    
    const cardContainer: HTMLElement = document.createElement('div');

    // Card Content
    const cardWrapper: HTMLElement = document.createElement('div');
    
    // Product details section: name and price
    const productDetails: HTMLElement = document.createElement('div');

    // Product Name
    const productName: HTMLSpanElement = document.createElement('span');
    productName.textContent = item.name;
    
    // Product Price
    const productPrice: HTMLSpanElement = document.createElement('span');
    productPrice.textContent = item.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    // Add-to-cart section (functionality to be added later)
    const addCart: HTMLElement = document.createElement('div');
    addCart.textContent = 'Add to Cart'; // Placeholder text for visual cue
    
    // Append to details
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    
    // Append to card wrappers
    cardWrapper.appendChild(productDetails)
    cardWrapper.appendChild(addCart);

    // Append to containers
    cardContainer.appendChild(cardWrapper);

    return cardContainer;
}
