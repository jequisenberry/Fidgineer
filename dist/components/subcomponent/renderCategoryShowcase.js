"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCategoryShowcase = renderCategoryShowcase;
const renderPrimaryFeatured_1 = require("./renderPrimaryFeatured");
const renderSecondaryFeatured_1 = require("./renderSecondaryFeatured");
/**
 * Renders the complete product showcase for a category,
 * including both primary and secondary featured products.
 *
 * @returns A <div> element containing the full showcase section.
 */
function renderCategoryShowcase() {
    const showcaseContainer = document.createElement('div');
    const primarySection = (0, renderPrimaryFeatured_1.renderPrimaryFeatured)();
    const secondarySection = (0, renderSecondaryFeatured_1.renderSecondaryFeatured)();
    showcaseContainer.appendChild(primarySection);
    showcaseContainer.appendChild(secondarySection);
    return showcaseContainer;
}
