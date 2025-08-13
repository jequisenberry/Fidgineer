import { renderHeader } from "src/components/renderHeader";
import { renderFooter } from "src/components/renderFooter";
export var PageCommpent;
(function (PageCommpent) {
    PageCommpent["MainContainer"] = "main-container";
    PageCommpent["Header"] = "header";
    PageCommpent["Main"] = "main";
    PageCommpent["Footer"] = "footer";
})(PageCommpent || (PageCommpent = {}));
/**
 *
 * @param componentClasses
 * @param mainContents
 * @param clear
 */
export function renderPage(componentClasses, mainContents, clear = true) {
    const body = document.querySelector("body");
    if (!body)
        throw new Error("renderPage: body not found");
    if (clear)
        body.innerHTML = "";
    // Main container
    const mainContainer = document.createElement("div");
    mainContainer.className = PageCommpent.MainContainer;
    componentClasses &&
        addComponentClasses(componentClasses, PageCommpent.MainContainer, mainContainer);
    // Header
    const header = renderHeader();
    componentClasses &&
        addComponentClasses(componentClasses, PageCommpent.Header, header);
    // Main
    const main = document.createElement("main");
    componentClasses &&
        addComponentClasses(componentClasses, PageCommpent.Main, main);
    mainContents === null || mainContents === void 0 ? void 0 : mainContents.forEach(el => main.appendChild(el));
    // Footer
    const footer = renderFooter();
    componentClasses &&
        addComponentClasses(componentClasses, PageCommpent.Footer, footer);
    // Assemble
    mainContainer.append(header, main, footer);
    body.appendChild(mainContainer);
}
function addComponentClasses(componentClasses, pageComponentName, docElement) {
    var _a;
    const match = componentClasses.find(c => c.componentName === pageComponentName);
    if ((_a = match === null || match === void 0 ? void 0 : match.classNames) === null || _a === void 0 ? void 0 : _a.length) {
        docElement.classList.add(...match.classNames);
    }
}
