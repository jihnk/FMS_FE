import { FarmsType } from "libs/type";

export const getProductionTotal = (farm: FarmsType) => {
  return farm.annualProduction.reduce((acc, cur) => acc + cur.Production, 0);
};
