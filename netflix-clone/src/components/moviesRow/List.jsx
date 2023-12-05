import "./list.css";
import Card from "../card/Card";
const List = ({ title, data }) => {
  return (
    <div className="result_pad">
      <h1 className="result_head">{title}</h1>
      <div className="list_items">
        {data?.map((item) => (
          <Card movie={item} />
        ))}
      </div>
    </div>
  );
};
export default List;
