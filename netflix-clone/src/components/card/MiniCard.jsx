import "./miniCard.css";

const MiniCard = ({ image, content, paragraph }) => {
  return (
    <div className="miniCard">
      <div className="contentone ">
        <h1>{content}</h1>
        <p>{paragraph}</p>
      </div>
      <div className="minicardImage">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MiniCard;
