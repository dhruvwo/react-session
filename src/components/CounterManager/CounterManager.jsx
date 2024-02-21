import { useEffect, useRef } from "react";
import styles from "./CounterManager.module.css";

let letCounter = 100;
export default function Counter({ label, counter = 0, setCounter }) {
  const refCounter = useRef(100);
  useEffect(() => {
    const interval = setInterval(
      () => {
        if (label === "Child") {
          letCounter += 10;
          refCounter.current += 10;
        } else {
          letCounter = 100;
          refCounter.current = 100;
        }
      },
      label === "Child" ? 1000 : 5000
    );
    return () => {
      clearInterval(interval);
    };
  }, [label]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        border: "1px solid white",
        height: 250,
        width: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{label} Section</h2>
      {/* TODO: REF Concept
      <div>letCounter: {letCounter}</div>
      <div>refCounter: {refCounter.current}</div> */}
      <div className={styles.counterContainer}>
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        {label}: {counter}
        <button
          onClick={() => {
            setCounter((prevStateValue) => prevStateValue + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
