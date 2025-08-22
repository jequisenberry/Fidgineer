import { renderFrontPage } from "./pages/renderFrontPage.js";
export function route() {
    const hash = window.location.hash.slice(1);
    switch (hash) {
        /*
        case 'products':
            renderProductsPage();
            break;
        */
        /*
        case 'product':
            const productId = getProductIdFromHash(); // helper function
            renderProductPage(productId); // Shows single product details
            break;
        */
        case 'home':
        default:
            renderFrontPage();
            break;
    }
}
