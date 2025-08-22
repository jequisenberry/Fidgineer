/**
 * Represents a set of optional CSS classes that can be applied to an element.
 */
interface Classes {
    /** Optional array of CSS class names */
    classes?: string[];
}

/**
 * Configuration for a single HTML section (header or footer), 
 * including a passthrough element and optional CSS classes.
 */
interface sectionConfig extends Classes {
    /** The HTML element to use for this section */
    element: HTMLElement;
}

/**
 * Configuration for the <main> element, including multiple content elements
 * and optional CSS classes.
 */
interface mainConfig extends Classes {
    /** Array of HTML elements to append inside <main> */
    contents: HTMLElement[];
}

/**
 * Parameters for the pageBuilder function.
 */
export interface PageBuilderParams {
    /** Header configuration */
    header: sectionConfig;

    /** Main configuration */
    main: mainConfig;

    /** Footer configuration */
    footer: sectionConfig;

    /** Container configuration with optional CSS classes */
    container: Classes;
}


/**
 * Builds a complete HTML page structure from passthrough components (header, main, footer).
 * 
 * - Applies optional additional CSS classes to header, main, footer, and container.
 * - Appends provided content elements into the <main>.
 * - Wraps everything in a container <div class="main-container">.
 * - Replaces the contents of <body> with the constructed container.
 *
 * @param {PageBuilderParams} pageBuilderParams - Configuration object for building the page.
 * @param {sectionConfig} pageBuilderParams.header - Header config containing a passthrough <header> element and optional classes.
 * @param {mainConfig} pageBuilderParams.main - Main config containing an array of content elements and optional classes.
 * @param {sectionConfig} pageBuilderParams.footer - Footer config containing a passthrough <footer> element and optional classes.
 * @param {Classes} pageBuilderParams.container - Container config with optional classes applied to the wrapping <div>.
 *
 * @throws {Error} If no <body> element is found in the DOM.
 *
 * @returns {void} This function does not return anything. It directly manipulates the DOM.
 */
export function pageBuilder(
    pageBuilderParams:PageBuilderParams
): void { 

    // Header
    const header: HTMLElementTagNameMap["header"] = pageBuilderParams.header.element;
    applyClasses({
        element: header,
        classes: pageBuilderParams.header.classes
    })

    // Main
    const main: HTMLElementTagNameMap["main"] = document.createElement('main');
    applyClasses({
        element: main,
        classes: pageBuilderParams.main.classes
    })

    // Main - add contents.
    pageBuilderParams.main.contents.forEach((content: HTMLElement) => main.appendChild(content));

    // Footer
    const footer: HTMLElementTagNameMap["footer"] = pageBuilderParams.footer.element;
    applyClasses({
        element: footer,
        classes: pageBuilderParams.footer.classes
    })

    // Container
    const container: HTMLDivElement = document.createElement('div');
    container.className = "main-container";
    applyClasses({
        element: container,
        classes: pageBuilderParams.container.classes
    })
    
    // Append to container
    container.append(header, main, footer);

    // Body
    const body = document.querySelector("body") as HTMLBodyElement;
    if (!body) throw new Error("No <body> element found!");
    
    // Append to body
    body.replaceChildren(container);

}

/**
 * Applies an array of CSS classes to a given HTML element.
 *
 * @param {sectionConfig} config - Configuration object containing the element and optional classes.
 * @param {HTMLElement} config.element - The HTML element to which classes will be applied.
 * @param {string[]} [config.classes] - Optional array of CSS class names to add to the element.
 *
 * @returns {void} This function does not return anything. It modifies the element in place.
 */
function applyClasses(config: sectionConfig): void {
    if (config.classes)
        config.classes.forEach(cls => config.element.classList.add(cls))
}