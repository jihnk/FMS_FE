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

interface ModalDataType {
  title: string;
  content: { farm: string; crop: string };
}

export type { ProductionType, HouseType, FarmsType, ModalDataType };
