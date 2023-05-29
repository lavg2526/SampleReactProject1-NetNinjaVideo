import "./Home1.css";
import CustomerInfo from "./CustomerInfo";
const ListMango = ({ blogs, handleDelete, info }) => {
  console.log("LAVG info:", info);
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blogs" key={blog.id}>
          <h4 className="title">{blog.title}: </h4>
          <p className="origin">
            Origin: <span> {blog.origin}</span>
          </p>
          <a href="/customerInfo">Get Customer Information:</a>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ListMango;
