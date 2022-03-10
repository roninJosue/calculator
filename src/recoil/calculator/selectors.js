import {selector} from "recoil";
import {
  calculator,
  defaultValue
} from "./atom";
import {preventLeadingZeros, validateDigit} from "../../utils/numbers";
import {validateOperator} from "../../utils/operators";
import {
  FUNCTION,
  NUMBER,
  OPERATOR
} from "../../utils/constants";

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

    if (lastSectionClicked !== NUMBER) newResult = '0'

    const valid = validateDigit(newResult, value)
    set(calculator,
      {
        result: `${valid}`,
        formula: preventLeadingZeros(`${formula}${value}`),
        lastSectionClicked: NUMBER
      }
    )
  }
})

export const operatorSelector = selector({
  key: 'operatorSelector',
  get: ({get}) => {},
  set: ({set, get}, value) => {
    const {result, formula, evaluated} = get(calculator)
    const op = validateOperator(formula, value, evaluated, result)
    set(calculator, {
      result: op.resul,
      formula: op.formula,
      evaluated: op.evaluated,
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