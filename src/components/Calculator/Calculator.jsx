import React from 'react';
import Button from "../Button";
import {Section} from "../Styled/Section";

const Calculator = () => {
  return (
    <Section aria-label='calculator'>
      <Button text={2} onClick={() => console.log('test')} />
    </Section>
  );
};

export default Calculator;
