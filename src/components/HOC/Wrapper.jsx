export default function Wrapper({ children }) {
  return (
    <div
      style={{
        color: "green",
      }}
    >
      Passed as children: {children}
    </div>
  );
}
