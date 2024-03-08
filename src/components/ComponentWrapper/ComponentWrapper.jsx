export default function ComponentWrapper({ label, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        border: "1px solid white",
        // minHeight: 200,
        minWidth: 400,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: 20,
          lineHeight: 1,
          color: "red",
        }}
      >
        {label}
      </h2>
      {children}
    </div>
  );
}
