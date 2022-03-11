import {operators} from "./constants";

export const validateOperator = (formula, operator, evaluated, result) => {
  //console.log(formula, operator, evaluated, result)
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':

      const lastChar = formula.slice(-1)

      if (operators.includes(lastChar)) {
        formula = validateFormulaAndOperators(formula, operator, lastChar)
      } else {
        formula = `${formula}${operator}`
      }

      return {
        resul: evaluated ? result : operator,
        formula: evaluated ? `${result}${operator}` : `${formula}`
      };
    case '=':
      const res = eval(formula).toString()

      return {
        resul: res,
        formula: `${formula}${operator}${res}`,
        evaluated: true
      }
    default:
      return formula
  }
}

const validateFormulaAndOperators = (formula, operator, lastChar) => {
  const minusOp = '-';

  if (lastChar === minusOp && operator === minusOp){
    const countMinusOp = (formula.match(/-/g) || []).length
    return countMinusOp > 1 ? formula : `${formula}${operator}`
  }

  if (operator === minusOp) {
    return `${formula}${operator}`
  }
  const removeLastChar = formula.slice(0, -1)

  return `${removeLastChar}${operator}`
}