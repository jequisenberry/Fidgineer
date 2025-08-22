import { DataHandler } from "../../utils/dataHandler.js";
/**
 * Renders the site footer.
 * Includes site information, customer care links, copyright,
 * and the brand logo/footer bar.
 *
 * @returns A <footer> element representing the site footer.
 */
export function renderFooter() {
    const dataHandler = DataHandler.getInstance();
    const siteConfig = dataHandler.getSiteConfig();
    const footer = document.createElement('footer');
    const linksList = document.createElement('ul');
    linksList.className = "footer-links-list";
    //console.log(siteConfig.FooterLinks)
    siteConfig.footerLinks.forEach(linkCategory => {
        const category = document.createElement('li');
        category.className = "category-li";
        const categoryHeader = document.createElement('h5');
        categoryHeader.innerText = linkCategory.categoryName;
        category.appendChild(categoryHeader);
        const contentsList = document.createElement('ul');
        if (linkCategory.categoryName == "Customer Care") {
            category.classList.add("customer-care-li");
            const customerCare = linkCategory.contents.find(item => item.linkName == "CareEmail");
            const keepInTouch = linkCategory.contents.find(item => item.linkName == "CareEmail");
            const careUl = document.createElement('ul');
            careUl.classList = "care-ul";
            if (customerCare) {
                const emailLi = document.createElement('li');
                const emailLink = document.createElement('a');
                emailLink.textContent = customerCare.href;
                emailLink.href = customerCare.href;
                emailLi.appendChild(emailLink);
                careUl.appendChild(emailLi);
            }
            if (keepInTouch) {
                const keepInTouchLi = document.createElement('li');
                keepInTouchLi.innerText = keepInTouch.linkName;
                const keepInTouchp = document.createElement('p');
                keepInTouchp.textContent = "Sign up to our newsletter to stay up to date with our latest releases, preorders and content.";
                const keepInTouchLink = document.createElement('a');
                keepInTouchLink.textContent = "Enter your email";
                keepInTouchLink.href = keepInTouch.href;
                keepInTouchp.appendChild(keepInTouchLink);
                keepInTouchLi.appendChild(keepInTouchp);
                careUl.appendChild(keepInTouchLi);
            }
            category.appendChild(careUl);
        }
        else {
            linkCategory.contents.forEach(link => {
                if (!link.active)
                    return;
                const li = document.createElement('li');
                const a = document.createElement('a');
                link.linkName == "CareEmail";
                a.textContent = link.linkName;
                a.href = link.href;
                li.append(a);
                contentsList.appendChild(li);
                category.appendChild(contentsList);
            });
        }
        linksList.appendChild(category);
    });
    // Footer branding bar
    const footerCopyRight = document.createElement('div');
    footerCopyRight.className = 'footer-copyright';
    footerCopyRight.innerText = "©2025 Fidgineer Co"; // Placeholder! TODO: Add logo image
    // Footer branding bar
    const footerLogo = document.createElement('div');
    footerLogo.className = 'footer-logo';
    footerLogo.innerText = "fidgineer"; // Placeholder! TODO: Add logo image
    // Assemble footer
    footer.appendChild(linksList);
    footer.appendChild(footerCopyRight);
    footer.appendChild(footerLogo);
    return footer;
}
