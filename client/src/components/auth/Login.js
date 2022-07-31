import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const initialInputs = { email: '', password: '' };

export const Login = () => {
  const [inputFields, setInputFields] = useState(initialInputs);

  const onFieldChange = ({ target }) => {
    setInputFields((v) => ({
      ...v,
      [target.id]: target.value,
    }));
  };

  return (
    <article className="sign-container-center">
      <div className="sign-container login-container">
        <p className="sign-title">LOGIN</p>
        <form className="sign-form">
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Email"
              type="text"
              name="email"
              id="email"
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
              id="password"
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
