import { useEffect, useMemo, useState } from "react";
import useScreenSize from "../hooks/useScreenSize";
import Counter from "./CounterManager/CounterManager";

export default function ExampleWithRender({ counterParent = 0 }) {
  const [counterChild, setCounterChild] = useState(0);
  const screenWidth = useScreenSize();
  console.log("Rerendering ExampleWithRender", screenWidth);
  useEffect(() => {
    console.log("empty Effect");
  }, []);

  useEffect(() => {
    console.log("counter Use Effect");
  }, [counterChild]);

  useEffect(() => {
    console.log("screenWidth Use Effect");
    return () => {
      console.log("screenWidth Use Effect Return");
    };
  }, [screenWidth]);

  const sum = useMemo(() => {
    console.log("Summing up counters");
    return counterChild + counterParent;
  }, [counterChild, counterParent]);

  return (
    <>
      <div>Screen width: {screenWidth.width}</div>
      <div>
        <Counter
          label={"Child"}
          setCounter={setCounterChild}
          counter={counterChild}
        />
      </div>
      <div>Sum of counters: {sum}</div>
    </>
  );
}
