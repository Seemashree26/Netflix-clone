import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import "./loginScreen.css";
const LoginScreen = () => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();
  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedData &&
      mailId === storedData.mailId &&
      password === storedData.password
    ) {
      console.log("Login successful!");
    } else {
      console.log("Invalid mailId or password");
    }
  };
  return (
    <div className="loginScreen">
      <div className="grad_container">
        <div className="logo_signin">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
        </div>
        <div className="signinform">
          <div className="container_signin">
            <h1 className="head_signin">Sign In</h1>

            <Input
              type="email"
              placeholder="Email or Phone number"
              size="smallInputEmail"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              size="smallInputEmail"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link to="/home">
              <Button text="Sign In" size="largeSignin" onClick={handleLogin} />
            </Link>

            <div className="middle">
              <div>
                <Input type="checkbox" />
                <label for="remember">Remember Me</label>
              </div>
              <Link to="/" className="need_help">
                Need help?
              </Link>
            </div>
            <div className="bottom">
              <div className="signup">
                <h4>New to Netflix?</h4>
                <Link to="/signup" className="signup_button">
                  Sign up now.
                </Link>
              </div>
              <div className="botVerify">
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <span>
                    <a href="#"> Learn more. </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="foot_div">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
