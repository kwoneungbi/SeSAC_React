import { useRef, useState } from 'react';
import Hello from './components/Hello';
import My from './components/My';
import './App.css';
import { LoginHandle } from './components/Login';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  loginUser: null,
  // loginUser : { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  console.log('@@@App');

  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const loginHandleRef = useRef<LoginHandle>(null);

  const plusCount = () => setCount((prevCount) => prevCount + 1);

  const login = ({ id, name }: LoginUser) => {
    if (!name) {
      alert('input name, please');
      loginHandleRef.current?.focusName();
      return;
    }
    if (!id) {
      alert('input id, please');
      loginHandleRef.current?.focusId();
      return;
    }
    setSession({ ...session, loginUser: { id, name } });
  };
  const logout = () => {
    setSession({ ...session, loginUser: null });
  };

  const saveCartItem = (name: string, price: number) => {
    const id =
      session.cart
        .map((cart) => cart.id)
        .sort()
        .at(-1) || 0;
    setSession({
      ...session,
      cart: [...session.cart, { id: id + 1, name, price }],
    });
  };

  const removeCartItem = (itemId: number): void => {
    setSession({
      ...SampleSession,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  return (
    <>
      <h2>count: {count}</h2>
      <Hello name='홍길동' age={30} plusCount={plusCount} />
      <hr />
      <My
        session={session}
        login={login}
        logout={logout}
        loginHandleRef={loginHandleRef}
        saveCartItem={saveCartItem}
        removeCartItem={removeCartItem}
      />
    </>
  );
}

export default App;
