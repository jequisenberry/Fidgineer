/**
 * Renders the primary site navigation bar.
 *
 * @returns A <nav> element containing navigation links.
 */
export function renderNav() {
    const nav = document.createElement('nav');
    const menu = document.createElement('ul');
    // Home link
    const homeItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = 'HOME';
    homeItem.appendChild(homeLink);
    // Search item (non-link)
    const searchItem = document.createElement('li');
    searchItem.id = 'navSearch';
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchItem.appendChild(searchInput);
    // Cart link
    const cartItem = document.createElement('li');
    const cartLink = document.createElement('a');
    cartLink.href = '/cart';
    cartLink.innerHTML = 'CART <span>0</span>';
    cartItem.appendChild(cartLink);
    // theme toggle
    const themeToggleItem = document.createElement('li');
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id = 'navThemeToggle';
    themeToggleButton.textContent = 'T';
    themeToggleButton.addEventListener('click', () => {
        //document.body.classList.toggle('dark-theme');
        console.log('Theme toggle clicked');
    });
    themeToggleItem.appendChild(themeToggleButton);
    // Append to menu
    menu.appendChild(homeItem);
    menu.appendChild(searchItem);
    menu.appendChild(cartItem);
    menu.appendChild(themeToggleItem);
    nav.appendChild(menu);
    return nav;
}
