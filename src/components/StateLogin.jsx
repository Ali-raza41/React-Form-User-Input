import useInput from "../hooks/useInput.js";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    inputBlurHandler: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    inputBlurHandler: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function submitHandler(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
