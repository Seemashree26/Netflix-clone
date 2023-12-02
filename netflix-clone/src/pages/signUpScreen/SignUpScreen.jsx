import SignUpForm from "../../components/form/signUpForm/SignUpForm";
import "./signUpScreen.css";
const SignUpScreen = () => {
  return (
    <div className="signUpScreen">
      <div className="grad_container2">
        <div className="logo">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="Netflix"
          />
          <div className="container">
            <div className="signUpform">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpScreen;
