export default function Counter({ label, counter = 0, setCounter }) {
  return (
    <div>
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
  );
}
