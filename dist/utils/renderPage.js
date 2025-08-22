import { renderHeader } from "../components/header/renderHeader.js";
import { renderFooter } from "../components/footer/renderFooter.js";
/**
 * Renders the basic page structure with a container, header, main content, and footer.
 *
 * @param {Options} [options] - Optional configuration for the page.
 * @param {boolean} [clear=true] - Whether to clear the `<body>` before rendering.
 * @throws {Error} If `<body>` is not found in the DOM.
 *
 * @example
 * const featuredSection = document.createElement("section");
 * featuredSection.textContent = "Hello World!";
 *
 * renderPage({
 *   componentClasses: {
 *     containerClass: [{ className: "container" }],
 *     mainClass: [{ className: "main-content" }]
 *   },
 *   mainContents: [featuredSection]
 * });
 */
function renderPage(options, clear = true) {
    var _a, _b, _c, _d, _e;
    const body = document.querySelector("body");
    if (!body)
        throw new Error("renderPage: body not found");
    if (clear)
        body.innerHTML = "";
    // Main container
    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";
    applyClasses(mainContainer, (_a = options === null || options === void 0 ? void 0 : options.componentClasses) === null || _a === void 0 ? void 0 : _a.containerClass);
    // Header
    const header = renderHeader();
    applyClasses(header, (_b = options === null || options === void 0 ? void 0 : options.componentClasses) === null || _b === void 0 ? void 0 : _b.headerClass);
    // Main
    const main = document.createElement("main");
    applyClasses(main, (_c = options === null || options === void 0 ? void 0 : options.componentClasses) === null || _c === void 0 ? void 0 : _c.mainClass);
    // Append main contents
    (_d = options === null || options === void 0 ? void 0 : options.mainContents) === null || _d === void 0 ? void 0 : _d.forEach((content) => main.appendChild(content));
    // Footer
    const footer = renderFooter();
    applyClasses(footer, (_e = options === null || options === void 0 ? void 0 : options.componentClasses) === null || _e === void 0 ? void 0 : _e.footerClass);
    // Assemble
    mainContainer.append(header, main, footer);
    body.appendChild(mainContainer);
}
/**
 * Applies an array of CSS class objects to a target HTML element.
 *
 * @param {HTMLElement} targetElement - The element to which classes will be applied.
 * @param {ClassName[]} [componentClass] - Array of objects containing class names.
 *
 * @example
 * applyClasses(myDiv, [{ className: "highlight" }, { className: "shadow" }]);
 */
function applyClasses(targetElement, componentClass) {
    if (componentClass === null || componentClass === void 0 ? void 0 : componentClass.length) {
        componentClass.forEach((cls) => {
            targetElement.classList.add(cls.className);
        });
    }
}
