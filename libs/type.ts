import { Dispatch, SetStateAction } from "react";

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
  content?: { [key: string]: string };
}

interface InputsType {
  [key: string]: string;
}

type UseInputType = [
  InputsType,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  boolean
];

type UseModalType = [
  boolean,
  () => void,
  ModalDataType,
  Dispatch<SetStateAction<ModalDataType>>
];

export type {
  ProductionType,
  HouseType,
  FarmsType,
  ModalDataType,
  InputsType,
  UseInputType,
  UseModalType,
};
