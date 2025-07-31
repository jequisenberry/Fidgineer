import { renderFronPage } from "./renderFrontPage.js";
function main() {
    const body = document.querySelector('body');
    if (!body)
        return;
    console.log("working");
    const frontPage = renderFronPage();
    body.appendChild(frontPage);
}
document.addEventListener("DOMContentLoaded", main);
