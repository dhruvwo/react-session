import { useState } from "react";
import "./App.css";
import ExampleWithRender from "./components/ExampleWithRender";
import Counter from "./components/CounterManager/CounterManager";
import HOCExample from "./components/HOC/HOCExample";

function App() {
  const [counterParent, setCounterParent] = useState(0);
  console.log("Rerendering App");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <Counter
        label={"Parent"}
        setCounter={setCounterParent}
        counter={counterParent}
      />
      <ExampleWithRender counterParent={counterParent} />
      {/* TODO: for HOC example */}
      {/* <HOCExample /> */}
    </div>
  );
}

export default App;
