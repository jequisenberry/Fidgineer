"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPrimaryFeatured = renderPrimaryFeatured;
const renderCTAButton_1 = require("./renderCTAButton");
/**
 * Creates the main product showcase.
 * Displays a product image, title, description, and a CTA button.
 *
 * @returns A <div> element containing the product showcase.
 */
function renderPrimaryFeatured() {
    const div = document.createElement('div');
    // Create and append the image
    const img = document.createElement('img');
    img.src = 'placeholder';
    img.alt = 'placeholder';
    // Create content wrapper
    const content = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = 'Product Name Here';
    const spacer = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Description here';
    const button = (0, renderCTAButton_1.renderCTAButton)('Shop Now', '/');
    // Append everything in order
    content.appendChild(heading);
    content.appendChild(spacer);
    content.appendChild(paragraph);
    content.appendChild(button);
    div.appendChild(img);
    div.appendChild(content);
    return div;
}
