import { loadJsonHandler } from "./components/loadJsonHandler.js";

type Product = {
    id: number;
    name: string;
    price: number;
    imgPath: string;
  };

  const products: Product[] = loadJsonHandler<Product[]>('/data/products.json')
  .then((data) => {
    products = data;
  })
  .catch((error) => {
    console.error('Failed to load products:', error);
  });

  console.log(products);