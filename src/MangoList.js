import "./Home.css";
const MangoList = ({ blogs, handleDelete }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blogs" key={blog.id}>
          <h4 className="title">{blog.title}: </h4>
          <p className="origin">
            Origin: <span> {blog.origin}</span>
          </p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default MangoList;
