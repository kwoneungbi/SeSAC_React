import { useState } from 'react';
type CountHook = [count: number, handleClick: (counter: string) => void];

const useCounter = (inital: number): CountHook => {
  const [count, setCount] = useState(inital);

  const handleClick = (counter: string) => {
    counter === 'increase' && setCount(count + 1);
    counter === 'decrease' && setCount(count - 1);
  };

  return [count, handleClick];
};

export default useCounter;
