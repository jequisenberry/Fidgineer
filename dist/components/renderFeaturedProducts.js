"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHeader = renderHeader;
const renderPrimaryFeatured_1 = require("./subcomponent/renderPrimaryFeatured");
const renderSecondaryFeatured_1 = require("./subcomponent/renderSecondaryFeatured");
/**
 *
 *
 * @returns
 */
function renderHeader() {
    const parentDiv = document.createElement('section');
    const primaryFeatured = (0, renderPrimaryFeatured_1.renderPrimaryFeatured)();
    const secondaryFeatured = (0, renderSecondaryFeatured_1.renderSecondaryFeatured)();
    parentDiv.appendChild(primaryFeatured);
    parentDiv.appendChild(secondaryFeatured);
    return parentDiv;
}
