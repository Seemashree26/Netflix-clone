import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Footer from "../../../components/footer/Footer";
import { useState } from "react";
import "./signUpScreen.css";
const SignUpScreen = () => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  // const navigator = useNavigate();
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
    <div className="signUpScreen">
      <div className="grad_container2">
        <div className="logo_signup">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
          <div className="signUpform">
            <div className="container_signup">
              <h1 className="head_signup">Sign Up</h1>
              <Input
                type="email"
                placeholder="Email or Phone number"
                size="smallInputEmail"
                value={mailId}
                onChange={(e) => setMailId(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Add a Password"
                size="smallInputEmail"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Link to="/home">
                <Button
                  text="Sign Up"
                  size="largeSignin"
                  onClick={handleLogin}
                />
              </Link>
              <div className="bottom_signup">
                <h4>Already subscribed to Netflix?</h4>
                <Link to="/signin" className="signin_link">
                  Sign In
                </Link>
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
export default SignUpScreen;
