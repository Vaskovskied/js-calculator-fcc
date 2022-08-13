import { create, all } from "mathjs";

const math = create(all, {
  number: "BigNumber",
  precision: 16,
});

export const evaluate = (smth) => math.evaluate(smth).toString();

export default math;
