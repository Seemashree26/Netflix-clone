import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Footer from "../../../components/footer/Footer";
import { useState } from "react";
import "./loginScreen.css";
import { login } from "../../../api/movie";
const LoginScreen = () => {
  const navigator = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", user);
    const response = await login(user);
    console.log({ response });
    if (response) {
      navigator("/home");
    } else {
      alert("Invalid email and password");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
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
          <form onSubmit={handleSubmit}>
            <div className="container_signin">
              <h1 className="head_signin">Sign In</h1>

              <Input
                name="username"
                type="text"
                size="smallInputEmail"
                placeholder="Email or Phone number"
                value={user.username}
                onChange={handleChange}
              />
              <Input
                type="password"
                placeholder="Password"
                size="smallInputEmail"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <Button text="Sign In" size="largeSignin" />

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
          </form>
        </div>
        <div className="foot_div">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
