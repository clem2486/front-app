import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/", {
        method: "GET",
        mode: "cors",
      });
      const data = await response.text();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return <div>{loading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : <p>{data}</p>}</div>;
};

export default App;
