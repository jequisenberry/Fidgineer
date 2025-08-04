import { Product } from "../main";

import { renderPrimaryFeatured } from "./subcomponent/renderPrimaryFeatured.js";
import { renderCategoryShowcase } from "./subcomponent/renderCategoryShowcase.js";

/**
 * Renders the featured product section.
 * Iterates through all categories and renders their respective showcases.
 *
 * @returns A <section> element containing all category showcase sections.
 */
export function renderFeaturedSection(inventory:Product[]):HTMLElement
{

    console.log("featured");
    console.log(inventory);
    
    
    const featuredSection = document.createElement('section');

    // Create Primary Featured Product
    const primaryProduct:Product = inventory[0]; // TODO: SET PRIMARY THOUGH JSON CONTROLLER 
    
    

    const primaryFeatured = renderPrimaryFeatured(primaryProduct);
    

    // TODO: Iterate through all product categories and call renderCategoryShowcase(category)
    const categoryShowcase = renderCategoryShowcase(primaryProduct); // Temporary placeholder

    //featuredSection.appendChild(categoryShowcase);



    featuredSection.appendChild(primaryFeatured);
    featuredSection.appendChild(categoryShowcase);

    return featuredSection;
    
}
