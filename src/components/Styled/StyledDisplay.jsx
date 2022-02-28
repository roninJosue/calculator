import styled from "styled-components"

export const StyledDisplay = styled.div`
  padding: 2.5rem .625rem 1rem;
  text-align: right;
  font-family: sans-serif;
  letter-spacing: .1rem;
`

export const StyledFormula = styled.div`
  color: #ccc;
`

export const StyledResult = styled.div`
  font-size: ${({len}) => {
    if (len < 10) return '2.8rem'
    return len < 15 ? '2rem' : '1.8rem'
  }};
  font-weight: 500;
  --padding: 0 0 2rem;
  height: 83px;
`