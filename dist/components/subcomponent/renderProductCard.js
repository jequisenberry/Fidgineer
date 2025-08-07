/**
 * Creates a product card element.
 * Includes a placeholder name, price, and an add-to-cart section.
 *
 * @returns A <div> element representing a product card.
 */
export function renderProductCard(item) {
    const cardContainer = document.createElement('div');
    // Card Content
    const cardWrapper = document.createElement('div');
    // Product details section: name and price
    const productDetails = document.createElement('div');
    // Product Name
    const productName = document.createElement('span');
    productName.textContent = item.name;
    // Product Price
    const productPrice = document.createElement('span');
    productPrice.textContent = item.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    // Add-to-cart section (functionality to be added later)
    const addCart = document.createElement('div');
    addCart.textContent = 'Add to Cart'; // Placeholder text for visual cue
    // Append to details
    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);
    // Append to card wrappers
    cardWrapper.appendChild(productDetails);
    cardWrapper.appendChild(addCart);
    // Append to containers
    cardContainer.appendChild(cardWrapper);
    return cardContainer;
}
