export const validateOperator = (formula, operator) => {
  let obj = {
    res: '',
    formula: ''
  }

  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
      return {
        resul: operator,
        formula: `${formula}${operator}`
      };
    case '=':
      const res = eval(formula).toString()

      return {
        resul: res,
        formula: `${formula}${operator}${res}`
      }
    default:
      return formula
  }
}