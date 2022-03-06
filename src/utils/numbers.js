export const validateDigit = (expression, digit) => {
  if (isNaN(digit)) {
    return digit === '.' ?
      isDot(digit, expression) :
      (Number(expression) * -1).toString()
  } else {
    return preventLeadingZeros(`${expression}${digit}`)
  }
}

const isDot = (dot, expression) => {
  const hasDot = (expression.match(/\./g) || []).length
  return hasDot > 0 ? expression : `${expression}${dot}`
}

const preventLeadingZeros = (expression) => {
  console.log(expression)
  return expression.replaceAll(/^0+(?!$)/ig, '')
}