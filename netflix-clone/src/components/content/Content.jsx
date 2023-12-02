import "./content.css";
const Content = ({ heading, para, text }) => {
  return (
    <>
      <h1 className="heads">{heading}</h1>
      <h3 className="smallHeads">{text}</h3>
      <p className="paras">{para}</p>
    </>
  );
};
export default Content;
