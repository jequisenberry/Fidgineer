export enum ProductType {
  FidgetToy = "Fidget Toy",
  Puzzle = "Puzzle",
  Lighter = "Lighter",
}

export type InventoryItem = {
  id: number;
  name: string;
  productType: ProductType;
  price: number;
  description: string;
  imgPath: string;
  isFeatured: boolean;
};

export type SiteConfig = {
  name: string;
}