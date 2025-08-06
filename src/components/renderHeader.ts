import { renderNav } from "./renderNav.js";

export function renderHeader():HTMLDivElement {
    const header = document.createElement('header') as HTMLDivElement;

    // Logo
    const logoWrapper = document.createElement('div');
    logoWrapper.className = 'header-logo-wrapper';

    logoWrapper.innerText = "fidgineer"; // Placeholder! TODO: Add logo image

    // Navigation
    const nav = renderNav(); 

    header.appendChild(logoWrapper);
    header.appendChild(nav);

    return header;
}