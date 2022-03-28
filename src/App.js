import PrevuesContext from "./Providers/PrevuesContext";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Filtered from "./components/Filter/Filtered";

import "./App.css";

const App = () => {
  return (
    <PrevuesContext>
      <NavBar />
      <Filtered />
      <ProductList />
    </PrevuesContext>
  );
};

export default App;
