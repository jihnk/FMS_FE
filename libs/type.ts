interface ProductionType {
  month: number;
  Production: number;
}

interface HouseType {
  id: number;
  name: string;
  active: boolean;
}
interface FarmsType {
  id: number;
  crops: string;
  name: string;
  annualProduction: ProductionType[];
  houses?: HouseType[];
}

export type { ProductionType, HouseType, FarmsType };
