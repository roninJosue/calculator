import React from 'react';
import {Section} from "../Styled/Section";
import Numbers from "../Numbers";
import Operators from "../Operators";
import Functions from "../Functions";

const Calculator = () => {
  return (
    <Section aria-label='calculator'>
      <div style={{display: 'flex'}}>
        <div>
          <Functions />
          <Numbers />
        </div>
        <Operators />
      </div>
    </Section>
  );
};

export default Calculator;
