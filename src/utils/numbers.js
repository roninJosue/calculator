// TODO extract negate number operation to another function
// TODO review preventLeadingZeros function
export const validateDigit = (expression, digit) => {
  if (isNaN(digit)) {
    return digit === '.' ?
      isDot(digit, expression) :
      (Number(expression) * -1).toString()
  } else {
    return preventLeadingZeros(`${expression}${digit}`)
  }
}

export const isDot = (dot, expression) => {
  console.log(expression)
  if (expression.length === 1 && expression !== '.') return `${expression}${dot}`
  const hasDot = (expression.match(/\./g) || []).length
  return hasDot > 0 ? expression : `${expression}${dot}`
}

export const preventLeadingZeros = (expression) => {
  console.log(expression.charAt(1))
  return expression.charAt(1) !== '.' ? expression.replaceAll(/^0+(?!$)/ig, '') : expression
}