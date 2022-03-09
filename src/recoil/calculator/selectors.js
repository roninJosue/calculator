import {selector} from "recoil";
import {
  calculator,
  defaultValue, FUNCTION,
  NUMBER, OPERATOR
} from "./atom";
import {validateDigit} from "../../utils/numbers";
import {validateOperator} from "../../utils/operators";

export const numberSelector = selector({
  key: 'numberSelector',
  get: (get) => {},
  set: ({set, get}, value) => {
    const {
      result,
      formula,
      lastSectionClicked
    } = get(calculator)

    let newResult = result

    if (lastSectionClicked !== NUMBER) newResult = ''

    const valid = validateDigit(newResult, value)

    set(calculator,
      {
        result: `${newResult}${valid}`,
        formula: `${formula}${valid}`,
        lastSectionClicked: NUMBER
      }
    )
  }
})

export const operatorSelector = selector({
  key: 'operatorSelector',
  get: ({get}) => {},
  set: ({set, get}, value) => {
    const {result, formula} = get(calculator)
    const op = validateOperator(value)
    set(calculator, {
      result: value,
      formula: `${formula}${op}`,
      lastSectionClicked: OPERATOR
    })
  }
})

export const functionSelector = selector({
  key: 'functionSelector',
  get: () => {},
  set: ({set, get}, value) => {
    console.log(value)
    if (value === 'clear') {
      set(calculator, {...defaultValue, lastSectionClicked: FUNCTION})
    }
  }
})