import { useState } from "react";
import ListMango from "./ListMango";
import UseFetch1 from "./UseFetch1";
import Cart from "./Cart";

const Home = ({ blogs }) => {
  const { info, loading, error } = UseFetch1("https://randomuser.me/api/");
  console.log("home", blogs);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {info && <ListMango blogs={blogs} info={info} />}
    </div>
  );
};
export default Home;
