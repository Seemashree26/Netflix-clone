import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Content from "../../../components/content/Content";
import MiniCard from "../../../components/card/MiniCard";
import mini from "../../../assets/images/mini.png";
import mini2 from "../../../assets/images/mini2.png";
import mini3 from "../../../assets/images/mini3.png";
import mini4 from "../../../assets/images/mini4.png";
import Accordion from "../../../components/accordion/Accordion";
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";
import "./profileScreen.css";

const ProfileScreen = ({ content }) => {
  return (
    <>
      <div className="landingPage">
        <div className="container">
          <div className="head_profile">
            <img
              id="icon"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="netflix"
            />
            <div className="nav_rightside">
              <div className="dropdown">
                <select name="language" id="langs">
                  <option value="lang1">English</option>
                  <option value="lang2">தமிழ்</option>
                  <option value="lang3">हिंदी</option>
                </select>
              </div>
              <Link to="/signin">
                <Button text="Sign In" size="signin" />
              </Link>
            </div>
          </div>
          <div className="container-parent">
            <div className="landheading">
              <div className="heading_profile">
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
                <Link to="/signup">
                  <Button text="Get Started" size="getStarted" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minicardContainer">
        <MiniCard
          head={"Enjoy on your TV"}
          text={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          image={mini}
        />

        <MiniCard
          head={"Download your shows to watch offline"}
          text={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          image={mini2}
        />
        <MiniCard
          head={"Watch everywhere"}
          text={
            "Stream unlimited movies and Tv shows on your phone,tablet,laptop,and TV"
          }
          image={mini3}
        />

        <MiniCard
          head={"Create profiles for kids"}
          text={
            "Send children on adventures with their  favourite charcters in a space made just for them free  with your membership"
          }
          image={mini4}
        />
      </div>
      <Accordion />
      <Footer />
    </>
  );
};
export default ProfileScreen;
