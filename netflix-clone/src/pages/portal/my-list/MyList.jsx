import { useEffect, useState } from "react";
import { getWishlist } from "../../api/movie";
import Card from "../../components/card/card";
import Nav from "../../components/nav/Nav";
import "./mylist.css";

const MyList = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    getWishlist().then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="myList">
        <Nav background={"nav_black"} />
        <h1>My List</h1>
        <div className="my-list">
          {data?.results?.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyList;
