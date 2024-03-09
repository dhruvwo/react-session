import { generateListItems } from "../../services/common";
import ListItem from "./ListItem";

const LongList = () => {
  const list = generateListItems();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {list.map((item) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </div>
  );
};
export default LongList;
