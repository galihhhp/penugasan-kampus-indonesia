import classNames from "classnames";

const Input = ({
  type,
  placeholder,
  label,
  search,
  className,
  onChange,
  value,
  name,
}) => {
  return (
    <>
      <label className="ml-2 m-0">{label && label}</label>
      <input
        className={classNames("p-2 m-2", { input__search: search }, className)}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
