// todo if length === 1, and button pressed is 0, do nothing
export const validateDigit = (expression, digit) => {
  if (isNaN(digit)) {
    return digit === '.' ? isDot(digit, expression) : (Number(expression) * -1).toString()
  } else {
    return Number(`${expression}${digit}`).toString()
  }
}

const isDot = (dot, expression) => {
  const hasDot = (expression.match(/\./g) || []).length
  if (hasDot > 0) return ''

  return `${expression}${dot}`
}