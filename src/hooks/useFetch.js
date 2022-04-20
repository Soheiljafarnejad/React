import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
