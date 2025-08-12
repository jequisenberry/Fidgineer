/**
 * Creates a call-to-action (CTA) button.
 * Sets the button's inner text and destination URL.
 *
 * @param buttonText - The text to display on the button.
 * @param href - The URL the button should link to.
 * @returns A <a> element.
 */
export function renderCTAButton(buttonText, href) {
    const a = document.createElement('a');
    a.classList = "cta-button";
    a.innerText = buttonText;
    a.setAttribute('href', href);
    a.setAttribute('target', '_blank');
    return a;
}
