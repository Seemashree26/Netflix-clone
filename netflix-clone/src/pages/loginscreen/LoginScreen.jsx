import SignInForm from "../../components/form/signInForm/SignInForm";
import "./loginScreen.css";
const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="grad_container">
        <div className="logo">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
        </div>
        <div className="container">
          <div className="signInform">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
