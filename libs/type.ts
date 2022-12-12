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

interface InputsType {
  [key: string]: string;
}

type UseInputType = [
  InputsType,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

export type {
  ProductionType,
  HouseType,
  FarmsType,
  ModalDataType,
  InputsType,
  UseInputType,
};
