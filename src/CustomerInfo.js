import React from 'react';
import UseFetch1 from './UseFetch1';

const CustomerInfo = ()=>{
const { info, loading, error } = UseFetch1("https://randomuser.me/api/");
console.log('LAVG:',info);
    return(
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
        
    );
}
export default CustomerInfo;