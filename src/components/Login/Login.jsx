import Input from "../UI/Input";
import { useReducer, useState, useEffect } from "react";
import { useContext } from "react";
import authenticationContext from "../store/authentication-context";

const initState = {
  firstnameValue: "",
  firstnameIsValid: false,
  lastnameValue: "",
  lastnameIsValid: false,
  emailValue: "",
  emailIsValid: false,
  passwordValue: "",
  passwordIsValid: false,
};

const reducer = (state, action) => {
  if (action.type === "firstname") {
    return {
      ...state,
      firstnameValue: action.value,
      firstnameIsValid: state.firstnameValue.trim().length > 2,
    };
  } else if (action.type === "lastname") {
    return {
      ...state,
      lastnameValue: action.value,
      lastnameIsValid: state.lastnameValue.trim().length > 2,
    };
  } else if (action.type === "email") {
    return {
      ...state,
      emailValue: action.value,
      emailIsValid: state.emailValue.includes("@"),
    };
  } else if (action.type === "password") {
    return {
      ...state,
      passwordValue: action.value,
      passwordIsValid: state.passwordValue.trim().length > 6,
    };
  }
  return initState;
};

function Login() {
  const ctx = useContext(authenticationContext);
  const [formState, dispatchForm] = useReducer(reducer, initState);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(
      formState.lastnameIsValid &&
        formState.firstnameIsValid &&
        formState.emailIsValid &&
        formState.passwordIsValid
    );
  }, [
    formState.lastnameIsValid,
    formState.firstnameIsValid,
    formState.emailIsValid,
    formState.passwordIsValid,
  ]);

  const inputHandler = (e) => {
    dispatchForm({ type: e.target.name, value: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (formValid) {
      ctx.onLogin(
        formState.lastnameIsValid,
        formState.firstnameIsValid,
        formState.emailIsValid,
        formState.passwordIsValid
      );
    }
  };

  return (
    <form
      className="w-80 bg-white p-8 rounded-xl flex flex-col space-y-5  mx-auto"
      onSubmit={submitFormHandler}
    >
      <Input
        id="first-name"
        placeholder="First Name"
        type="text"
        onChange={inputHandler}
        name="firstname"
        isValid={formState.firstnameIsValid}
      >
        First Name
      </Input>
      <Input
        id="last-name"
        placeholder="Last Name"
        type="text"
        name="lastname"
        onChange={inputHandler}
        isValid={formState.lastnameIsValid}
      >
        Last Name
      </Input>
      <Input
        id="email"
        placeholder="yourname@gmail.com"
        type="email"
        onChange={inputHandler}
        name="email"
        isValid={formState.emailIsValid}
      >
        Email
      </Input>
      <Input
        id="password"
        type="password"
        onChange={inputHandler}
        name="password"
        isValid={formState.passwordIsValid}
      >
        Password
      </Input>

      <button
        className={`${
          formValid === false
            ? "disabled"
            : "gradient py-2 px-12 rounded-full text-white font-semibold"
        }`}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
