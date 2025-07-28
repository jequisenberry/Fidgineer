"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHeader = renderHeader;
const renderNav_1 = require("./renderNav");
function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div>

            <!-- Placeholder -->
            fidgineer

        </div>
        ${(0, renderNav_1.renderNav)()}
    `;
    return header;
}
