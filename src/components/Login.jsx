import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    const enterEmail = email.current.value;
    const enterPassword = password.current.value;

    const emailIsValid = enterEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          <div className="control-error">
            {passwordIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
