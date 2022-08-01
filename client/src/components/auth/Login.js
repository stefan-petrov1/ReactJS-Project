import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useFetch } from '../../hooks/useFetch';
import './Auth.css';

const initialInputs = { email: '', password: '' };
const baseUrl = 'http://localhost:3030/users';

export const Login = () => {
  const [inputFields, setInputFields] = useState(initialInputs);
  const { loginUser } = useContext(AuthContext);
  const [{ data, error }, { post }] = useFetch(baseUrl);
  const navigate = useNavigate();

  useEffect(() => {
    // Loading or Error state
    if (error || !data) return;

    loginUser(data.accessToken, data.email, data._id);
    navigate('/');
  }, [data, error, loginUser, navigate]);

  const onFieldChange = ({ target }) => {
    setInputFields((v) => ({
      ...v,
      [target.name]: target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    post('/login', inputFields);
  };

  return (
    <article className="sign-container-center">
      <div className="sign-container login-container">
        <p className="sign-title">LOGIN</p>
        <form className="sign-form" onSubmit={onSubmit}>
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Email"
              type="email"
              name="email"
              onChange={onFieldChange}
            />
            <p className="sign-error">Image urk should be valid</p>
          </div>
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Password"
              type="password"
              name="password"
              onChange={onFieldChange}
            />
            <p className="sign-error">Image urk should be valid</p>
          </div>
          <button className="sign-btn">Login</button>
        </form>
        <p className="sign-options-text">Or login with</p>
        <div className="sign-buttons-container">
          <button className="sign-up-facebook-btn">Facebook</button>
          <button className="sign-up-google-btn">Google</button>
        </div>
        <p className="sign-already-a-user">
          Need an account? <Link to="/register">SIGN UP</Link>
        </p>
      </div>
    </article>
  );
};
