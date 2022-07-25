import { Link } from 'react-router-dom';
import './Auth.css';

export const Login = () => {
  return (
    <article className="sign-container-flexbox">
      <div className="sign-container login-container">
        <p className="sign-title">LOGIN</p>
        <form className="sign-form">
          <input
            className="sign-in-field-input"
            placeholder="Email"
            type="text"
            name="email"
            id="email"
          />
          <input
            className="sign-in-field-input"
            placeholder="Password"
            type="password"
            name="password"
            id="password"
          />
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
