import { useEffect, useRef } from 'react';
import { LoginUser } from '../App';

type Props = {
  login: ({ id, name }: LoginUser) => void;
};

const Login = ({ login }: Props) => {
  console.log('@@@Login');
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  // const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setId(Number(e.currentTarget.value));
  // };

  // const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.currentTarget.value);
  // };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const id = Number(idRef.current?.value);
    console.log(name);
    login({ id, name });
  };

  useEffect(() => {
    if (idRef.current) idRef.current.value = '100';
    if (nameRef.current) nameRef.current.focus();
  });

  return (
    <form onSubmit={(e) => submit(e)}>
      <div>
        {/* Login ID(숫자): <input type='number' onChange={handleChangeId} /> */}
        Login ID(숫자): <input type='number' ref={idRef}></input>
      </div>
      <div>
        Login Name: <input type='text' ref={nameRef} />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};
export default Login;
