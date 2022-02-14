import React from 'react';
import Button from "../Button";
import ThemeToggler from "../ThemeToggler";

const Calculator = () => {
  return (
    <section>
      <h1>
        Calculator
      </h1>
      <ThemeToggler />
      <Button text={2} onClick={() => console.log('test')} />
    </section>
  );
};

export default Calculator;
