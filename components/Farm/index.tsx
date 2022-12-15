import axios from "axios";
import React, { useEffect, useState } from "react";
import type { FarmsType } from "libs/type";
import FarmList from "./FarmList";

const Farm = () => {
  const [farmList, setFarmList] = useState<FarmsType[]>([]);
  const getFarmList = async () => {
    const res = await axios.get(`/api/farm`);
    setFarmList(res.data.farms);
  };

  const getProductionTotal = (farm: FarmsType) => {
    return farm.annualProduction.reduce((acc, cur) => acc + cur.Production, 0);
  };

  const houseActive = (farmId: number, houseId: number) => {
    const findFarmIndex = farmList.findIndex(
      (element) => element.id === farmId
    );

    const changedHouses = farmList[findFarmIndex].houses?.map((house) =>
      house.id === houseId ? { ...house, active: !house.active } : house
    );

    setFarmList(
      farmList.map((farm) =>
        farm.id === farmId ? { ...farm, houses: changedHouses } : farm
      )
    );
  };

  useEffect(() => {
    getFarmList();
  }, []);

  return (
    <div className="px-2 flex flex-col gap-2">
      {farmList.map((farm) => (
        <FarmList
          key={farm.id}
          id={farm.id}
          name={farm.name}
          crops={farm.crops}
          productionTotal={getProductionTotal(farm)}
          houses={farm.houses}
          HouseActive={houseActive}
        />
      ))}
    </div>
  );
};

export default Farm;
