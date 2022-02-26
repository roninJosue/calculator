import {Section} from "../Styled/Section";
import Pad from "../Pad";
import Display from "../Display";

const Calculator = () => {
  return (
    <Section aria-label='calculator'>
      <Display />
      <Pad />
    </Section>
  );
};

export default Calculator;
