import {selector} from "recoil";
import {calculator} from "./atom";

export const numberSelector = selector({
  key: 'numberSelector',
  get: (get) => {},
  set: ({set, get}, value) => {
    const {result, formula} = get(calculator)
    set(calculator,
      {
        result: `${result}${value}`,
        formula: `${formula}${value}`
      }
    )
  }
})