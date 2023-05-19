import { useState } from "react";
import MangoList from "./MangoList";
import UseFetch from "./UseFetch";
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
  const { info } = UseFetch("https://randomuser.me/api/");
  return (
    <div>
      <MangoList blogs={blogs} handleDelete={handleDelete} info={info} />
    </div>
  );
};
export default Home;
