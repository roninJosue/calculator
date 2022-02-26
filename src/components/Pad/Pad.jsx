import Functions from "../Functions";
import Numbers from "../Numbers";
import Operators from "../Operators";
import {StyledPad} from "../Styled/StyledPad";

const Pad = () => {
  return(
    <StyledPad>
        <div>
          <Functions />
          <Numbers />
        </div>
        <Operators />
    </StyledPad>
  )
}

export default Pad