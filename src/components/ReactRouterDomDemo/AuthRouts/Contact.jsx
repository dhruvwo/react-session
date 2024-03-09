import { Link } from "react-router-dom";
import { generateListItems } from "../../../services/common";
import ListItem from "../../LongList/ListItem";

const Contact = () => {
  const list = generateListItems(5);
  console.log("list", list);
  return (
    <div>
      <h1>Contact Page</h1>
      <div
        style={{
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list.map((contact) => {
          return (
            <Link to={`/contact/${contact.id}`} key={contact.id}>
              <ListItem item={contact} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
