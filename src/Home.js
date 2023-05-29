import { useState } from "react";
import ListMango from "./ListMango";
import UseFetch1 from "./UseFetch1";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Raspuri Mango",
      origin: "Mysore",
      id: 1,
    },
    {
      title: "Imam Pasand Mango",
      origin: "Tamil Nadu",
      id: 2,
    },
    {
      title: "Alphonso Mango",
      origin: "Portuguese",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    setBlogs(
      blogs.filter((blog) => {
        return blog.id !== id;
      })
    );
  };

  const { info, loading, error } = UseFetch1("https://randomuser.me/api/");

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {info && (
        <ListMango blogs={blogs} handleDelete={handleDelete} info={info} />
      )}
    </div>
  );
};
export default Home;
