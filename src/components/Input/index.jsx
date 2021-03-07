import classNames from "classnames";

const Input = ({ type, placeholder, search, className }) => {
  return (
    <input
      className={classNames("p-2 m-2", { input__search: search }, className)}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
