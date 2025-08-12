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

export type CategoryInfo = {
  ProductType:string;
  description:string;
}

export type Contents = {
  linkName:string;
  href:string;
  active:boolean;
}

export type FooterLinks = {
  categoryName:string;
  contents:Contents[];
}

export type SiteConfig = {
  name: string;
  categoryInfo:CategoryInfo[];
  footerLinks:FooterLinks[];
}