import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail, isLength } from 'validator';
import { AuthContext } from '../../contexts/AuthContext';
import { useFetch } from '../../hooks/useFetch';
import { parseFormField } from '../../utils/parseFormField';
import './Auth.css';
import { onBlurBasicValidator } from './common/onBlurBasicValidator';
import validationErrors from './common/validationErrors';

const initialInputErrors = {
  email: '',
  password: '',
  repeatPassword: '',
};

const initialInputFields = {
  ...initialInputErrors,
  over18: false,
};

const baseUrl = 'http://localhost:3030/users';

export const Register = () => {
  const [inputFields, setInputFields] = useState(initialInputFields);
  const [inputErrors, setInputErrors] = useState(initialInputErrors);

  const { loginUser } = useContext(AuthContext);
  const [{ data, error }, { post }] = useFetch(baseUrl);
  const navigate = useNavigate();

  useEffect(() => {
    // Loading or Error state
    if (error || !data) return;

    loginUser(data.accessToken, data.email, data._id);
    navigate('/');
  }, [data, error, loginUser, navigate]);

  const onFieldChange = (e) => {
    setInputFields((v) => ({
      ...v,
      ...parseFormField(e),
    }));
  };

  const onBlurValidate = (e, validatorFunc, message) => {
    const name = e.target.name;
    const value = inputFields[name];

    if (name === 'password' && inputFields.repeatPassword.length) {
      let rePassMessage = '';

      if (value !== inputFields.repeatPassword) {
        rePassMessage = validationErrors.repeatPassword;
      }

      setInputErrors((oldState) => ({
        ...oldState,
        repeatPassword: rePassMessage,
      }));
    }

    onBlurBasicValidator(name, value, setInputErrors, validatorFunc, message);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { repeatPassword, over18, ...postData } = inputFields;

    if (!over18) return;
    if (postData.password !== repeatPassword) return;

    post('/register', postData);
  };

  const disableButton =
    !inputFields.over18 || Object.values(inputErrors).some((x) => x);

  return (
    <article className="sign-container-center">
      <div className="sign-container register-container">
        <p className="sign-title">SIGN UP</p>
        <form className="sign-form" onSubmit={onSubmit}>
          <div className="sign-field-input-container">
            <input
              onChange={onFieldChange}
              onBlur={(e) => onBlurValidate(e, isEmail, validationErrors.email)}
              className="sign-in-field-input"
              placeholder="Email"
              type="text"
              name="email"
            />
            <p className="sign-error">{inputErrors.email}</p>
          </div>

          <div className="sign-field-input-container">
            <input
              onChange={onFieldChange}
              onBlur={(e) =>
                onBlurValidate(
                  e,
                  (string) => isLength(string, { min: 5 }),
                  validationErrors.password
                )
              }
              className="sign-in-field-input"
              placeholder="Password"
              type="password"
              name="password"
            />
            <p className="sign-error">{inputErrors.password}</p>
          </div>
          <div className="sign-field-input-container">
            <input
              onChange={onFieldChange}
              onBlur={(e) =>
                onBlurValidate(
                  e,
                  () => inputFields.password === inputFields.repeatPassword,
                  validationErrors.repeatPassword
                )
              }
              className="sign-in-field-input"
              placeholder="Repeat Password"
              type="password"
              name="repeatPassword"
            />

            <p className="sign-error">{inputErrors.repeatPassword}</p>
          </div>
          <div className="age-agreement-container">
            <input
              onChange={onFieldChange}
              className="age-checkbox"
              type="checkbox"
              name="over18"
            />
            <label className="age-label" htmlFor="over18">
              I agree I'm at least 18 years old.
            </label>
          </div>
          <button
            disabled={disableButton}
            style={disableButton ? { cursor: 'not-allowed' } : {}}
            className="sign-btn">
            SIGN UP
          </button>
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
