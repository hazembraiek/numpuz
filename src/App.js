import "./App.css";
import StartGame from "./components/StartGame";
import { useSelector } from "react-redux";
import { Board } from "./components/Board";

function App() {
  const { Options, CurrentOption } = useSelector((state) => state.Options);

  return (
    <div className="App">
      {CurrentOption ? (
        <Board CurrentOption={CurrentOption} />
      ) : (
        <StartGame Options={Options} />
      )}
    </div>
  );
}

export default App;
