import { Product } from "../main.js";
import { renderCTAButton } from "./renderCTAButton.js";

/**
 * Creates the main product showcase.
 * Displays a product image, title, description, and a CTA button.
 *  
 * @param primaryProduct - The product to showcase.
 * @returns A <div> element containing the product showcase.
 */
export function renderPrimaryFeatured(primaryProduct:Product): HTMLElement {

    const ContentContainer = document.createElement('div');
    
    // Create and append the image
    const img = document.createElement('img');
    img.src = `img/${primaryProduct.imgPath}`;
    img.alt = 'placeholder';
    
    // Create content wrapper
    const content = document.createElement('div');
   
    const productName = document.createElement('h3');
    productName.textContent = primaryProduct.name;

    const spacer = document.createElement('div');

    const paragraph = document.createElement('p');
    paragraph.textContent = primaryProduct.description;

    const button = renderCTAButton('Shop Now', '/');

    // Append everything in order
    content.appendChild(productName);
    content.appendChild(spacer);
    content.appendChild(paragraph);
    content.appendChild(button);
    
    // Append content to the container
    ContentContainer.appendChild(img);
    ContentContainer.appendChild(content);
    
    return ContentContainer;
}
