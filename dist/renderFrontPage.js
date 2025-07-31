import { renderNav } from "./components/renderNav.js";
export function renderFronPage() {
    const frontPage = document.createElement('div');
    frontPage.classList.add("main-container");
    const navBar = renderNav();
    frontPage.appendChild(navBar);
    return frontPage;
}
