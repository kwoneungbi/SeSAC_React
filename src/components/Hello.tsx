import { PropsWithChildren } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
};

const Hello = ({
  name,
  age,
  plusCount,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <h2>
        Hello, {name}({age})
      </h2>
      {children}
      <button onClick={plusCount}>count + 1</button>
    </>
  );
};
export default Hello;
