import { useState, useEffect } from "react";

const UseFetch1 = (url) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("UseEffect ran");
    fetch(url)
      .then((res) => {
        setLoading(true);
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
      });
  }, [url]);

  return { info, loading, error };
};
export default UseFetch1;
