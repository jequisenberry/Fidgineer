/**
 * Appends a list of HTMLElement nodes to the document body, wrapped inside a container div.
 *
 * @param {HTMLElement[]} pageContents - An array of elements to be appended inside the container.
 * @param {Object} [options] - Optional settings for customizing the container and behavior.
 * @param {string} [options.id] - Optional ID to assign to the container div.
 * @param {string} [options.className] - Optional additional class to add to the container div.
 * @param {boolean} [options.clear=false] - Whether to clear the document body before appending.
 *
 * @throws {Error} If the document body cannot be found.
 *
 * @example
 * const heading = document.createElement('h1');
 * heading.textContent = "Hello!";
 * appendBody([heading], { id: "main", className: "page", clear: true });
 */
export function buildPage(
    pageContents:HTMLElement[], 
    options?: {
        id?: string;
        className?: string;
        clear?: boolean;
    }
):void {
    
    const body = document.querySelector('body') as HTMLBodyElement;
    if (!body) throw new Error("appendBody: body not found");
    if (options?.clear) body.innerHTML = '';







    
    
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-container';
    
    if (options?.id) mainContainer.id = options.id;
    if (options?.className) mainContainer.classList.add(options.className);
    

    pageContents.forEach(element => mainContainer.appendChild(element));
    body.appendChild(mainContainer);
}