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
      <h4>
        Hello, {name}({age})
      </h4>
      {children}
      <button onClick={plusCount}>count + 1</button>
    </>
  );
};
export default Hello;
