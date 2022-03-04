import {selector} from "recoil";
import {calculator} from "./atom";
import {validateDigit} from "../../utils/numbers";

export const numberSelector = selector({
  key: 'numberSelector',
  get: (get) => {},
  set: ({set, get}, value) => {
    const {result, formula} = get(calculator)

    const valid = validateDigit(result, value)

    set(calculator,
      {
        result: valid,
        formula: `${valid}`
      }
    )
  }
})

export const operatorSelector = selector({
  key: 'operatorSelector',
  get: ({get}) => {},
  set: ({set, get}, value) => {
    console.log(value)
  }
})

export const functionSelector = selector({
  key: 'functionSelector',
  get: () => {},
  set: ({set, get}, value) => {
    console.log(value)
  }
})