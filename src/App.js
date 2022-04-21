import "./App.css";
import { fakeName } from "./React-V-18/useTransition/fakeName";
import NameList from "./React-V-18/useTransition/NameList";

const App = () => {
  return (
    <>
      <NameList names={fakeName} />
    </>
  );
};

export default App;
