import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section>
      {loading ? <h2>loading...</h2> : ""}
      {error ? <h2>error!</h2> : ""}
      {user ? (
        <div>
          {user.map((item) => {
            return <p>{item.name}</p>;
          })}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default App;
