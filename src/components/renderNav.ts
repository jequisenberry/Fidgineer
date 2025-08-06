/**
 * Renders the primary site navigation bar.
 *
 * @returns A <nav> element containing navigation links.
 */
export function renderNav(): HTMLElement {

    const nav               = document.createElement('nav');

    // Menu
    const menu              = document.createElement('ul');


    // Home link
    const homeItem          = document.createElement('li');
    const homeLink          = document.createElement('a');
    homeLink.href           = '#home';
    homeLink.textContent    = 'HOME';
    
    homeItem.appendChild(homeLink);


    // Explore Menu
    const exploreItem       = document.createElement('li');
    exploreItem.textContent = 'EXPLORE';
    const exploreDropDown   = document.createElement('ul');
    // ToDo: Create interactive drop-down menu base in product catagory
    
    exploreItem.appendChild(exploreDropDown);


    // Search
    const searchItem        = document.createElement('li');
    searchItem.id           = 'navSearch';
    
    const searchInput       = document.createElement('input');
    searchInput.type        = 'text';
    searchInput.placeholder = 'Search...';
    
    const searchDropDown    = document.createElement('ul');
    // TODO:
    //  Add Erase Button
    //  Use search bar to populate searchDropDown with clickable link that link to results 

    searchItem.appendChild(searchInput);
    searchItem.appendChild(searchDropDown);

    
    // Cart link
    const cartItem          = document.createElement('li');
    const cartLink          = document.createElement('a');
    cartLink.href           = '/cart';
    cartLink.innerHTML      = 'CART <span>0</span>';

    const cartDropDown    = document.createElement('ul');

    cartItem.appendChild(cartLink);
    cartItem.appendChild(cartDropDown);
    // TODO:
    //  Add cart item count
    //  Add cart drop-down menu with list of items in cart


    // theme toggle
    const themeToggleItem   = document.createElement('li');
    const themeToggleButton = document.createElement('button');
    themeToggleButton.id    = 'navThemeToggle';
    themeToggleButton.textContent = 'O'; // Placeholder for theme toggle button
    themeToggleButton.addEventListener('click', () => {
        //document.body.classList.toggle('dark-theme');

        console.log('Theme toggle clicked');
    });
    themeToggleItem.appendChild(themeToggleButton);
    // TODO: Add theme toggle functionality

    
    // Append to menu
    menu.appendChild(homeItem);
    menu.appendChild(exploreItem);
    menu.appendChild(searchItem);
    menu.appendChild(cartItem);
    menu.appendChild(themeToggleItem);

    // Append menu to nav
    nav.appendChild(menu);
    
    return nav;
}

