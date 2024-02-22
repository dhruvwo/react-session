export default function Wrapper2({ InnerComponent }) {
  return (
    <div
      style={{
        color: "red",
      }}
    >
      Passed as component: <InnerComponent />
    </div>
  );
}
