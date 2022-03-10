export const validateOperator = (formula, operator, evaluated, result) => {
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
      return {
        resul: evaluated ? result : operator,
        formula: evaluated ? `${result}${operator}` : `${formula}${operator}`
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