import "./App.css";
import ContextDemo from "./components/ContextDemo/ContextDemo";
// import CalculateWithMemo from "./components/CalculateWithMemo/CalculateWithMemo";
// import LifeCycleConcept from "./components/LifecycleConcept/LifeCycleConcept";
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
  console.log("***************App rerendering...");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <ThemeProvider>
        {/* <CalculateWithMemo /> */}
        {/* <LifeCycleConcept /> */}
        <ContextDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;
