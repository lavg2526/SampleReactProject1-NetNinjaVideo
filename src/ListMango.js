import "./Home1.css";
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
          <h5>Get Customer Information: </h5>
          {info.map((custInfo) => (
            <>
              <ul>
                <li>Gender:{custInfo.gender} </li>
                <li>Age:{custInfo.dob.age}</li>
                <li>Name:{custInfo.id.name}</li>
                <li>Country:{custInfo.location.country}</li>
                <li>Postcode:{custInfo.location.postcode}</li>
              </ul>
            </>
          ))}

          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ListMango;
