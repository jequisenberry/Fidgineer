import { loadJsonHandler } from "./components/loadJsonHandler.js";
const products = loadJsonHandler('/data/products.json')
    .then((data) => {
    products = data;
})
    .catch((error) => {
    console.error('Failed to load products:', error);
});
console.log(products);
