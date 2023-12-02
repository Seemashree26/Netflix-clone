import "./Button.css";
const Button = ({ text, size }) => {
  return <button className={` ${size} `}>{text}</button>;
};
export default Button;
