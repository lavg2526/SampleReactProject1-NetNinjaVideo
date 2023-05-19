import {useState,useEffect} from 'react';

const UseFetch = (url)=>{
     const [info, setInfo] = useState([]);
  
  useEffect(() => {
    console.log("UseEffect ran");
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("LAV", data);
        setInfo(data.results);
      });
  }, [url]);
  
  return {info}
  
}
export default UseFetch;