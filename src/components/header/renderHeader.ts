import { renderNav } from "./renderNav.js";

export function renderHeader():HTMLDivElement {
    const header = document.createElement('header') as HTMLDivElement;

    // Logo
    const logoWrapper = document.createElement('div');
    logoWrapper.className = 'header-logo-wrapper';

    logoWrapper.innerText = "fidgineer"; // Placeholder! TODO: Add logo image


    // theme toggle
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id    = 'navThemeToggle';
    themeToggleButton.textContent = 'O'; // Placeholder for theme toggle button
    
    themeToggleButton.addEventListener('click', () => {

        console.log('Theme toggle clicked');
    });


    // Navigation
    const nav = renderNav(); 

    header.appendChild(logoWrapper);
    header.append(nav,themeToggleButton);

    return header;
}