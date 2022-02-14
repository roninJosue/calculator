import React from 'react';
import Button from "../Button";

const Calculator = () => {
  return (
    <section>
      <Button text={2} onClick={() => console.log('test')} />
    </section>
  );
};

export default Calculator;
