import { renderCTAButton } from "./renderCTAButton";
/**
 * Renders the secondary product showcase section.
 * Displays a horizontal list of product cards with navigation arrows and a CTA button.
 *
 * @returns A <div> element representing the secondary product showcase.
 */
export function renderSecondaryFeatured() {
    const showcaseContainer = document.createElement('div');
    // Wrapper for scrollable content
    const scrollWrapper = document.createElement('div');
    // Left navigation arrow
    const navLeft = document.createElement('div');
    navLeft.textContent = '←'; // TODO: Replace with icon and logic
    // Container for product cards
    const productList = document.createElement('div');
    // TODO: Append product cards dynamically
    // Example: featuredProducts.forEach(product => productList.appendChild(productCardRender(product)))
    // Right navigation arrow
    const navRight = document.createElement('div');
    navRight.textContent = '→'; // TODO: Replace with icon and logic
    // Assemble scrollable layout
    scrollWrapper.appendChild(navLeft);
    scrollWrapper.appendChild(productList);
    scrollWrapper.appendChild(navRight);
    // CTA button
    const ctaButton = renderCTAButton('Shop Now', '/');
    // Assemble full showcase
    showcaseContainer.appendChild(ctaButton);
    showcaseContainer.appendChild(scrollWrapper);
    return showcaseContainer;
}
