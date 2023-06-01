import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch1 from "./UseFetch1";

const CustomerInfo = () => {
  const { id } = useParams();
  console.log(id);
  const { info, loading, error } = UseFetch1("https://randomuser.me/api/");

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h2>Customer Information </h2>
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
    </>
  );
};
export default CustomerInfo;
