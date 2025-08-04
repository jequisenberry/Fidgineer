import { renderFrontPage } from "./pages/renderFrontPage.js";
export function route() {
    const hash = window.location.hash.slice(1);
    switch (hash) {
        // Add more routes as needed
        case 'home':
        default:
            renderFrontPage();
    }
}
