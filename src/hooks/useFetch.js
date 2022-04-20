import { useEffect, useReducer } from "react";
import axios from "axios";
const useFetch = (url) => {
  const initState = { loading: true, error: false, data: [] };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_REQUEST":
        return { ...state, loading: true, error: false, data: [] };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, error: false, data: action.payload };
      case "FETCH_FAILURE":
        return { ...state, loading: false, error: action.payload, data: [] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      });
  }, [url]);

  return state;
};

export default useFetch;
