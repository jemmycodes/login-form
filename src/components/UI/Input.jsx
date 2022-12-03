function Input(props) {
  return (
    <div className="flex flex-col space-y-3">
      <label className="font-serif" htmlFor={props.id}>
        {props.children}
      </label>
      <input
        className={`${
          props.isValid === true
            ? "focus:border-green-500 focus:border-x-transparent"
            : ""
        }`}
        type={props.type}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
      />
    </div>
  );
}
export default Input;
