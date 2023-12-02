import "./input.css";
const Input = ({  type, value, placeholder, size }) => {
  return (
    <>
      <input className={`${size}`} type={type} value={value} placeholder={placeholder}/>
    </>
  );
};
export default Input;