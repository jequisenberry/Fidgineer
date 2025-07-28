/**
 * Renders the primary site navigation bar.
 *
 * @returns A <nav> element containing navigation links.
 */
export function renderNav(): HTMLElement {
    const nav = document.createElement('nav');
    nav.classList.add('site-nav');

    // Main navigation links
    const primaryNav = document.createElement('div');
    primaryNav.classList.add('nav-primary');

    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = 'HOME';

    const exploreLink = document.createElement('a');
    exploreLink.href = '/';
    exploreLink.textContent = 'EXPLORE';

    primaryNav.appendChild(homeLink);
    primaryNav.appendChild(exploreLink);

    // Secondary navigation links (search, cart)
    const secondaryNav = document.createElement('div');
    secondaryNav.classList.add('nav-secondary');

    const searchContainer = document.createElement('div');
    const searchLink = document.createElement('a');
    searchLink.href = '/';
    searchLink.textContent = 'SEARCH';
    searchContainer.appendChild(searchLink);

    const cartLink = document.createElement('a');
    cartLink.href = '/';
    cartLink.innerHTML = `CART <span>0</span>`;

    secondaryNav.appendChild(searchContainer);
    secondaryNav.appendChild(cartLink);

    // Assemble nav
    nav.appendChild(primaryNav);
    nav.appendChild(secondaryNav);

    return nav;
}
