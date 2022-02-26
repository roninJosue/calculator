import {useRecoilValue} from "recoil";

import {
  StyledDisplay,
  StyledFormula,
  StyledResult
} from "../Styled/StyledDisplay"
import {formula, result} from "../../recoil/calculator/atom";

const Display = () => {
  const formulaValue = useRecoilValue(formula)
  const resultValue = useRecoilValue(result)

  return(
    <StyledDisplay id='display'>
      <StyledFormula>
        {formulaValue}
      </StyledFormula>
      <StyledResult>
        {resultValue}
      </StyledResult>
    </StyledDisplay>
  )
}

export default Display