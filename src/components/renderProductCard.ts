import { InventoryItem } from "../utils/dataHandler.js";

/**
 * Creates a product card element.
 * Displays the product image, name, price, and (optionally) an add-to-cart section.
 *
 * @param {InventoryItem} item - The product data to display in the card.
 * @returns A <div> element representing a product card.
 */
export function renderProductCard(item: InventoryItem): HTMLElement {
    const cardContainer = document.createElement('div');
    cardContainer.className = "card-container";

    // Image
    const cardImage = document.createElement('img');
    cardImage.src = `./public/images/${item.imgPath}`; // Adjust path based on setup
    cardImage.alt = item.name;

    // Card wrapper
    const cardWrapper = document.createElement('div');
    cardWrapper.className = "card-wrapper";

    // Product details section
    const productDetails = document.createElement('div');
    productDetails.className = "card-details";

    const productName = document.createElement('span');
    productName.className = "product-name";
    productName.textContent = item.name;

    const productPrice = document.createElement('span');
    productPrice.className = "product-price";
    productPrice.textContent = item.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    // Add-to-cart placeholder (functionality to be implemented later)
    const addCart = document.createElement('div');
    addCart.className = "add-to-cart";
    addCart.textContent = 'Add to Cart';

    // Append details
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);

    // Append to wrapper
    cardWrapper.appendChild(productDetails);
    // cardWrapper.appendChild(addCart); // Uncomment when functional

    // Append to container
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardWrapper);

    return cardContainer;
}