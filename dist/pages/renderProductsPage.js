import { pageBuilder } from "../utils/pageBuilder.js";
import { renderHeader } from "../components/header/renderHeader.js";
import { renderFooter } from "../components/footer/renderFooter.js";
import { renderProductsByCategory } from "../components/products_page/renderProductsByCategory.js";
export function renderProductsPage() {
    console.log("product page working");
    // Main Content
    pageBuilder({
        header: {
            element: renderHeader(),
            classes: ['header-class'] // optional
        },
        main: {
            contents: [renderProductsByCategory()],
            classes: ['main-class'] // optional
        },
        footer: {
            element: renderFooter(),
            classes: ['footer-class'] // optional
        },
        container: {
            classes: ['container-class'] // optional
        }
    });
}
