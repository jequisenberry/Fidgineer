import { DataHandler } from "../data/dataHandler.js";
import { ProductType, CategoryInfo, InventoryItem } from "../data/types.js";

import { renderProductCard } from "./subcomponent/renderProductCard.js";
import { renderCTAButton } from "./subcomponent/renderCTAButton.js";


/**
 * Renders the featured product section.
 * Iterates through all product types and renders their respective showcases.
 *
 * @returns The <section> element containing all category showcase sections.
 */
export function renderFeaturedSection(): HTMLElementTagNameMap['section'] {
    const featureSectionContainer = document.createElement('section');
    featureSectionContainer.className = 'featured-section';

    // Iterate through product types, creating a product showcase for each.
    Object.values(ProductType).forEach((product: ProductType) => {
        featureSectionContainer.appendChild(renderCategoryShowcase(product));
    });

    return featureSectionContainer;
}

/**
 * Renders the complete product showcase for a category,
 * including both primary and secondary featured products.
 *
 * @param {ProductType} productType - The product category to render.
 * @returns A <div> element containing the full showcase section.
 */
function renderCategoryShowcase(productType: ProductType): HTMLElement {
    
    // Get inventory and site configuration data
    const dataHandler = DataHandler.getInstance();
    const inventory = dataHandler.getInventory();

    // Filter for all featured products in this category
    const featuredProducts: InventoryItem[] = inventory.filter(
        item => item.productType === productType && item.isFeatured
    );

    // Guard: No featured products
    if (featuredProducts.length === 0) {
        console.warn(`No featured products found for category: ${productType}`);
        return document.createElement('div'); // or a placeholder element
    }

    // Select a random product for the highlight section
    const randomIndex = Math.floor(Math.random() * featuredProducts.length);
    const highlightedProduct = featuredProducts[randomIndex];

    // Create showcase container
    const showcaseContainer = document.createElement('div');
    showcaseContainer.className = "showcase-container";

    // Create container for secondary featured product cards
    const cardContainer = document.createElement('div');
    cardContainer.className = "featured-card-container";

    // Add all featured products except the highlighted one
    featuredProducts.forEach(item => {
        if (item.id !== highlightedProduct.id) {
            cardContainer.appendChild(renderProductCard(item));
        }
    });

    // Assemble the showcase section
    showcaseContainer.appendChild(renderPrimaryFeatured(productType, highlightedProduct));
    showcaseContainer.appendChild(cardContainer);
    showcaseContainer.appendChild(renderCTAButton("Show More", "/"));

    return showcaseContainer;
}

/**
 * Creates the main product showcase.
 * Displays a product image, title, description, and a CTA button.
 *  
 * @param {ProductType} productType - The product category to render.
 * @param {InventoryItem} item - The featured product to showcase.
 * @returns A <div> element containing the product showcase.
 */
export function renderPrimaryFeatured(
    productType: ProductType,
    item: InventoryItem
): HTMLElement {

    // Get site configuration data
    const dataHandler = DataHandler.getInstance();
    const siteConfig = dataHandler.getSiteConfig();

    // Get category info from site config
    const categoryInfo:CategoryInfo | undefined = siteConfig.categoryInfo.find(
        category => category.ProductType === productType
    );

    const primaryContainer = document.createElement('div');
    primaryContainer.className = "primary-showcase";

    // Product image
    const featuredImg = document.createElement('img');
    featuredImg.src = `public/images/${item.imgPath}`;
    featuredImg.alt = item.name;

    // Content wrapper
    const featuredContent = document.createElement('div');
    featuredContent.className = "primary-showcase-content";

    if (categoryInfo) {
        const categoryName = document.createElement('h3');
        categoryName.textContent = categoryInfo.ProductType;

        const categoryDescription = document.createElement('p');
        categoryDescription.className = "category-description";
        categoryDescription.textContent = categoryInfo.description;

        const dividerLine = document.createElement('div');
        dividerLine.className = "divider-line";

        featuredContent.appendChild(categoryName);
        featuredContent.appendChild(categoryDescription);
        featuredContent.appendChild(dividerLine);
    } else {
        console.warn("Category information not found for:", item.productType);
    }

    // Product details
    const productName = document.createElement('h4');
    productName.textContent = item.name;

    const paragraph = document.createElement('p');
    paragraph.textContent = item.description;

    const button = renderCTAButton('Shop Now', '/');

    // Append product details
    featuredContent.appendChild(productName);
    featuredContent.appendChild(paragraph);
    featuredContent.appendChild(button);

    // Assemble showcase
    primaryContainer.appendChild(featuredImg);
    primaryContainer.appendChild(featuredContent);

    return primaryContainer;
}