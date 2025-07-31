import { renderNav } from "./components/renderNav.js";


export function renderFronPage(): HTMLDivElement {
    const frontPage = document.createElement('div');
    frontPage.classList.add("main-container");

    const navBar:HTMLElement = renderNav()

    frontPage.appendChild(navBar);

    return frontPage;
}