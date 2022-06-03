import "./App.css";
import Batching from "./React-V-18/AutomaticBatching/Batching";
import { fakeName } from "./React-V-18/useTransition/fakeName";
import NameList from "./React-V-18/useTransition/NameList";
import UseRef from "./hooks/UseRef/UseRef";

const App = () => {
  return (
    <>
      {/* <NameList names={fakeName} /> */}
      {/* <Batching /> */}
      <UseRef />
    </>
  );
};

export default App;
