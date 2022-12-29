import { Fragment } from "react";

function Input(props) {
  return (
    <Fragment>
      <label className="font-serif" htmlFor={props.id}>
        {props.children}
      </label>
      <input
        className={`${!props.isValid && props.isTouched ? "not-valid" : ""}`}
        type={props.type}
        value={props.value}
        id={props.id}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </Fragment>
  );
}
export default Input;
