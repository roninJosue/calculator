import {useRecoilValue} from "recoil";

import {
  StyledDisplay,
  StyledFormula,
  StyledResult
} from "../Styled/StyledDisplay"
import {calculator} from "../../recoil/calculator/atom";

const Display = () => {
  const {formula, result} = useRecoilValue(calculator)

  return(
    <StyledDisplay id='display'>
      <StyledFormula>
        {formula}
      </StyledFormula>
      <StyledResult len={result.length}>
        {result}
      </StyledResult>
    </StyledDisplay>
  )
}

export default Display