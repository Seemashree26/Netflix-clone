import "./miniCard.css";
import Content from "../content/Content";
const MiniCard = ({ image, head, text }) => {
  return (
    <div className="miniCard">
      <div className="contentone ">
        <Content head={head} text={text} />
      </div>
      <div className="minicardImage">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MiniCard;
