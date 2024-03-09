import "./App.css";
import CalculateWithMemo from "./components/CalculateWithMemo/CalculateWithMemo";
import ExampleWithRender from "./components/ExampleWithRender";
import LongList from "./components/LongList/LongList";
// import ReactRouterDomDemo from "./components/ReactRouterDomDemo/ReactRouterDomDemo";
// import { AuthProvider } from "./contexts/AuthProvider";
// import LongList from "./components/LongList/LongList";
// import LifeCycleConcept from "./components/LifecycleConcept/LifeCycleConcept";
import ContextDemo from "./components/ContextDemo/ContextDemo";
import ReduxDemo from "./components/ReduxDemo/ReduxDemo";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { useEffect, useLayoutEffect } from "react";

function App() {
  console.log("***************App rerendering...");
  useEffect(() => {
    console.log("use effect in app");
  }, []);
  useLayoutEffect(() => {
    console.log("use layoutt effect in app");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <ThemeProvider>
        {/* <ExampleWithRender /> */}
        {/* <CalculateWithMemo /> */}
        {/* <LifeCycleConcept /> */}
        {/* <LongList /> */}
        {/* <ContextDemo /> */}
        <ReduxDemo />
        {/* <AuthProvider>
          <ReactRouterDomDemo />
        </AuthProvider> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
