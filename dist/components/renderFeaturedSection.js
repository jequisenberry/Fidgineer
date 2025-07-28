"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFeaturedSection = renderFeaturedSection;
const renderCategoryShowcase_1 = require("./subcomponent/renderCategoryShowcase");
/**
 * Renders the featured product section.
 * Iterates through all categories and renders their respective showcases.
 *
 * @returns A <section> element containing all category showcase sections.
 */
function renderFeaturedSection() {
    const featuredSection = document.createElement('section');
    // TODO: Iterate through all product categories and call renderCategoryShowcase(category)
    const categoryShowcase = (0, renderCategoryShowcase_1.renderCategoryShowcase)(); // Temporary placeholder
    featuredSection.appendChild(categoryShowcase);
    return featuredSection;
}
