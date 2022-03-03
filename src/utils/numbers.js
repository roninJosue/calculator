// todo if length === 1, and button pressed is 0, do nothing
export const validateDigit = (expression, digit) => {
  if (isNaN(digit)) {
    return digit === '.' ?
      isDot(digit, expression) :
      (Number(expression) * -1).toString()
  } else {
    // TODO check this statement, don't let put numbers like 5.012 or 5.604
    return Number(`${expression}${digit}`).toString()
  }
}

const isDot = (dot, expression) => {
  const hasDot = (expression.match(/\./g) || []).length
  if (hasDot > 0) return ''

  return `${expression}${dot}`
}