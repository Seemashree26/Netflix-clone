import Button from "../../button/Button";
import Input from "../../input/Input";
import "./signUpForm.css";

const SignUpForm = () => {
  return (
    <form class="signUpForm">
      <legend>Sign Up</legend>
      <div className="inputs">
        <Input
          type="email"
          placeholder="Email or Phone number"
          size="smallInput"
        />
        <Input type="password" placeholder="Password" size="smallInput" />
        <Button text="Sign Up" size="large" />
      </div>
      <div className="bottom">
        <h4>Already subcribed to netflix?</h4>
        <a href="">Sign In</a>
      </div>
    </form>
  );
};

export default SignUpForm;
