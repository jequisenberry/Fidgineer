import { DataHandler } from "../data/dataHandler.js";
import { ProductType } from "../data/types.js";
import { renderCategoryShowcase } from "./subcomponent/renderCategoryShowcase.js";

/**
 * Renders the featured product section.
 * Iterates through all categories and renders their respective showcases.
 *
 * @returns A <section> element containing all category showcase sections.
 */
export function renderFeaturedSection():HTMLElement {
    
    const dataHandler = DataHandler.getInstance();
    const inventory = dataHandler.getInventory();


    const productsCatagory: string[] = Object.values(ProductType);

    const featuredSection = document.createElement('section');
    featuredSection.className = 'featured-section';

    productsCatagory.forEach(catagory => {

        featuredSection.appendChild(renderCategoryShowcase(catagory));
    });
    
    
    
    //console.log(productsCatagory)

    //console.log(inventory);

    





    return featuredSection;
    
}
