/**
 * Renders the primary site navigation bar.
 *
 * @returns A <nav> element containing navigation links.
 */
export function renderNav() {
    const nav = document.createElement('nav');
    // Menu
    const menu = document.createElement('ul');
    // Home link
    const homeItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '#home';
    homeLink.textContent = 'HOME';
    // Append 
    homeItem.appendChild(homeLink);
    // Explore Menu
    const exploreItem = document.createElement('li');
    exploreItem.textContent = 'EXPLORE';
    // Explore Drop-down
    const exploreDropDown = document.createElement('div');
    exploreDropDown.className = "menu-dropdown";
    exploreDropDown.innerText = "Explore placeholder";
    addEventListenerToItem(exploreItem, exploreDropDown);
    // Append
    exploreItem.appendChild(exploreDropDown);
    // Search
    const searchItem = document.createElement('li');
    searchItem.textContent = 'Search';
    // Search Drop-down
    const searchDropDown = document.createElement('div');
    searchDropDown.className = "menu-dropdown";
    // Search Drop-down Input
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    addEventListenerToItem(searchItem, searchDropDown);
    // Append
    searchDropDown.appendChild(searchInput);
    searchItem.appendChild(searchDropDown);
    // Cart link
    const cartItem = document.createElement('li');
    const cartLink = document.createElement('a');
    cartLink.href = '/cart';
    cartLink.innerHTML = 'CART <span>0</span>';
    // Cart Drop-down
    const cartDropDown = document.createElement('div');
    cartDropDown.className = "menu-dropdown";
    cartDropDown.innerText = "Cart placeholder";
    addEventListenerToItem(cartItem, cartDropDown);
    // Append
    cartItem.append(cartLink, cartDropDown);
    // Append to menu
    menu.append(homeItem, exploreItem, searchItem, cartItem);
    // Append menu to nav
    nav.appendChild(menu);
    return nav;
}
// Explore EventListeners
function addEventListenerToItem(targetParentElement, targetChildElement) {
    // Click
    targetParentElement.addEventListener('click', () => {
        dropdownLogic(targetChildElement, 'click');
    });
    // Mouseover
    targetParentElement.addEventListener('mouseover', () => {
        dropdownLogic(targetChildElement, true);
    });
    // Mouseout
    targetParentElement.addEventListener('mouseout', () => {
        dropdownLogic(targetChildElement, false);
    });
}
function dropdownLogic(targetChildElement, active) {
    const classState = targetChildElement.classList.contains("menu-dropdown-open");
    if (active === 'click')
        active = !classState;
    if (active && !classState)
        targetChildElement.classList.add("menu-dropdown-open");
    else if (classState)
        targetChildElement.classList.remove("menu-dropdown-open");
}
