

import { appendBody } from "../utils/dom.js";

import { renderHeader } from "../components/renderHeader.js";
import { renderFeaturedSection } from "../components/renderFeaturedSection.js";
import { renderFooter } from "../components/renderFooter.js";

export function renderFrontPage(): void {
    
    console.log("main page working");
        
    const header:HTMLElement = renderHeader();

    const main:HTMLElement = document.createElement('main');

    const featuredSection = renderFeaturedSection();
    main.appendChild(featuredSection)

    const footer:HTMLElement = renderFooter();

    const elements: HTMLElement[] = [header,main,footer]


    appendBody(elements);
    
}
