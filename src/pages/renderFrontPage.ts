import { renderFeaturedSection } from "../components/renderFeaturedSection.js";
import { renderPage } from "../utils/renderPage.js";

export function renderFrontPage(): void {
    
    console.log("main page working");

    // Main Content
    const featuredSection:HTMLElement = renderFeaturedSection();
    
    renderPage({
        componentClasses: {
            //containerClass: [{ className: "container-fluid" }],
            //mainClass: [{ className: "content-area" }]
        },
        mainContents: [featuredSection]
    });
    
}
