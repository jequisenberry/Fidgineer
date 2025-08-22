import { InventoryItem } from "../../utils/dataHandler.js";
import { CategoryData } from "../../utils/buildProductByCategoryData.js";

import { renderCTAButton } from "../renderCTAButton.js";
import { renderProductCard } from "../renderProductCard.js";

export function buildFeaturedCategoryData( categoryData:CategoryData[]): CategoryData[] {
    
    const featuredByCategoryData:CategoryData[] = categoryData.map(category => {

        const featuredItems = category.products.filter(item =>
            category.featuredIds.includes(item.id)
        );

        return {
            ...category,
            products: featuredItems
        } as CategoryData;

    });

    return featuredByCategoryData
}

export function renderCategoryShowcase(featuredCategory: CategoryData):HTMLElement {

    // Creates category showcase container
    const categoryContainer: HTMLDivElement = document.createElement('div');
    categoryContainer.className = "showcase-container";
    
    // Select a random product for the highlight section
    const randomIndex: number = 
        Math.floor(Math.random() * featuredCategory.products.length);

    // Create container for secondary featured product cards
    const cardContainer = document.createElement('div');
    cardContainer.className = "featured-card-container";
    
    // Add all featured products except the highlighted one
    featuredCategory.products.forEach(product => {

        if (product.id !==  featuredCategory.products[randomIndex].id) {
            cardContainer.appendChild(renderProductCard(product));
        }
        
    });

    // Assemble the showcase section
    categoryContainer.append(
        renderPrimaryFeatured(featuredCategory, randomIndex),
        cardContainer,
        renderCTAButton("Show More", "/")
    );

    // Append to containner
    return categoryContainer;
    
}

function renderPrimaryFeatured(
    category: CategoryData,
    randomIndex: number
): HTMLElement {

    const featuredProduct: InventoryItem = category.products[randomIndex];

    // Featured product container
    const primaryContainer = document.createElement('div');
    primaryContainer.className = "primary-showcase";

    // CATEGORY INFO
    // Product image
    const featuredImg: HTMLImageElement = document.createElement('img');
    featuredImg.src = `public/images/${featuredProduct.imgPath}`;
    featuredImg.alt = featuredProduct.name;

    // Category content container
    const categoryContentContaier = document.createElement('div');
    categoryContentContaier.className = "primary-showcase-content";

    // Category Heading
    const categoryName: HTMLHeadingElement = document.createElement('h2');
    categoryName.textContent = category.name;

    // Category Description Paragraph
    const categoryDescription = document.createElement('p');
    categoryDescription.className = "category-description";
    categoryDescription.textContent = category.description;

    const dividerLine = document.createElement('div');
    dividerLine.className = "divider-line";

    // FEATURED PRODUCT INFO
    // Product details
    const productName = document.createElement('h4');
    productName.textContent = featuredProduct.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = featuredProduct.description;

    const button = renderCTAButton('Shop Now', '/'); // <-------- LINK TO PRODUCT HERE
    
    // Append to container
    categoryContentContaier.append(
        
        // Category info
        categoryName,
        categoryDescription,
        dividerLine,
        
        // Featured product info
        productName,
        productDescription,
        button
    );

    // Append to primary container
    primaryContainer.append(featuredImg, categoryContentContaier);

    return primaryContainer;
}