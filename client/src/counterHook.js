import { useState } from "react";

export const useCounter = (initial = 0, productName, handleQuantityChange) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    setCount(count + 1);
    handleQuantityChange(productName, count + 1); 
  };

  const decrease = () => {
    if (count !== 0) {
      setCount(count - 1);
      handleQuantityChange(productName, count - 1);
    }
  };

  const reset = () => {
    setCount(0);
    handleQuantityChange(productName, 0); 
  };

  return [count, increase, decrease, reset];
};
