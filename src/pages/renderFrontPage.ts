

import { appendBody } from "../utils/dom.js";

import { renderHeader } from "../components/renderHeader.js";
import { renderFeaturedSection } from "../components/renderFeaturedSection.js";

export function renderFrontPage(): void {
    
    console.log("main page working");
        
    const header = renderHeader();
    const featuredSection = renderFeaturedSection();

    const elements: HTMLElement[] = [header,featuredSection]


    appendBody(elements);
    
}
