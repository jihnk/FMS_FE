import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import type { HouseType } from "libs/type";

const FarmList = ({
  id,
  crops,
  name,
  productionTotal,
  houses,
  HouseActive,
}: {
  id: number;
  crops: string;
  name: string;
  productionTotal: number;
  houses?: HouseType[];
  HouseActive: (farmId: number, houseId: number) => void;
}) => {
  return (
    <div className="p-2 border rounded bg-white drop-shadow">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">
          {name} ({crops})
        </h2>
        <AiOutlineRight />
      </div>
      <div>
        <span className="text-sm font-bold">연간 생산량 :</span>
        <span className="text-sm">{productionTotal}</span>
      </div>
      {houses && (
        <ul className="flex flex-col mt-2 gap-1">
          {houses.map((ele: HouseType) => (
            <li
              className="text-sm p-1 rounded"
              style={{
                background: ele.active ? "#7AEA9C" : "#FF8269",
              }}
              key={ele.id}
              onClick={() => HouseActive(id, ele.id)}
            >
              ({ele.active ? "가동중" : "중지"}) {ele.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FarmList;
