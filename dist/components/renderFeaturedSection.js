import { renderCategoryShowcase } from "./subcomponent/renderCategoryShowcase";
/**
 * Renders the featured product section.
 * Iterates through all categories and renders their respective showcases.
 *
 * @returns A <section> element containing all category showcase sections.
 */
export function renderFeaturedSection() {
    const featuredSection = document.createElement('section');
    // TODO: Iterate through all product categories and call renderCategoryShowcase(category)
    const categoryShowcase = renderCategoryShowcase(); // Temporary placeholder
    featuredSection.appendChild(categoryShowcase);
    return featuredSection;
}
