import "./App.css";
import Batching from "./React-V-18/AutomaticBatching/Batching";
import { fakeName } from "./React-V-18/useTransition/fakeName";
import NameList from "./React-V-18/useTransition/NameList";

const App = () => {
  return (
    <>
      {/* <NameList names={fakeName} /> */}
      <Batching />
    </>
  );
};

export default App;
