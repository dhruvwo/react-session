import "./App.css";
import CalculateWithMemo from "./components/CalculateWithMemo/CalculateWithMemo";
import LongList from "./components/LongList/LongList";
// import LifeCycleConcept from "./components/LifecycleConcept/LifeCycleConcept";
// import ContextDemo from "./components/ContextDemo/ContextDemo";
// import ReduxDemo from "./components/ReduxDemo/ReduxDemo";
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
        <LongList />
        {/* <ContextDemo /> */}
        {/* <ReduxDemo /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
