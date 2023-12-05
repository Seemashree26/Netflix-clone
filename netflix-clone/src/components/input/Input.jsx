import "./input.css";
const Input = ({ type, value, placeholder, size, onChange }) => {
  return (
    <>
      <input
        className={`${size}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
