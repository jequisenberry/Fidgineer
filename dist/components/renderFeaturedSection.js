import { DataHandler } from "../data/dataHandler.js";
import { ProductType } from "../data/types.js";
import { renderProductCard } from "./subcomponent/renderProductCard.js";
import { renderCTAButton } from "./subcomponent/renderCTAButton.js";
/**
 * Renders the featured product section.
 * Iterates through all categories and renders their respective showcases.
 *
 * @returns A <section> element containing all category showcase sections.
 */
export function renderFeaturedSection() {
    const dataHandler = DataHandler.getInstance();
    const inventory = dataHandler.getInventory();
    const featuredSection = document.createElement('section');
    featuredSection.className = 'featured-section';
    Object.values(ProductType).forEach(product => {
        const category = inventory
            .filter(item => item.productType === product && item.isFeatured);
        featuredSection.appendChild(renderCategoryShowcase(category));
    });
    return featuredSection;
}
/**
 * Renders the complete product showcase for a category,
 * including both primary and secondary featured products.
 *
 * @returns A <div> element containing the full showcase section.
 */
function renderCategoryShowcase(category) {
    const showcaseContainer = document.createElement('div');
    // Highlighted Feature
    // Pick Random Highlight from featured
    const randomIndex = Math.floor(Math.random() * category.length);
    const randomHighlight = category[randomIndex];
    console.log(category);
    // Featured Cards
    const cardContainer = document.createElement('div');
    category.forEach(item => {
        if (item.id != randomHighlight.id)
            cardContainer.appendChild(renderProductCard(item));
    });
    showcaseContainer.appendChild(renderPrimaryFeatured(randomHighlight));
    showcaseContainer.appendChild(cardContainer);
    return showcaseContainer;
}
/**
 * Creates the main product showcase.
 * Displays a product image, title, description, and a CTA button.
 *
 * @param primaryProduct - The product to showcase.
 * @returns A <div> element containing the product showcase.
 */
export function renderPrimaryFeatured(item) {
    const primaryContainer = document.createElement('div');
    // Create and append the image
    const featuredImg = document.createElement('img');
    featuredImg.src = `public/images/${item.imgPath}`;
    featuredImg.alt = 'placeholder';
    // Create content wrapper
    const featuredContent = document.createElement('div');
    // Content Elements
    const productName = document.createElement('h3');
    productName.textContent = item.name;
    const spacer = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent = item.description;
    const button = renderCTAButton('Shop Now', '/');
    // Append everything in order
    featuredContent.appendChild(productName);
    featuredContent.appendChild(spacer);
    featuredContent.appendChild(paragraph);
    featuredContent.appendChild(button);
    // Append content to the container
    primaryContainer.appendChild(featuredImg);
    primaryContainer.appendChild(featuredContent);
    return primaryContainer;
}
