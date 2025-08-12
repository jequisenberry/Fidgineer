import { appendBody } from "../utils/dom.js";
import { renderHeader } from "../components/renderHeader.js";
import { renderFeaturedSection } from "../components/renderFeaturedSection.js";
import { renderFooter } from "../components/renderFooter.js";
export function renderFrontPage() {
    console.log("main page working");
    const header = renderHeader();
    const main = document.createElement('main');
    const featuredSection = renderFeaturedSection();
    main.appendChild(featuredSection);
    const footer = renderFooter();
    const elements = [header, main, footer];
    appendBody(elements);
}
