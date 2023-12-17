import {
  FormEvent,
  RefObject,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { LoginUser } from '../App';

type Props = {
  login: ({ id, name }: LoginUser) => void;
  ref: RefObject<LoginHandle>;
};

export type LoginHandle = {
  focusName: () => void;
  focusId: () => void;
};

const Login = forwardRef(({ login }: Props, ref) => {
  console.log('@@@Login');

  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const id = Number(idRef.current?.value);
    console.log(id, name);
    login({ id, name });
  };

  const focusName = () => {
    if (nameRef.current) nameRef.current.focus();
  };

  const focusId = () => {
    if (idRef.current) idRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { focusName, focusId };
  });

  useEffect(() => {
    if (idRef.current) idRef.current.value = '100';
    if (nameRef.current) nameRef.current.focus();
  }, []);

  return (
    <form onSubmit={(e) => submit(e)}>
      <div>
        Login ID(숫자): <input type='number' ref={idRef} />
      </div>
      <div>
        Login Name: <input type='text' ref={nameRef} />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
});
export default Login;
