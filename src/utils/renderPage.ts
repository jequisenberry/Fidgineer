
import { renderHeader } from "../components/header/renderHeader.js";
import { renderFooter } from "../components/footer/renderFooter.js";

/**
 * Represents a single CSS class name object.
 */
type ClassName = {

    /** The CSS class name to apply. */
    className:string

}

type ComponentClasses = {

    /** Classes applied to the outer container element. */
    containerClass?: ClassName[];

    /** Classes applied to the `<header>` element. */
    headerClass?: ClassName[];

    /** Classes applied to the `<main>` element. */
    mainClass?: ClassName[];

    /** Classes applied to the `<footer>` element. */
    footerClass?: ClassName[];

};

/**
 * Configuration options for `renderPage`.
 */
export type Options = {

    /** Optional sets of CSS classes for different components. */
    componentClasses?: ComponentClasses;

    /** Array of HTML elements to append inside the `<main>` container. */
    mainContents?: HTMLElement[];
};

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
function renderPage(options?: Options, clear: boolean = true): void {
    
    const body = document.querySelector("body") as HTMLBodyElement;
    if (!body) throw new Error("renderPage: body not found");
    if (clear) body.innerHTML = "";

    // Main container
    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";
    applyClasses(mainContainer, options?.componentClasses?.containerClass);

    // Header
    const header: HTMLElementTagNameMap["header"] = renderHeader();
    applyClasses(header, options?.componentClasses?.headerClass);
    
    // Main
    const main: HTMLElementTagNameMap["main"] = document.createElement("main");
    applyClasses(main, options?.componentClasses?.mainClass);
    
    // Append main contents
    options?.mainContents?.forEach((content: HTMLElement) => main.appendChild(content));
    
    // Footer
    const footer: HTMLElementTagNameMap["footer"] = renderFooter();
    applyClasses(footer, options?.componentClasses?.footerClass);

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
function applyClasses(
    targetElement: HTMLElement,
    componentClass?: ClassName[]
) {
    if (componentClass?.length) {
        componentClass.forEach((cls: ClassName) => {
            targetElement.classList.add(cls.className);
        });
    }
}