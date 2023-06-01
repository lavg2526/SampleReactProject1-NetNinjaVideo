import { useState, useEffect } from "react";

const UseFetch1 = (url) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("UseEffect ran");
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          setError(null);
          return res.json();
        })
        .then((data) => {
          console.log("LAV", data);
          setInfo(data.results);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError("Page not found");
          setLoading(false);
        });
    }, 2000);
  }, [url]);

  return { info, loading, error };
};
export default UseFetch1;
