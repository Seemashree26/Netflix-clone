import "./input.css";
const Input = ({
  type,
  name = "",
  value,
  color = "white",
  placeholder,
  size,
  onChange,
}) => {
  return (
    <>
      <input
        className={`${size}`}
        name={name}
        type={type}
        value={value}
        color={color}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
