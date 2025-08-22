import { renderCategoryShowcase, buildFeaturedCategoryData } from "./renderFeaturedSectionFunction.js";
import { buildProductByCategoryData } from "../../utils/buildProductByCategoryData.js";
export function renderFeaturedSection() {
    console.log('featured working');
    // Creates featured Products container
    const featureSectionContainer = document.createElement('section');
    featureSectionContainer.className = 'featured-section';
    // Build a feature list by category
    const categoryData = buildProductByCategoryData();
    const featuredByCategoryData = buildFeaturedCategoryData(categoryData);
    // Iterate through featuredList, creates a product showcase for each.
    featuredByCategoryData.forEach((featuredCategory) => {
        if (featuredCategory.products.length != 0)
            featureSectionContainer.appendChild(renderCategoryShowcase(featuredCategory));
    });
    // Appends to featured Products container
    return featureSectionContainer;
}
