import Button from "../button/Button";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({ background }) => {
  return (
    <nav className={`nav ${background}`}>
      <div className="nav_left">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
          className="nav_logo"
        />

        <Link to="/home" className="nav_content">
          <h3>Home</h3>
        </Link>

        <Link to="/myList" className="nav_content">
          <h3>My List</h3>
        </Link>

        <Link to="/search" className="nav_content">
          <h3>Search</h3>
        </Link>
      </div>
      <div className="nav_right">
        <Link to="/profile">
          <img
            src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
            alt="Avatar"
            className="nav_avatar"
          />
        </Link>
        <Link to="/signout" className="nav_content">
          <Button text="Sign Out" size="small" />
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
