import { renderNav } from "./renderNav";
export function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div>

            <!-- Placeholder -->
            fidgineer

        </div>
        ${renderNav()}
    `;
    return header;
}
