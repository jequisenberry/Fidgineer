import { renderNav } from "./renderNav";

export function renderHeader():HTMLDivElement {
    const header = document.createElement('header') as HTMLDivElement;
    header.innerHTML = `
        <div>

            <!-- Placeholder -->
            fidgineer

        </div>
        ${renderNav()}
    `;
    
    return header as HTMLDivElement;
}