import "./content.css";
const Content = ({ heading, head, para, text }) => {
  return (
    <>
      <div className="profile_content">
        <h1 className="heads">{heading}</h1>
        <h1 className="header">{head}</h1>
        <h3 className="smallHeads">{text}</h3>
        <p className="paras">{para}</p>
      </div>
    </>
  );
};
export default Content;
