import { useState } from "react";
import MangoList from "./MangoList";
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
  return (
    <div>
      <MangoList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};
export default Home;
