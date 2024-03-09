import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const ListItem = ({ item }) => {
  const itemRef = useRef();
  const isVisible = useOnScreen(itemRef, "-100px");
  return (
    <div
      ref={itemRef}
      style={{
        background: "darkGrey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        borderRadius: "5px",
        height: 60,
        width: 200,
      }}
    >
      {isVisible && (
        <>
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
            }}
          >
            Id: {item.id}
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            Name: {item.name}
          </div>
        </>
      )}
    </div>
  );
};
// const Users = React.memo(UserNames);
export default ListItem;
