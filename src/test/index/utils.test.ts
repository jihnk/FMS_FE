import { getProductionTotal } from "../../utils";

const mock = {
  id: 1,
  crops: "감자",
  name: "농장1",
  annualProduction: [
    {
      month: 1,
      Production: 1,
    },
    {
      month: 2,
      Production: 2,
    },
    {
      month: 3,
      Production: 3,
    },
    {
      month: 4,
      Production: 4,
    },
    {
      month: 5,
      Production: 5,
    },
  ],
};

it("sum correctly", () => {
  expect(getProductionTotal(mock)).toBe(15);
});
