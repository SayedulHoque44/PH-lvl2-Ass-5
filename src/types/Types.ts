export type TGadgets = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  releaseDate: string;
  Brand: string;
  modelNumber: string;
  Category: string;
  operatingSystem?: string;
  connectivity?: string;
  powerSource?: string;
  features?: {
    resolution?: string;
    storagecapacity?: string;
    screenSize?: string;
    weight?: string;
    dimensions?: string;
  };
};
