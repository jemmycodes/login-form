import useForm from "../../hooks/use-form";
import Input from "../UI/Input";

function Login(props) {
  const [
    firstName,
    firstNameTouched,
    firstNameHandler,
    firstNameTouchedHandler,
    resetFirstName,
    firstNameIsValid,
    firstNameErrorMessage,
  ] = useForm(
    (value) => value.trim() !== "" && value.length >= 3,
    <p>First Name must be more than 2 letters</p>
  );

  const [
    lastName,
    lastNameTouched,
    lastNameHandler,
    lastNameTouchedHandler,
    resetLastName,
    lastNameIsValid,
    lastNameErrorMessage,
  ] = useForm(
    (value) => value.trim() !== "" && value.length >= 3,
    <p>Last Name must be more than 2 letters</p>
  );

  const [
    email,
    emailTouched,
    emailHandler,
    emailTouchedHandler,
    resetEmail,
    emailIsValid,
    emailErrorMessage,
  ] = useForm(
    (value) => value.trim() !== "" && value.includes("@"),
    <p>Invalid Email Address</p>
  );

  const [
    password,
    passwordTouched,
    passwordHandler,
    passwordTouchedHandler,
    resetPassword,
    passwordIsValid,
    passwordErrorMessage,
  ] = useForm(
    (value) => value.trim().length > 6,
    <p>Password must be more than 6 characters</p>
  );

  let formIsValid =
    firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!firstNameIsValid) {
      return;
    }

    props.onLogin({
      firstName,
      lastName,
      email,
      password,
    });
    resetFirstName();
    resetLastName();
    resetPassword();
    resetEmail();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <Input
          id="first-name"
          type="text"
          placeholder="First Name"
          value={firstName}
          onBlur={firstNameTouchedHandler}
          onChange={firstNameHandler}
          isValid={firstNameIsValid}
          isTouched={firstNameTouched}
        >
          First Name
        </Input>
        {firstNameErrorMessage}
      </div>
      <div>
        <Input
          id="last-name"
          placeholder="Last Name"
          type="text"
          value={lastName}
          onBlur={lastNameTouchedHandler}
          onChange={lastNameHandler}
          isValid={lastNameIsValid}
          isTouched={lastNameTouched}
        >
          Last Name
        </Input>
        {lastNameErrorMessage}
      </div>
      <div>
        <Input
          id="email"
          placeholder="yourname@gmail.com"
          type="email"
          value={email}
          onBlur={emailTouchedHandler}
          onChange={emailHandler}
          isValid={emailIsValid}
          isTouched={emailTouched}
        >
          Email
        </Input>
        {emailErrorMessage}
      </div>
      <div>
        <Input
          id="password"
          type="password"
          value={password}
          onBlur={passwordTouchedHandler}
          onChange={passwordHandler}
          isValid={passwordIsValid}
          isTouched={passwordTouched}
        >
          Password
        </Input>
        {passwordErrorMessage}
      </div>
      <button
        className={`${formIsValid ? "valid" : "disabled"}`}
        disabled={!formIsValid}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
