import { FormEvent, RefObject, useRef } from 'react';
import { LoginUser, Session } from '../App';
import Login, { LoginHandle } from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  loginHandleRef: RefObject<LoginHandle>;
  saveCartItem: (name: string, price: number) => void;
  removeCartItem: (itemId: number) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  loginHandleRef,
  saveCartItem,
  removeCartItem,
}: Props) => {
  console.log('@@@My');

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value || ' ';
    const price = itemPriceRef.current?.value;

    if (!name) {
      alert('상품을 정확히 입력해주세요.');
      itemNameRef.current?.focus();
      return;
    }

    if (!price) {
      alert('금액을 정확히 입력해주세요.');
      return itemPriceRef.current?.focus();
    }

    saveCartItem(name, Number(price));
    if (itemNameRef.current) {
      itemNameRef.current.value = '';
    }
    itemPriceRef.current.value = '';
  };

  return (
    <div
      style={{
        border: '2px solid skyblue',
        margin: '30px',
      }}
    >
      <button onClick={() => loginHandleRef.current?.focusName()}>xx</button>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} ref={loginHandleRef} />
      )}
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}({price.toLocaleString()}원)
            <button onClick={() => removeCartItem(id)}>DEL</button>
          </li>
        ))}
        <form onSubmit={submit}>
          <input type='text' ref={itemNameRef}></input>
          <input type='number' ref={itemPriceRef}></input>
          <button type='submit'>Save</button>
        </form>
      </ul>
    </div>
  );
};
export default My;
