import { useEffect, useState } from "react";
import { getWishlist } from "../../api/movie";
import Card from "../../components/card/Card";
import "./list.css";

const MyList = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    getWishlist().then((res) => setData(res));
  }, []);
  return (
    <div className="my-list">
      {data?.results?.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MyList;
