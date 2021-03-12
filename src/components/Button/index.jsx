import classNames from "classnames";

const Button = ({
  label,
  className,
  block,
  type,
  mr,
  size,
  blue,
  search,
  white,
  disabled,
  dataToggle,
  dataTarget,
  onClick,
}) => {
  return (
    <button
      data-toggle={dataToggle}
      data-target={dataTarget}
      type="button"
      className={classNames(
        "btn",
        { btn__blue: blue },
        { btn__search: search },
        { btn__white: white },
        { "btn-block": block },
        { "mr-3": mr },
        { [`btn-${size}`]: size },
        { [`btn-${type}`]: type },
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label && label}
    </button>
  );
};

export default Button;
