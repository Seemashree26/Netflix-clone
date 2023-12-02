import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Content from "../../../components/content/Content";
import MiniCard from "../../../components/card/MiniCard";
import mini from "../../../assets/images/mini.png";
import mini2 from "../../../assets/images/mini2.png";
import mini3 from "../../../assets/images/mini3.png";
import mini4 from "../../../assets/images/mini4.png";
import { Link } from "react-router-dom";
import "./profileScreen.css";

const ProfileScreen = ({ content }) => {
  return (
    <>
      <div className="landingPage">
        <div className="container">
          <div className="head">
            <div id="icon"></div>
            <div className="dropdown">
              <select name="language" id="langs">
                <option value="lang1">English</option>
                <option value="lang2">Tamil</option>
                <option value="lang3">Hindi</option>
              </select>
              <Link to="/signin">
                <Button text="Sign In" size="signin" />
              </Link>
            </div>
          </div>
          <div className="container-parent">
            <div className="landheading">
              <div className="heading">
                <Content
                  heading="The biggest Indian hits. The best Indian stories. All streaming here."
                  text="Watch anywhere. Cancel anytime."
                  para="Ready to watch? Enter your email to create or restart your membership."
                />
              </div>
              <div className="getstartedbutton">
                <Input
                  type="email"
                  placeholder={"Email address"}
                  size={"largeInputEmail"}
                />
                <Link to="/signinform">
                  <Button text="Get Started" size="medium" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minicardContainer">
        <MiniCard
          content={"Enjoy on your TV"}
          paragraph={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          image={mini}
        />

        <MiniCard
          content={"Download your shows to watch offline"}
          paragraph={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          image={mini2}
        />
        <MiniCard
          content={"Watch everywhere"}
          paragraph={
            "Stream unlimited movies and Tv shows on your phone,tablet,laptop,and TV"
          }
          image={mini3}
        />

        <MiniCard
          content={"Create profiles for kids"}
          paragraph={
            "Send children on adventures with their  favourite charcters in a space made just for them free  with your membership"
          }
          image={mini4}
        />
      </div>
    </>
  );
};
export default ProfileScreen;
