import "./input.css";
const Input = ({ type, name = "", value, placeholder, size, onChange }) => {
  return (
    <>
      <input
        className={`${size}`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
