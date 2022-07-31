import { Link } from 'react-router-dom';
import './Auth.css';

export const Register = () => {
  return (
    <article className="sign-container-center">
      <div className="sign-container register-container">
        <p className="sign-title">SIGN UP</p>
        <form className="sign-form">
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Email"
              type="text"
              name="email"
            />
            <p className="sign-error">Image urk should be valid</p>
          </div>

          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Password"
              type="password"
              name="password"
            />
            <p className="sign-error">Image urk should be valid</p>
          </div>
          <div className="sign-field-input-container">
            <input
              className="sign-in-field-input"
              placeholder="Password"
              type="password"
              name="repeat-password"
            />

            <p className="sign-error">Image urk should be valid</p>
          </div>
          <div className="age-agreement-container">
            <input className="age-checkbox" type="checkbox" name="over18" />
            <label className="age-label" htmlFor="over18">
              I agree I'm at least 18 years old.
            </label>
          </div>
          <button className="sign-btn">SIGN UP</button>
        </form>

        <p className="sign-options-text">Or sign up with</p>
        <div className="sign-buttons-container">
          <button className="sign-up-facebook-btn">Facebook</button>
          <button className="sign-up-google-btn">Google</button>
        </div>
        <p className="sign-already-a-user">
          Already a user? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </article>
  );
};
