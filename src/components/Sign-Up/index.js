import { useState } from "react";

import "./styles.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");

  const nameIsValid = name.trim() !== "";
  const emailIsValid = email.trim().includes("@");
  const userTypeIsValid = userType.trim() !== "";
  const passwordIsValid = password.trim() !== "";

  const formIsValid =
    nameIsValid && emailIsValid && userTypeIsValid && passwordIsValid;

  const nameHandlerChange = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const userTypeChnageHandler = (event) => {
    setUserType(event.target.value);
  };

  const passwordChangleHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(name);
    console.log(email);
    console.log(userType);
    console.log(password);

    setName("");
    setEmail("");
    setUserType("");
    setPassword("");
  };

  return (
    <div className="sign-up">
      <div className="content">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>

        <form onSubmit={onSubmitHandler}>
          <input
            onChange={nameHandlerChange}
            placeholder="Your name"
            type="text"
            value={name}
          />
          <input
            onChange={emailChangeHandler}
            placeholder="Email"
            type="email"
            value={email}
          />
          <input
            onChange={userTypeChnageHandler}
            placeholder="User type"
            type="text"
            value={userType}
          />
          <input
            onChange={passwordChangleHandler}
            placeholder="Password"
            type="password"
            value={password}
          />
          <button disabled={!formIsValid} type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
