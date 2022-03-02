// todo if length === 1, and button pressed is 0, do nothing
export const validateDigit = (expression, digit) => {
  //debugger;
  if (expression.length === 1 && digit === 0) {
    return ''
  }

  const firstChar = expression.charAt(0)
  if (expression.length === 1 && digit !== 0 && firstChar === '0') {
    return `${expression.substring(1)}${digit}`
  }

  return `${expression}${digit}`
}