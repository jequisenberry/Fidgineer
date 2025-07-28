import { renderPrimaryFeatured } from "./renderPrimaryFeatured";
import { renderSecondaryFeatured } from "./renderSecondaryFeatured";

/**
 * Renders the complete product showcase for a category,
 * including both primary and secondary featured products.
 *
 * @returns A <div> element containing the full showcase section.
 */
export function renderCategoryShowcase(): HTMLDivElement {
    const showcaseContainer = document.createElement('div');

    const primarySection = renderPrimaryFeatured();
    const secondarySection = renderSecondaryFeatured();

    showcaseContainer.appendChild(primarySection);
    showcaseContainer.appendChild(secondarySection);

    return showcaseContainer;
}