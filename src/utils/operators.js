export const validateOperator = (expression, operator) => {
  switch (operator) {
    case '+':
      return `${expression}${operator}`;
    default:
      return expression
  }
}