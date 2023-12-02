import Button from "../../button/Button";
import Input from "../../input/Input";
import "./signInForm.css";

const SignInForm = () => {
  return (
    <form class="signInForm">
      <div className="top">
        <legend>Sign In</legend>
        <div className="inputs">
          <Input
            type="email"
            placeholder="Email or Phone number"
            size="smallInput"
          />
          <Input type="password" placeholder="Password" size="smallInput" />
          <Button text="Sign In" size="large" />
        </div>
      </div>
      <div class="mid">
        <div>
          <Input type="checkbox" />
          <label for="remember">Remember Me</label>
        </div>
        <a href="#">Need help?</a>
      </div>
      <div class="bottom">
        <div id="signup">
          <h4>New to Netflix?</h4>
          <a href="#">Sign up now.</a>
        </div>
        <div id="botVerify">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <a href="#"> Learn more. </a>
        </div>
      </div>
    </form>
  );
};
export default SignInForm;
