import { useHistory } from "react-router";
import authContext from '../../auth/AuthContext';
import { useContext } from 'react';
import types from '../../types/types';


const LoginScreen = () => {

  const history = useHistory();
  const { dispatch } = useContext(authContext);
  const lastpath = localStorage.getItem('lastpath') || '/';
 

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Matías',
        logged: true
      }
    });

    history.replace(lastpath);
  }

  return (
    <div className="container mt-5">
      <h1> Login Screen </h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
