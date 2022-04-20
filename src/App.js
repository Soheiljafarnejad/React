import "./App.css";
import useFetch from "./hooks/useFetch";

const App = () => {
  const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users")
  
  return (
    <section className="app">
      {loading && !error && <h2>loading...</h2>}
      {!loading && error && <h2>{error}</h2>}
      {!error && !loading && data && (
        <div>
          {data.map((item) => {
            return <p>{item.name}</p>;
          })}
        </div>
      )}
    </section>
  );
};

export default App;
