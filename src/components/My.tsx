import { LoginUser, Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: ({ id, name }: LoginUser) => void;
  logout: () => void;
  removeCartItem: (itemId: number) => void;
};

const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeCartItem,
}: Props) => {
  console.log('@@@My');
  return (
    <div style={{ border: '2px solid skyblue', padding: '20px' }}>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}({price}) <small>{id}</small>
            <button onClick={() => removeCartItem(id)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default My;
